export interface IOptionsApiResponse {
  id: string;
  img: string;
  nombre: null;
  text: string;
}

export interface IOptionsDTO {
  id: string;
  img: string;
  name: null;
  text: string;
}

export type IOptionsListApiResponse = Array<IOptionsApiResponse>;

export type IOptionsListDTO = Array<IOptionsDTO>;
