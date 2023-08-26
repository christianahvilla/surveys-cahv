import { Nullable } from '../../clean-core/common/types/common';

export interface SurveySelectApiResponse {
  id: string;
  nombre: string;
}

export interface SurveySelectDTO {
  key: Nullable<string>;
  label: string;
}

export type SurveySelectListApiResponse = Array<SurveySelectApiResponse>;

export type SurveySelectListDTO = Array<SurveySelectDTO>;
