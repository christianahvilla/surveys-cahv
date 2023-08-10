import { ActionFunctionArgs } from 'react-router-dom';
import { RequirementKeysInput } from '~clean/entity/requirement';
import { ApiMethods } from '~types/api/api-methods-object.type';
import { ApiRequestProviderInstance } from '~utils/ApiRequestProvider';

export const createSurveysAction = async ({ request, params }: ActionFunctionArgs) => {
  const formData = await request.formData();
  const name = (formData.get(RequirementKeysInput.name) as string) || '';
  const female = (formData.get(RequirementKeysInput.female) as string) || '';
  const femaleAdvance = (formData.get(RequirementKeysInput.femaleAdvance) as string) || '';
  const male = (formData.get(RequirementKeysInput.male) as string) || '';
  const maleAdvance = (formData.get(RequirementKeysInput.maleAdvance) as string) || '';
  const adultLittle = (formData.get(RequirementKeysInput.adultLittle) as string) || '';
  const adultLittleAdvance =
    (formData.get(RequirementKeysInput.adultLittleAdvance) as string) || '';
  const adult = (formData.get(RequirementKeysInput.adult) as string) || '';
  const adultAdvance = (formData.get(RequirementKeysInput.adultAdvance) as string) || '';
  const adultUpper = (formData.get(RequirementKeysInput.adultUpper) as string) || '';
  const adultUpperAdvance = (formData.get(RequirementKeysInput.adultUpperAdvance) as string) || '';
  const surveyId = (formData.get(RequirementKeysInput.surveyId) as string) || '';

  try {
    const url = `/encuestas/requisitos/${params.id}`;
    const apiRequestProvider = ApiRequestProviderInstance;

    await apiRequestProvider.doRequest({
      url,
      method: ApiMethods.POST,
      requireAuth: true,
      body: {
        nombre: name,
        female: female,
        femaleAvance: femaleAdvance,
        male: male,
        maleAvance: maleAdvance,
        adultoMenor: adultLittle,
        adultoMenorAvance: adultLittleAdvance,
        adulto: adult,
        adultoAvance: adultAdvance,
        adultoMayor: adultUpper,
        adultoMayorAvance: adultUpperAdvance,
        encuestaId: surveyId,
      },
    });

    return { success: true };
  } catch (error) {
    return error;
  }
};
