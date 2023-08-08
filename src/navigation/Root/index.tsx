import {RouterProvider, createBrowserRouter} from 'react-router-dom';
import {accountRoutes} from '../Account';
import {Navigate, RouteObject} from 'react-router-dom';
import {RootNavigationRoutes} from './def';
import {HomePage} from '@pages/Home';
import {appointmentBookingRoutes} from '../AppointmentBooking';

const routes: RouteObject[] = [
  {path: '*', element: <Navigate to={RootNavigationRoutes.Home} replace />},
  {
    path: RootNavigationRoutes.Home,
    element: <HomePage />,
  },
  ...accountRoutes,
  ...appointmentBookingRoutes,
];

const router = createBrowserRouter(routes);

export const Routes = () => {
  return <RouterProvider router={router} />;
};
