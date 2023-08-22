export interface RequirementSurveyApiResponse {
  id: string;
  nombre: string;
}

export interface RequirementSurveyDTO {
  id: string;
  name: string;
}

export type RequirementSurveyListApiResponse = Array<RequirementSurveyApiResponse>;

export type RequirementSurveyListDTO = Array<RequirementSurveyDTO>;
