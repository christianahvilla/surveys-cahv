import { LoginDTO, validateLoginDTO } from './login.dto';

export class LoginEntity {
  id: string;
  username: string;
  roles: string;
  email: string;
  name: string;
  phone: string;
  isActive: boolean;
  client: string | null;
  token: string;

  constructor(dto: LoginDTO) {
    validateLoginDTO(dto);

    this.id = dto.id;
    this.username = dto.username;
    this.roles = dto.roles;
    this.email = dto.email;
    this.name = dto.name;
    this.phone = dto.phone;
    this.isActive = dto.isActive;
    this.client = dto.client;
    this.token = dto.token;
  }
}
