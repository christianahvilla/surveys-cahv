import { ActionFunctionArgs, redirect } from 'react-router-dom';
import { setLocalStorage } from 'src/hooks/useLocalStorage';
import { LoginKeys } from '~clean/entity';
import { loginRepository } from '~clean/repository';
import { LoginByCredentialsInteractor } from '~clean/usecase';

export const LoginAction = async ({ request }: ActionFunctionArgs) => {
  const formData = await request.formData();
  const email = (formData.get(LoginKeys.email) as string) || '';
  const password = (formData.get(LoginKeys.password) as string) || '';

  try {
    const response = await new LoginByCredentialsInteractor(loginRepository).execute({
      email,
      password,
    });

    setLocalStorage(response.user, 'authData');

    return redirect('/');
  } catch (error) {
    return error;
  }
};
