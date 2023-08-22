import { RequirementSurveyListDTO } from './requirements-surveys-list-object';

export interface RequirementEditApiResponse {
  nombre: string;
  female: number;
  femaleAvance: number;
  male: number;
  maleAvance: number;
  adultoMenor: number;
  adultoMenorAvance: number;
  adulto: number;
  adultoAvance: number;
  adultoMayor: number;
  adultoMayorAvance: number;
  encuestaId: number;
}

export interface RequirementEditDTO {
  name: string;
  female: number;
  femaleAdvance: number;
  male: number;
  maleAdvance: number;
  adultLittle: number;
  adultLittleAdvance: number;
  adult: number;
  adultAdvance: number;
  adultUpper: number;
  adultUpperAdvance: number;
  surveyId: number;
}

export interface RequirementEditSurveyDTO {
  requirement: RequirementEditDTO;
  surveys: RequirementSurveyListDTO;
}
