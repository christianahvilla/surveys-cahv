export type SurveyedListApiResponse = Array<ISurveyedApiResponse>;
export type SurveyedListDataTransform = Array<ISurveyedDTO>;

export interface ISurveyedDTO {
  id: string;
  name: string;
  fatherLastname: string;
  motherLastname: string;
  phone: string;
  birthDate: string | null;
  studioLevel: string | null;
  sign: string | null;
  survey: string;
}

export interface IDataApiResponse {
  data: ISurveyedApiResponse[];
}

export interface ISurveyedApiResponse {
  id: string;
  nombres: string;
  apaterno: string;
  amaterno: string;
  celular: string;
  birthDate: string | null;
  studioNivel: string | null;
  firma: string | null;
}
