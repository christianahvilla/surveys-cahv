import { ActionFunctionArgs, redirect } from 'react-router-dom';
import { UserKeysInput } from '~clean/entity/users';
import { ApiMethods } from '~types/api/api-methods-object.type';
import { ApiRequestProviderInstance } from '~utils/ApiRequestProvider';

export const editUserAction = async ({ request, params }: ActionFunctionArgs) => {
  const formData = await request.formData();
  const roles = (formData.get(UserKeysInput.roles) as string) || '';
  const name = (formData.get(UserKeysInput.name) as string) || '';
  const username = (formData.get(UserKeysInput.username) as string) || '';
  const password = (formData.get(UserKeysInput.password) as string) || '';
  const phone = (formData.get(UserKeysInput.phone) as string) || '';
  const email = (formData.get(UserKeysInput.email) as string) || '';

  try {
    const url = `/auth/user/${params.id}`;
    const apiRequestProvider = ApiRequestProviderInstance;

    await apiRequestProvider.doRequest({
      url,
      method: ApiMethods.PATCH,
      requireAuth: true,
      body: {
        roles,
        nombreCompleto: name,
        username,
        password,
        celular: phone,
        email,
      },
    });

    return redirect('/users/list');
  } catch (error) {
    return error;
  }
};
