import { IOptions } from '~types/api/options-object.type';

export type IQuestionApiResponse = Array<IQuestionData>;

export type QuestionDataTransform = Array<IQuestionDataTransform>;

export interface IQuestionDataTransform {
  description: string;
  survey: IQuestionSurveyDataTransform;
  id: string;
  options: IOptions[];
  text: string;
  type: QuestionTypeApiResponse;
}

export interface IQuestionData {
  descripcion: string;
  encuesta: ISurveyApiResponse;
  id: string;
  opciones: IOptions[];
  textoPregunta: string;
  tipo: QuestionTypeApiResponse;
}

export interface IQuestionSurveyDataTransform {
  client: IClient;
  description: string;
  id: string;
  name: string;
  slug: string;
}

export interface ISurveyApiResponse {
  cliente: IClient;
  descripcion: string;
  id: string;
  nombre: string;
  slug: string;
}

export interface IClient {
  id: string;
}

export enum QuestionTypeDataTransform {
  open = 'open',
  multiple = 'multiple',
  multipleImages = 'multipleImages',
}

export enum QuestionTypeApiResponse {
  Abierta = 'abierta',
  Multiple = 'multiple',
  Multipleimages = 'multipleimages',
}
