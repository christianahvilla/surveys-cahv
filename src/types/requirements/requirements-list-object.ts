export interface RequirementApiResponse {
  id: string;
  nombre: string;
}

export interface RequirementDTO {
  id: string;
  name: string;
}

export type RequirementListApiResponse = Array<RequirementApiResponse>;

export type RequirementListDTO = Array<RequirementDTO>;
