export interface IAnswerRootObjectApiResponse {
  data: IAnswersApiResponse[];
}

export interface IAnswersApiResponse {
  encuesta: IAnswerSurveyApiResponse;
  encuestado: IAnswerSurveyedApiResponse;
  id: string;
  pregunta: IAnswerQuestionApiResponse;
  responseText: string;
}

export interface IAnswerDTO {
  id: string;
  survey: string;
  lastName: string;
  secondLastName: string;
  phone: string;
  old: number;
  email: string;
  gender: Gender;
  surveyedName: string;
  address: string;
  question: string;
  response: string;
}

export interface IAnswerSurveyApiResponse {
  nombre: string;
}

export interface IAnswerSurveyDTO {
  name: string;
}

export interface IAnswerSurveyedApiResponse {
  amaterno: string;
  apaterno: string;
  celular: string;
  edad: number;
  email: string;
  genero: Gender;
  nombres: string;
  puntos: IAnswerPoints[];
}

export interface IAnswerSurveyedDTO {
  lastName: string;
  secondLastName: string;
  phone: string;
  old: number;
  email: string;
  gender: Gender;
  name: string;
  address: string;
}

export enum Gender {
  F = 'Femenino',
  M = 'Masculino',
}

export interface IAnswerPoints {
  number: string;
  street: string;
}

export interface IAnswerQuestionApiResponse {
  textoPregunta: string;
}

export interface IAnswerQuestionDTO {
  questionText: string;
}

export interface IAnswerOptionsApiResponse {
  img: null | string;
  text: null | string;
}

export type AnswerListDTO = Array<IAnswerDTO>;
