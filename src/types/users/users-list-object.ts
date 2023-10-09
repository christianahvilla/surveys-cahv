import { Nullable } from '~clean/common/types/common';
import { IClientSelectApiResponse, IClientSelectDTO } from '~types/selects/clients-object.type';
export type IUsersListApiResponse = Array<UserData>;

export interface UserData {
  celular: string;
  cliente: Nullable<IClientSelectApiResponse>;
  email: string;
  id: string;
  nombreCompleto: string;
  roles: string;
  username: string;
}

export interface IUserDTO {
  id: string;
  phone: string;
  email: string;
  name: string;
  roles: string;
  username: string;
  client: Nullable<IClientSelectDTO>;
}

export type IUsersList = Array<IUserDTO>;
