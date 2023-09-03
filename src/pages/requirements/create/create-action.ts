import { ActionFunctionArgs } from 'react-router-dom';
import { RequirementKeysInput } from '~clean/entity/requirement';
import { ApiMethods } from '~types/api/api-methods-object.type';
import { ApiRequestProviderInstance } from '~utils/ApiRequestProvider';
import { QUANTITY_IS_LOWER_THAN_TOTAL } from '../constants';

export const createRequirementAction = async ({ request }: ActionFunctionArgs) => {
  const formData = await request.formData();
  const name = (formData.get(RequirementKeysInput.name) as string) || '';
  const female = Number((formData.get(RequirementKeysInput.female) as string) || 0);
  const male = Number((formData.get(RequirementKeysInput.male) as string) || 0);
  const adultLittle = Number((formData.get(RequirementKeysInput.adultLittle) as string) || 0);
  const adult = Number((formData.get(RequirementKeysInput.adult) as string) || 0);
  const adultUpper = Number((formData.get(RequirementKeysInput.adultUpper) as string) || 0);
  const quantity = Number((formData.get(RequirementKeysInput.quantity) as string) || 0);
  const surveyId = (formData.get(RequirementKeysInput.surveyId) as string) || '';

  const total = adult + female + male + adultLittle + adultUpper;

  // return data if we have errors
  if (quantity > total) {
    return { validation: QUANTITY_IS_LOWER_THAN_TOTAL };
  }

  try {
    const url = '/encuestas/requisitos';
    const apiRequestProvider = ApiRequestProviderInstance;

    await apiRequestProvider.doRequest({
      url,
      method: ApiMethods.POST,
      requireAuth: true,
      body: {
        nombre: name,
        female: female,
        male: male,
        adultoMenor: adultLittle,
        adulto: adult,
        adultoMayor: adultUpper,
        cantidad: quantity,
      },
    });

    return { success: true };
  } catch (error) {
    return error;
  }
};
