import {AccountNavigationRoutes} from '@navigation/Account/def';
import {AppointmentBookingNavigationRoutes} from '@navigation/AppointmentBooking/def';
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
            params: {
              userId: '12512312',
            },
          })
        }
      >
        Go to Account Edit Profile Page
      </button>

      <button
        onClick={() =>
          navigate(RootNavigationRoutes.AppointmentBooking, {
            route: AppointmentBookingNavigationRoutes.PatientChooser,
          })
        }
      >
        Go to Appointment Booking Page
      </button>
    </div>
  );
};
