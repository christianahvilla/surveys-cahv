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

export type OptionsListApiResponse = Array<IOptionsApiResponse>;

export type OptionsListDTO = Array<IOptionsDTO>;
