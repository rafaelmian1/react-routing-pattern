import {RouteObject} from 'react-router-dom';
import {
  AppointmentBookingNavigationParams,
  AppointmentBookingNavigationRoutes,
} from './def';
import {RouteWrapper} from '@navigation/wrapper';
import {PatientChooserPage} from '@pages/PatientChooser';
import {RootNavigationRoutes} from '@navigation/Root/def';
import {SpecialityChooserPage} from '@pages/SpecialityChooser';
import {AppointmentChooserPage} from '@pages/AppointmentChooser';

export const appointmentBookingRoutes: RouteObject[] = [
  {
    path: RootNavigationRoutes.AppointmentBooking,
    children: [
      {
        path: AppointmentBookingNavigationRoutes.PatientChooser,
        index: true,
        element: (
          <RouteWrapper>
            {({navigate}) => (
              <PatientChooserPage
                onChoose={(patientId) =>
                  navigate(RootNavigationRoutes.AppointmentBooking, {
                    route: AppointmentBookingNavigationRoutes.SpecialityChooser,
                    params: {patientId},
                  })
                }
              />
            )}
          </RouteWrapper>
        ),
      },
      {
        path: AppointmentBookingNavigationRoutes.SpecialityChooser,
        element: (
          <RouteWrapper<
            AppointmentBookingNavigationParams[AppointmentBookingNavigationRoutes.SpecialityChooser]
          >>
            {({params, navigate}) => (
              <SpecialityChooserPage
                {...params}
                onChoose={(specialityId) =>
                  navigate(RootNavigationRoutes.AppointmentBooking, {
                    route:
                      AppointmentBookingNavigationRoutes.AppointmentChooser,
                    params: {
                      ...params,
                      specialityId,
                    },
                  })
                }
              />
            )}
          </RouteWrapper>
        ),
      },
      {
        path: AppointmentBookingNavigationRoutes.AppointmentChooser,
        element: (
          <RouteWrapper<
            AppointmentBookingNavigationParams[AppointmentBookingNavigationRoutes.AppointmentChooser]
          >>
            {({params, navigate}) => (
              <AppointmentChooserPage
                {...params}
                onChoose={(appointment) => {
                  console.log({...params, appointment});
                  navigate(RootNavigationRoutes.Home);
                }}
              />
            )}
          </RouteWrapper>
        ),
      },
    ],
  },
];
