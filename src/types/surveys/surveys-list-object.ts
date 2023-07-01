import { IClientsList } from '../clients/clients-list-object';

export interface ISurveyListApiResponse {
  id: string;
  nombre: string;
  slug: string;
  descripcion: string;
  cliente: IClientsList;
  preguntas: Array<any>;
}

export interface ISurveyList {
  id: string;
  nombre: string;
  slug: string;
  descripcion: string;
  cliente: IClientsList;
  preguntas: Array<any>;
}
