import { NotificationType } from '~types/notification/notification-object.type';

const Error500Status = 500;
const Error404Status = 404;
const Error401Status = 401;
const Error403Status = 403;
const Error400Status = 400;

export enum Error400 {
  status = Error400Status,
  title = 'Solicitud Incorrecta ',
  type = NotificationType.ERROR,
}

export enum Error404 {
  status = Error404Status,
  title = 'No Encontrado',
  type = NotificationType.ERROR,
}

export enum Error401 {
  status = Error401Status,
  title = 'Credenciales Equivocadas',
  type = NotificationType.ERROR,
}

export enum Error403 {
  status = Error403Status,
  title = 'No Autorizado',
  type = NotificationType.ERROR,
}

export enum Error500 {
  status = Error500Status,
  title = 'Error Del Servidor',
  type = NotificationType.ERROR,
}

export type ErrorType = {
  status: number;
  title: string;
  type: string;
};

enum StatusErrors {
  Error500Status = 500,
  Error404Status = 404,
  Error401Status = 401,
  Error403Status = 403,
  Error400Status = 400,
}

export type IAvailableErrors = {
  [key in StatusErrors]: ErrorType;
};

export const AVAILABLE_ERRORS: IAvailableErrors = {
  [StatusErrors.Error500Status]: Error500,
  [StatusErrors.Error404Status]: Error404,
  [StatusErrors.Error401Status]: Error401,
  [StatusErrors.Error403Status]: Error403,
  [StatusErrors.Error400Status]: Error400,
};
