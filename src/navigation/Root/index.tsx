import {Navigate, RouteObject} from 'react-router-dom';
import {RootNavigationRoutes} from './def';
import {HomePage} from '@pages/Home';

export const rootRoutes: RouteObject[] = [
  {path: '*', element: <Navigate to={RootNavigationRoutes.Home} replace />},
  {path: RootNavigationRoutes.Home, element: <HomePage />},
];
