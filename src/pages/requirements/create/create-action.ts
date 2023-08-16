import { ActionFunctionArgs } from 'react-router-dom';
import { RequirementKeysInput } from '~clean/entity/requirement';
import { ApiMethods } from '~types/api/api-methods-object.type';
import { ApiRequestProviderInstance } from '~utils/ApiRequestProvider';

export const createRequirementAction = async ({ request }: ActionFunctionArgs) => {
  const formData = await request.formData();
  const name = (formData.get(RequirementKeysInput.name) as string) || '';
  const female = Number((formData.get(RequirementKeysInput.female) as string) || 0);
  const femaleAdvance = Number((formData.get(RequirementKeysInput.femaleAdvance) as string) || 0);
  const male = Number((formData.get(RequirementKeysInput.male) as string) || 0);
  const maleAdvance = Number((formData.get(RequirementKeysInput.maleAdvance) as string) || 0);
  const adultLittle = Number((formData.get(RequirementKeysInput.adultLittle) as string) || 0);
  const adultLittleAdvance = Number(
    (formData.get(RequirementKeysInput.adultLittleAdvance) as string) || 0,
  );
  const adult = Number((formData.get(RequirementKeysInput.adult) as string) || 0);
  const adultAdvance = Number((formData.get(RequirementKeysInput.adultAdvance) as string) || 0);
  const adultUpper = Number((formData.get(RequirementKeysInput.adultUpper) as string) || 0);
  const adultUpperAdvance = Number(
    (formData.get(RequirementKeysInput.adultUpperAdvance) as string) || 0,
  );
  const surveyId = (formData.get(RequirementKeysInput.surveyId) as string) || '';

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
