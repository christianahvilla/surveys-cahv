export interface IPointTourApiResponse {
  data: IPointDataApiResponse[];
}

export interface IPointDataApiResponse {
  encuesta: IPointSurveyApiResponse;
  latitude: string;
  longitude: string;
  number: string;
  id: string;
  order: string;
  recorrido: IPointTourApiResponse;
  street: string;
}

export interface IPointSurveyApiResponse {
  nombre: string;
}

export interface IPointTourApiResponse {
  city: string;
  colony: string;
  cp: string;
  state: string;
}

export interface IPointDataDTO {
  survey: string;
  tour: string;
  cords: string;
  order: number;
  street: string;
  id: string;
}

export type PointsListDTO = Array<IPointDataDTO>;
