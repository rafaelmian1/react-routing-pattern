import {RouterProvider, createBrowserRouter} from 'react-router-dom';
import {accountRoutes} from './Account';
import {rootRoutes} from './Root';

const router = createBrowserRouter([...rootRoutes, ...accountRoutes]);

export const Routes = () => {
  return <RouterProvider router={router} />;
};
