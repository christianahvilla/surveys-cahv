import { Nullable } from './../../clean-core/common/types/common/nullable';
export interface IRequirementSelectApiResponse {
  id: string;
  nombre: string;
}

export interface IRequirementSelectDTO {
  key: Nullable<string>;
  label: string;
}

export type RequirementsSelectApiResponse = Array<IRequirementSelectApiResponse>;

export type RequirementsSelectDTO = Array<IRequirementSelectDTO>;
