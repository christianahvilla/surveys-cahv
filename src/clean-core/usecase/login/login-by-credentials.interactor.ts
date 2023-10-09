import { LoginByCredentialsUseCase } from './interfaces/usecase';
import type { LoginByCredentialsInput, LoginRepository } from './interfaces/repository';
import { LoginDTO, LoginEntity } from '~clean/entity';

export class LoginByCredentialsInteractor extends LoginByCredentialsUseCase {
  constructor(private readonly repository: LoginRepository) {
    super();
  }

  protected async _execute(input: LoginByCredentialsInput) {
    const response = await this.repository.loginUserByCredentials(input);

    if (response.type === 'error') {
      /* We need to define the expected behaviour here */
      throw response.error;
    } else if (response.type === 'not-authorized') {
      /* We need to define the expected behaviour here */
      throw response.error;
    } else {
      const { user } = response.data;

      const userDto: LoginDTO = {
        id: user.id,
        username: user.username,
        roles: user.roles,
        email: user.email,
        name: user.nombreCompleto,
        phone: user.celular,
        isActive: user.isActive,
        client: user.cliente,
        token: user.token,
      };

      return { user: new LoginEntity(userDto) };
    }
  }
}
