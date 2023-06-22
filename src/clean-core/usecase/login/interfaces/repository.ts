import { ApiResponse } from '~clean/common';

export interface LoginByCredentialsOutput {
  user: LoginByCredentialsResponse;
}

interface LoginByCredentialsResponse {
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

export interface LoginByCredentialsInput {
  email: string;
  password: string;
}

export interface UserAuthenticationInformation {
  token: string | null;
}

export abstract class LoginRepository {
  abstract loginUserByCredentials(
    input: LoginByCredentialsInput,
  ): Promise<ApiResponse<LoginByCredentialsOutput>>;
}
