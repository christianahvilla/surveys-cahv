import { ActionFunctionArgs } from 'react-router-dom';
import { LoginKeysInput } from '~clean/entity';
import { loginRepository } from '~clean/repository';
import { LoginByCredentialsInteractor } from '~clean/usecase';
import { setLocalStorage } from '~utils/LocalStorage';

export const LoginAction = async ({ request }: ActionFunctionArgs) => {
  const formData = await request.formData();
  const email = (formData.get(LoginKeysInput.email) as string) || '';
  const password = (formData.get(LoginKeysInput.password) as string) || '';

  try {
    const response = await new LoginByCredentialsInteractor(loginRepository).execute({
      email,
      password,
    });

    setLocalStorage(response.user, 'authData');

    return window.location.reload();
  } catch (error) {
    return error;
  }
};
