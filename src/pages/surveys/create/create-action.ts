import { ActionFunctionArgs } from 'react-router-dom';
import { SurveysKeysInput } from '~clean/entity/surveys';
import { ApiMethods } from '~types/api/api-methods-object.type';
import { ApiRequestProviderInstance } from '~utils/ApiRequestProvider';

export const createSurveysAction = async ({ request }: ActionFunctionArgs) => {
  const formData = await request.formData();
  const name = (formData.get(SurveysKeysInput.name) as string) || '';
  const description = (formData.get(SurveysKeysInput.description) as string) || '';
  const startDate = (formData.get(SurveysKeysInput.startDate) as string) || '';
  const endDate = (formData.get(SurveysKeysInput.endDate) as string) || '';
  const clientId = (formData.get(SurveysKeysInput.clientId) as string) || '';

  try {
    const url = '/encuestas';
    const apiRequestProvider = ApiRequestProviderInstance;

    await apiRequestProvider.doRequest({
      url,
      method: ApiMethods.POST,
      requireAuth: true,
      body: {
        nombre: name,
        descripcion: description,
        fecha_inicio: startDate,
        fecha_final: endDate,
        clienteId: clientId,
        requisitos: null,
      },
    });

    return { success: true };
  } catch (error) {
    return error;
  }
};
