import { IOptions } from '~types/api/options-object.type';
import {
  QuestionTypeApiResponse,
  QuestionTypeDataTransform,
} from '~types/questions/questions-list-object';

export type SurveyListDataTransform = Array<ISurveyDataTransform>;

export interface ISurveyDataTransform {
  client: IClientSurveyDataTransform;
  description: string;
  id: string;
  name: string;
  questions: boolean;
  slug: string;
}

export interface IClientSurveyDataTransform {
  id: string;
  name: string;
}

export interface IQuestionSurveyDataTransform {
  description: string;
  id: string;
  options: IOptions[];
  text: string;
  type: QuestionTypeDataTransform;
}

export type SurveysListApiResponse = Array<ISurveyApiResponse>;

export interface ISurveyApiResponse {
  cliente: IClientSurveyApiResponse;
  descripcion: string;
  id: string;
  nombre: string;
  preguntas: IQuestionSurveyApiResponse[];
  slug: string;
}

export interface IClientSurveyApiResponse {
  descripcion: string;
  id: string;
  nombre: string;
  slug: string;
}

export interface IQuestionSurveyApiResponse {
  descripcion: string;
  id: string;
  opciones: IOptions[];
  textoPregunta: string;
  tipo: QuestionTypeApiResponse;
}
