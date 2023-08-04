# Type-Safe and Scalable React Web App Routing

In this documentation, we will explore an architectural/design pattern focused on type-safe and scalable practices for routing a React web app. The implementation uses TypeScript and React Router to achieve type safety while routing and provides a structured approach for handling different navigation scenarios.

## Table of Contents

1. [Introduction](#introduction)
2. [Navigation Structure](#navigation-structure)
   - [Root Navigation](#root-navigation)
   - [Account Navigation](#account-navigation)
3. [Key Components](#key-components)
   - [`useNavigate` Hook](#usenavigate-hook)
   - [`RouterWrapper` Component](#routerwrapper-component)
4. [Implementation](#implementation)
5. [Usage](#usage)

## Introduction

This architectural pattern leverages TypeScript and React Router to create a type-safe and scalable navigation system for a React web app.

## Implementation

### Account Routes Definitions

The `AccountNavigationRoutes` enum defines the different routes within the account section, such as `EditProfile` and `Settings`. The `AccountNavigationParams` type defines the parameter structure for each account route.

```tsx
//navigation/Account/def.ts

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

### Account Routes Implementation

The `accountRoutes` array defines the account section's routing configuration. It includes child routes for `Settings` and `EditProfile`, where `EditProfile` has additional route-specific parameters. The `RouteWrapper` component is used to handle parameter passing for `EditProfile`.

```tsx
//navigation/Account/index.tsx

import {RouteObject} from 'react-router-dom';
import {RouteWrapper} from '@navigation/wrapper';
import {RootNavigationRoutes} from '@navigation/Root/def';
import {AccountNavigationParams, AccountNavigationRoutes} from './def';
import {EditProfilePage} from '@pages/EditProfile';
import {SettingsPage} from '@pages/Settings';

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

### Root Routes Definitions

The `RootNavigationRoutes` enum defines the root-level routes of the application, including `Home` and `Account`. The `RootNavigationParams` type defines the parameter structure for each root route, where `Account` includes account-specific parameters.

```tsx
//navigation/Root/def.ts

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

### Root Routes Implementation

The `rootRoutes` array defines the root-level routing configuration, including the default route for `Home` and the `HomePage` component.

```tsx
//navigation/Root/index.tsx

import {Navigate, RouteObject} from 'react-router-dom';
import {RootNavigationRoutes} from './def';
import {HomePage} from '@pages/Home';

export const rootRoutes: RouteObject[] = [
  {path: '*', element: <Navigate to={RootNavigationRoutes.Home} replace />},
  {path: RootNavigationRoutes.Home, element: <HomePage />},
];
```

### Router Setup

The `Routes` component is used to set up the router by combining the root-level and account-level routes. It uses the `createBrowserRouter` function to create the router with the defined routes.

```tsx
//navigation/index.tsx

import {RouterProvider, createBrowserRouter} from 'react-router-dom';
import {accountRoutes} from './Account';
import {rootRoutes} from './Root';

const router = createBrowserRouter([
  ...rootRoutes, 
  ...accountRoutes
]);

export const Routes = () => {
  return <RouterProvider router={router} />;
};

//App.tsx

import {Routes} from '@navigation/index';

const App = () => {
  return <Routes />;
};

export default App;
```

### `RouterWrapper` Component Implementation

The `RouterWrapper` component is used to wrap child components and pass down the route parameters as props. This allows components to receive and use the correct route-specific parameters.

```tsx
//navigation/wrapper.tsx;

import {FC} from 'react';
import {useLocation} from 'react-router-dom';

type RouteWrapperProps<T> = {
  children: FC<T>;
};

export const RouteWrapper = <T extends object>(props: RouteWrapperProps<T>) => {
  const {state} = useLocation();
  const childrenProps = state as T;

  return props.children(childrenProps);
};
```

### `useNavigate` Hook Implementation

The `useNavigate` hook is implemented to provide a type-safe way to navigate between different routes. It takes care of handling both root-level and account-level routes and their respective parameters.

```tsx
//navigation/hook.ts

import {useNavigate as useNavigateHook} from 'react-router-dom';
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

export const useNavigate = (): NavigateFunction => {
  const navigate = useNavigateHook();

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

## Usage

The application uses the implemented routing pattern to navigate between different pages. Components like `HomePage`, `EditProfilePage`, and `SettingsPage` are defined as part of the application's pages.

The `HomePage` component demonstrates how to use the `useNavigate` hook to navigate to different account routes with specific parameters.

```tsx
//pages/Home/index.tsx

import {AccountNavigationRoutes} from '@navigation/Account/def';
import {RootNavigationRoutes} from '@navigation/Root/def';
import {useNavigate} from '@navigation/hook';

export const HomePage = () => {
  const navigate = useNavigate();

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

By using this architectural/design pattern, you can ensure type safety and scalability while navigating through different routes in your React web app. The separation of root and account navigation provides a clean and organized structure, making it easier to manage complex navigation scenarios. Additionally, the `useNavigate` hook ensures that route parameters are correctly handled and passed down to child components.
