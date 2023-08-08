import {RouteOptionalParams, RouteParams} from '@navigation/types';
import {AccountNavigationParams} from '../Account/def';
import {AppointmentBookingNavigationParams} from '../AppointmentBooking/def';

export enum RootNavigationRoutes {
  Home = 'Home',
  Account = 'Account',
  AppointmentBooking = 'AppointmentBooking',
}

export type RootNavigationParams = {
  [RootNavigationRoutes.Home]: undefined;
  [RootNavigationRoutes.Account]: RouteOptionalParams<AccountNavigationParams>;
  [RootNavigationRoutes.AppointmentBooking]: RouteParams<AppointmentBookingNavigationParams>;
};
