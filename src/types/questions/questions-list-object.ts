import { IOptions } from '~types/api/options-object.type';
import { SurveySelectListDTO } from '../selects/survey-object.type';

export type IQuestionApiResponse = Array<IQuestionData>;

export type QuestionDTO = Array<IQuestionDTO>;

export interface QuestionEditSurveyDto {
  question: IQuestionDTOEdit;
  surveys: SurveySelectListDTO;
}
export interface IQuestionDTO {
  description: string;
  survey: IQuestionSurveyDTO;
  id: string;
  options: IOptions[];
  text: string;
  type: QuestionTypeApiResponse;
}

export interface IQuestionDTOEdit {
  description: string;
  survey: SurveySelectListDTO;
  id: string;
  text: string;
  type: QuestionTypeApiResponse;
  order: string;
}

export interface IQuestionDTOList {
  description: string;
  survey: ISurveyApiResponse;
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

export interface IQuestionDataEdit {
  descripcion: string;
  encuesta: ISurveyApiResponse;
  id: string;
  orden: string;
  textoPregunta: string;
  tipo: QuestionTypeApiResponse;
}

export interface IQuestionSurveyDTO {
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

export enum QuestionTypeDTO {
  open = 'open',
  multiple = 'multiple',
  multipleImages = 'multipleImages',
}

export enum QuestionTypeApiResponse {
  Abierta = 'abierta',
  Multiple = 'multiple',
  Multipleimages = 'multipleimages',
}
