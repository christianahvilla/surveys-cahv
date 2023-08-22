export type IClientsSelectListApiResponse = Array<ClientData>;

export interface ClientData {
  id: string;
  nombre: string;
}

export interface IClientSelectDTO {
  id: string;
  name: string;
}

export type IClientsListSelectDTO = Array<IClientSelectDTO>;
