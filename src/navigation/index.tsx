import {RouterProvider, createBrowserRouter} from 'react-router-dom';
import {dashboardRoutes} from './Dashboard';
import {accountRoutes} from './Account';
import {rootRoutes} from './Root';

const router = createBrowserRouter([
  ...rootRoutes,
  ...dashboardRoutes,
  ...accountRoutes,
]);

export const Routes = () => {
  return <RouterProvider router={router} />;
};
