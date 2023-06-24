export interface ILoginData {
  id: string;
  username: string;
  roles: string;
  email: string;
  nombre_completo: string;
  celular: string;
  isActive: boolean;
  cliente: string;
  token: string;
}

export interface ILogin {
  user: ILoginData;
}
