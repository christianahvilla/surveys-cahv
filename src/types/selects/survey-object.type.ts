export interface SurveySelectApiResponse {
  id: string;
  nombre: string;
}

export interface SurveySelectDTO {
  id: string;
  name: string;
}

export type SurveySelectListApiResponse = Array<SurveySelectApiResponse>;

export type SurveySelectListDTO = Array<SurveySelectDTO>;
