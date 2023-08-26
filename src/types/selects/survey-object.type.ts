import { Nullable } from './../../clean-core/common/types/common/nullable';
export interface ISurveySelectApiResponse {
  id: string;
  nombre: string;
}

export interface ISurveySelectDTO {
  key: Nullable<string>;
  label: string;
}

export type SurveySelectListApiResponse = Array<ISurveySelectApiResponse>;

export type SurveySelectListDTO = Array<ISurveySelectDTO>;
