import isNull from 'lodash/isNull';
import { ActionFunctionArgs } from 'react-router-dom';
import { UserKeysInput } from '~clean/entity/users';
import { ApiMethods } from '~types/api/api-methods-object.type';
import { ApiRequestProviderInstance } from '~utils/ApiRequestProvider';

export const createUserAction = async ({ request }: ActionFunctionArgs) => {
  const formData = await request.formData();
  const roles = (formData.get(UserKeysInput.roles) as string) || '';
  const name = (formData.get(UserKeysInput.name) as string) || '';
  const username = (formData.get(UserKeysInput.username) as string) || '';
  const password = (formData.get(UserKeysInput.password) as string) || '';
  const phone = (formData.get(UserKeysInput.phone) as string) || '';
  const email = (formData.get(UserKeysInput.email) as string) || '';
  const clientId = (formData.get(UserKeysInput.clientId) as string) || null;

  if (roles !== 'admin' && isNull(clientId)) {
    return {
      error: new Error(),
      message: 'Selecciona un cliente',
      statusCode: 400,
    };
  }

  try {
    const url = '/auth/register';
    const apiRequestProvider = ApiRequestProviderInstance;

    await apiRequestProvider.doRequest({
      url,
      method: ApiMethods.POST,
      requireAuth: true,
      body: {
        roles,
        nombreCompleto: name,
        username,
        password,
        celular: phone,
        email,
        clienteId: clientId,
      },
    });

    return { success: true };
  } catch (error) {
    return error;
  }
};
