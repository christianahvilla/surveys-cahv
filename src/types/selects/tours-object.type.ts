import { Nullable } from '~clean/common/types/common';
interface ITourSelectApiResponse {
  id: string;
  state: string;
  city: string;
  colony: string;
  cp: string;
  order: number;
}

export interface ITourSelectDTO {
  key: Nullable<string>;
  label: string;
}

export type TourSelectDTO = Array<ITourSelectDTO>;
export type TourSelectApiResponse = Array<ITourSelectApiResponse>;
