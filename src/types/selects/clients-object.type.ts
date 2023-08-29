import { Nullable } from './../../clean-core/common/types/common/nullable';

export interface ClientData {
  id: string;
  nombre: string;
}

export interface IClientSelectDTO {
  key: Nullable<string>;
  label: string;
}

export type ClientsListSelectDTO = Array<IClientSelectDTO>;
export type ClientsSelectListApiResponse = Array<ClientData>;
