import { LoginEntity } from '~clean/entity';
import { Usecase } from '../../abstract.usecase';
import type { LoginByCredentialsInput } from './repository';
export abstract class LoginByCredentialsUseCase extends Usecase<
  LoginByCredentialsInput,
  {
    user: LoginEntity;
  }
> {
  readonly name = 'login-by-credentials-usecase'; // TODO add explanation to Readme
}
