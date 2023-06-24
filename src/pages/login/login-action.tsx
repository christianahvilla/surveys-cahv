import { ActionFunctionArgs } from 'react-router-dom';
import { setLocalStorage } from 'src/hooks/useLocalStorage';
import { LoginKesyInput } from '~clean/entity';
import { loginRepository } from '~clean/repository';
import { LoginByCredentialsInteractor } from '~clean/usecase';

export const LoginAction = async ({ request }: ActionFunctionArgs) => {
  const formData = await request.formData();
  const email = (formData.get(LoginKesyInput.email) as string) || '';
  const password = (formData.get(LoginKesyInput.password) as string) || '';

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
