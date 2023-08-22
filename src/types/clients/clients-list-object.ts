export type IClientsListApiResponse = Array<ClientData>;

export interface ClientData {
  id: string;
  nombre: string;
  slug: string;
}

export interface IClientDTO {
  id: string;
  name: string;
  slug: string;
}

export type IClientsList = Array<IClientDTO>;
