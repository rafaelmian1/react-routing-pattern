export enum AppointmentBookingNavigationRoutes {
  PatientChooser = 'PatientChooser',
  SpecialityChooser = 'SpecialityChooser',
  AppointmentChooser = 'AppointmentChooser',
}

export type AppointmentBookingNavigationParams = {
  [AppointmentBookingNavigationRoutes.PatientChooser]: undefined;
  [AppointmentBookingNavigationRoutes.SpecialityChooser]: {patientId: string};
  [AppointmentBookingNavigationRoutes.AppointmentChooser]: {
    patientId: string;
    specialityId: string;
  };
};
