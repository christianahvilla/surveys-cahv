import { ActionFunctionArgs, redirect } from 'react-router-dom';
import { ToursKeysInput } from '../../../clean-core/entity/tours';
import { ApiMethods } from '~types/api/api-methods-object.type';
import { ApiRequestProviderInstance } from '~utils/ApiRequestProvider';

export const editToursAction = async ({ request, params }: ActionFunctionArgs) => {
  const formData = await request.formData();
  const state = (formData.get(ToursKeysInput.state) as string) || '';
  const city = (formData.get(ToursKeysInput.city) as string) || '';
  const colony = (formData.get(ToursKeysInput.colony) as string) || '';
  const cp = (formData.get(ToursKeysInput.cp) as string) || '';
  const order = (formData.get(ToursKeysInput.order) as string) || '';
  const userId = (formData.get(ToursKeysInput.userId) as string) || '';

  try {
    const url = `/recorridos/${params.id}`;
    const apiRequestProvider = ApiRequestProviderInstance;

    await apiRequestProvider.doRequest({
      url,
      method: ApiMethods.PATCH,
      requireAuth: true,
      body: {
        state: state,
        city: city,
        colony: colony,
        cp: cp,
        order: order,
        userId: userId,
      },
    });
    return redirect('/recorridos/list');
  } catch (error) {
    return error;
  }
};
