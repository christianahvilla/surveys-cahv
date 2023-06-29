import { ActionFunctionArgs, redirect } from 'react-router-dom';
import { UserKeysInput } from '~clean/entity/users';
import { ApiMethods } from '~types/api/api-methods-object.type';
import { ApiRequestProviderInstance } from '~utils/ApiRequestProvider';

export const editClientAction = async ({ request, params }: ActionFunctionArgs) => {
  const formData = await request.formData();
  const name = (formData.get(UserKeysInput.name) as string) || '';

  try {
    const url = `/clients/${params.id}`;
    const apiRequestProvider = ApiRequestProviderInstance;

    await apiRequestProvider.doRequest({
      url,
      method: ApiMethods.PATCH,
      requireAuth: true,
      body: {
        nombre: name,
      },
    });

    return redirect('/clients/list');
  } catch (error) {
    return error;
  }
};
