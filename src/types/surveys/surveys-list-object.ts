import { IDropdownOptions } from '~components/inputs/dropdown/types';
import { IOptions } from '~types/api/options-object.type';
import { QuestionTypeApiResponse, QuestionTypeDTO } from '~types/questions/questions-list-object';

export type SurveyListDTO = Array<ISurveyDTO>;

export interface ISurveyDTO {
  client: IDropdownOptions;
  description: string;
  id: string;
  name: string;
  questions: boolean;
  slug: string;
  requirement: IDropdownOptions;
}

export interface IQuestionSurveyDTO {
  description: string;
  id: string;
  options: IOptions[];
  text: string;
  type: QuestionTypeDTO;
}

export type SurveysListApiResponse = Array<ISurveyApiResponse>;

export interface ISurveyApiResponse {
  cliente: IClientSurveyApiResponse;
  descripcion: string;
  id: string;
  nombre: string;
  preguntas: IQuestionSurveyApiResponse[];
  slug: string;
  requisitos: IRequirementSurveyResponse | null;
}

export interface IClientSurveyApiResponse {
  descripcion: string;
  id: string;
  nombre: string;
  slug: string;
}

export interface IRequirementSurveyResponse {
  nombre: string;
  id: string;
}

export interface IQuestionSurveyApiResponse {
  descripcion: string;
  id: string;
  opciones: IOptions[];
  textoPregunta: string;
  tipo: QuestionTypeApiResponse;
}
