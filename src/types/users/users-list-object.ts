export interface IUsersListApiResponse {
  data: UserData[];
  meta: Meta;
}

export interface UserData {
  celular: string;
  cliente: null;
  email: string;
  id: string;
  nombreCompleto: string;
  roles: string;
  username: string;
}

export interface Meta {
  hasNextPage: boolean;
  hasPreviousPage: boolean;
  itemCount: number;
  page: number;
  pageCount: number;
  take: number;
}

export interface IUserDataTransform {
  id: string;
  phone: string;
  email: string;
  name: string;
  roles: string;
  username: string;
}

export interface IUsersList {
  data: IUserDataTransform[];
  meta: Meta;
}
