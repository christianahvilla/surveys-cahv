import { Nullable } from '~clean/common/types/common';
import { validator } from '../../common/utils/dto-validator';

export enum LoginKesyInput {
  email = 'email',
  password = 'password',
}

// === Keys description ===
export enum LoginKeys {
  id = 'id',
  username = 'username',
  roles = 'roles',
  email = 'email',
  name = 'name',
  phone = 'phone',
  isActive = 'isActive',
  client = 'client',
  token = 'token',
}

// === Interfaces ===
export interface LoginDTO {
  [LoginKeys.id]: string;
  [LoginKeys.username]: string;
  [LoginKeys.roles]: string;
  [LoginKeys.email]: string;
  [LoginKeys.name]: string;
  [LoginKeys.phone]: string;
  [LoginKeys.isActive]: boolean;
  [LoginKeys.client]: Nullable<string>;
  [LoginKeys.token]: string;
}

// === Keys for validation ===
const loginKeys = Object.keys(LoginKeys) as (keyof LoginDTO)[];

// === validators ===
export const validateLoginDTO = (dto: LoginDTO) => {
  const validationResult = validator(dto, loginKeys);

  if (!validationResult) {
    throw Error('Bad dto');
  }

  return true;
};
