export type IUsersListApiResponse = Array<UserData>;

export interface UserData {
  celular: string;
  cliente: null;
  email: string;
  id: string;
  nombreCompleto: string;
  roles: string;
  username: string;
}

export interface IUserDataTransform {
  id: string;
  phone: string;
  email: string;
  name: string;
  roles: string;
  username: string;
}

export type IUsersList = Array<IUserDataTransform>;
