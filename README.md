# Type-Safe and Scalable Routing for React Web Apps

This README.md describes an architectural/design pattern for building type-safe and scalable routing in a React web app. The pattern uses TypeScript to ensure type safety in routing and leverages the `react-router-dom` library for navigation.

## Introduction

Routing is a crucial part of any web application. It determines how different components or pages are accessed based on the URL. In large-scale applications, maintaining routing can become complex and error-prone. This pattern aims to provide a scalable and type-safe approach to handle routing in React apps.

## Prerequisites

To follow this pattern, you should have a good understanding of:

- React and React components
- TypeScript
- `react-router-dom` library

## Folder Structure

Before diving into the implementation, let's establish a standard folder structure for the routing-related files. This will help organize the code and make it easier to maintain as the application grows:

```
src/
  |- components/      // Reusable UI components
  |- pages/           // Page components
  |- navigation/      // Routing-related files
    |- hooks/         // Custom hooks for navigation
    |- wrappers/      // Wrapper components for route rendering
    |- Root/          // Root-level routing
    |- Account/       // Account-related routing
```

## Type-Safe Routing

One of the main goals of this pattern is to ensure type safety in routing. We achieve this by defining enums and associated type definitions for each route and its corresponding parameters.

### Example: Account Routes and Params

Let's see how we define type-safe routing for the Account section of the app:

```typescript
// File: navigation/Account/def.ts

export enum AccountNavigationRoutes {
  EditProfile = 'EditProfile',
  Settings = 'Settings',
}

export type AccountNavigationParams = {
  [AccountNavigationRoutes.Settings]: undefined;
  [AccountNavigationRoutes.EditProfile]: {
    userId: string;
  };
};
```

Here, we define `AccountNavigationRoutes` as an enum representing the available routes in the Account section. `AccountNavigationParams` is a type that maps each route to its corresponding set of parameters.

### Root Navigation Params

Next, we define the root-level routing and its parameters:

```typescript
// File: navigation/Root/def.ts

import {AccountNavigationParams} from '../Account/def';

export enum RootNavigationRoutes {
  Home = 'Home',
  Account = 'Account',
}

type MapRouteParams<T, P> = P extends undefined
  ? {route: T}
  : {route: T; params: P};

type RouteParams<T> = {
  [K in keyof T]: MapRouteParams<K, T[K]>;
}[keyof T];

export type RootNavigationParams = {
  [RootNavigationRoutes.Home]: undefined;
  [RootNavigationRoutes.Account]: RouteParams<AccountNavigationParams>;
};
```

In `RootNavigationParams`, we use conditional types to map each root-level route to its corresponding set of parameters.

## Custom Navigation Hook

To enable type-safe navigation, we create a custom hook called `useNavigateOnAuthorized`. This hook takes care of navigating to different routes while ensuring type safety in passing parameters.

```typescript
// File: navigation/hook.ts

import {useNavigate} from 'react-router-dom';
import {RootNavigationParams} from './Root/def';

const makeRoute = (...route: string[]) => {
  if (typeof route === 'string') return `/${route}`;
  return `/${route.join('/')}`;
};

type NavigateFunction = <T extends keyof RootNavigationParams>(
  ...args: undefined extends RootNavigationParams[T]
    ? [rootRoute: T]
    : [rootRoute: T, params: RootNavigationParams[T]]
) => void;

export const useNavigateOnAuthorized = (): NavigateFunction => {
  const navigate = useNavigate();

  return (...args) => {
    const rootRoute = args[0];
    if (!args[1]) return navigate(rootRoute);

    const params = args[1];
    const subRoute = params && 'route' in params ? params.route ?? '' : '';
    const state = params && 'params' in params ? params.params : undefined;
    navigate(makeRoute(rootRoute, subRoute), {state});
  };
};
```

The `useNavigateOnAuthorized` hook intelligently handles parameter passing and ensures that only valid routes and parameters can be accessed.

## Routing Configuration

Now, we can configure the routes in each section of the app and compose them in the root-level routing.

### Example: Account Routes

```typescript
// File: navigation/Account/index.tsx

import {RouteObject} from 'react-router-dom';
import {RootNavigationRoutes} from '@navigation/Root/def';
import {AccountNavigationParams, AccountNavigationRoutes} from './def';
import {EditProfilePage} from '@pages/EditProfile';
import {SettingsPage} from '@pages/Settings';
import {RouteWrapper} from '@navigation/wrapper';

export const accountRoutes: RouteObject[] = [
  {
    path: RootNavigationRoutes.Account,
    children: [
      {path: AccountNavigationRoutes.Settings, element: <SettingsPage />},
      {
        path: AccountNavigationRoutes.EditProfile,
        element: (
          <RouteWrapper<
            AccountNavigationParams[AccountNavigationRoutes.EditProfile]
          >>
            {(props) => <EditProfilePage {...props} />}
          </RouteWrapper>
        ),
      },
    ],
  },
];
```

### Root-Level Routes

Finally, we compose the root-level routes and create the main routing configuration for the app:

```typescript
// File: navigation/index.tsx

import {RouterProvider, createBrowserRouter} from 'react-router-dom';
import {rootRoutes} from './Root';
import {accountRoutes} from './Account';

const router = create;

BrowserRouter([...rootRoutes, ...accountRoutes]);

export const Routes = () => {
  return <RouterProvider router={router} />;
};
```

## Usage

Now, you can use the `useNavigateOnAuthorized` hook and the defined routes to navigate through different sections of the app in a type-safe manner.

### Example: Home Page

```typescript
// File: pages/Home/index.tsx

import {RootNavigationRoutes} from '@navigation/Root/def';
import {useNavigateOnAuthorized} from '@navigation/hook';

export const HomePage = () => {
  const navigate = useNavigateOnAuthorized();

  return (
    <div style={{display: 'flex', flexDirection: 'column', gap: '2rem'}}>
      <button
        onClick={() =>
          navigate(RootNavigationRoutes.Account, {
            route: AccountNavigationRoutes.Settings,
          })
        }
      >
        Go to Account Settings Page
      </button>

      <button
        onClick={() =>
          navigate(RootNavigationRoutes.Account, {
            route: AccountNavigationRoutes.EditProfile,
            params: {userId: '12512312'},
          })
        }
      >
        Go to Account Edit Profile Page
      </button>
    </div>
  );
};
```

## Conclusion

By following this architectural/design pattern, you can build a type-safe and scalable routing system for your React web app. The use of TypeScript, enums, and custom hooks ensures that you can navigate through the app with confidence and avoid common routing-related errors. This pattern is suitable for large-scale applications where routing can become complex and needs to be maintained efficiently. Happy coding!
