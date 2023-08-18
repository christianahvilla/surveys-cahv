export type ToursListApiResponse = Array<ITourApiResponse>;
export type ToursListDataTransform = Array<ITourDTO>;

export interface ITourApiResponse {
  id: string;
  state: string;
  city: string;
  colony: string;
  cp: string;
  order: string;
  puntos: IPointsApiResponse[];
  user: IUserTourApiResponse;
}

export interface ITourDTO {
  id: string;
  state: string;
  city: string;
  colony: string;
  cp: string;
  order: string;
  user: string;
}

export interface IUserTourApiResponse {
  id: string;
  username: string;
  nombreCompleto: string;
  celular: string;
}

export interface IPointsApiResponse {
  id: string;
  longitude: string;
  latitude: string;
  street: string;
  number: string;
  order: string;
}
