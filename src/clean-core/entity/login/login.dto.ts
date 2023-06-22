import { validator } from '../../common/utils/dto-validator';

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
  password = 'password',
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
  [LoginKeys.client]: string;
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
