export enum NotificationType {
  ERROR = 'error',
  PRIMARY = 'primary',
  WARNING = 'warning',
  SUCCESS = 'success',
}

const SUCCESS_TITLE = 'Solicitud Completada';
const SUCCESS_BODY = 'Elemento creado satisfactoriamente';

export const NOTIFICATION_SUCCESS = {
  title: SUCCESS_TITLE,
  body: SUCCESS_BODY,
  type: NotificationType.SUCCESS,
};
