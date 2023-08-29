import { IDropdownOptions } from '~components/inputs/dropdown/types';
import { SurveySelectListDTO } from '~types/selects/survey-object.type';

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
  cantidad: number;
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
  surveyId: IDropdownOptions | undefined;
  quantity: number;
}

export interface RequirementEditSurveyDTO {
  requirement: RequirementEditDTO;
  surveys: SurveySelectListDTO;
}
