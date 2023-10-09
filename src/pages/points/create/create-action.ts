import { ActionFunctionArgs } from 'react-router-dom';
import { ApiRequestProviderInstance } from '~utils/ApiRequestProvider';
import { ApiMethods } from '~types/api/api-methods-object.type';
import { PointsKeysInput } from '~clean/entity/points';

export const createToursAction = async ({ request }: ActionFunctionArgs) => {
  const formData = await request.formData();
  const longitude = (formData.get(PointsKeysInput.longitude) as string) || '';
  const latitude = (formData.get(PointsKeysInput.latitude) as string) || '';
  const tourId = (formData.get(PointsKeysInput.tourId) as string) || '';
  const street = (formData.get(PointsKeysInput.street) as string) || '';
  const number = (formData.get(PointsKeysInput.number) as string) || '';
  const surveyId = (formData.get(PointsKeysInput.surveyId) as string) || '';

  try {
    const url = '/recorridos/puntos';
    const apiRequestProvider = ApiRequestProviderInstance;

    await apiRequestProvider.doRequest({
      url,
      method: ApiMethods.POST,
      requireAuth: true,
      body: {
        longitude,
        latitude,
        street,
        number,
        encuestaId: surveyId,
        recorridoId: tourId,
        promotorId: null,
        encuestadoId: null,
      },
    });
    return { success: true };
  } catch (error) {
    return error;
  }
};
