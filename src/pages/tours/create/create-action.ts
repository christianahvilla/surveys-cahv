import { ActionFunctionArgs } from 'react-router-dom';
import { ToursKeysInput } from '../../../clean-core/entity/tours';
import { ApiRequestProviderInstance } from '~utils/ApiRequestProvider';
import { ApiMethods } from '~types/api/api-methods-object.type';

export const createToursAction = async ({ request }: ActionFunctionArgs) => {
  const formData = await request.formData();
  const state = (formData.get(ToursKeysInput.state) as string) || '';
  const city = (formData.get(ToursKeysInput.city) as string) || '';
  const colony = (formData.get(ToursKeysInput.colony) as string) || '';
  const cp = (formData.get(ToursKeysInput.cp) as string) || '';
  const order = (formData.get(ToursKeysInput.order) as string) || '';
  const female = (formData.get(ToursKeysInput.female) as string) || null;
  const male = (formData.get(ToursKeysInput.male) as string) || null;
  const userId = (formData.get(ToursKeysInput.userId) as string) || '';

  try {
    const url = '/recorridos';
    const apiRequestProvider = ApiRequestProviderInstance;

    await apiRequestProvider.doRequest({
      url,
      method: ApiMethods.POST,
      requireAuth: true,
      body: {
        state: state,
        city: city,
        colony: colony,
        cp: cp,
        female: female,
        male: male,
        order: order,
        userId: userId,
      },
    });
    return { success: true };
  } catch (error) {
    return error;
  }
};
