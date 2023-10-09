import { ActionFunctionArgs } from 'react-router-dom';
import { OptionsKeysInput } from '~clean/entity/options';
import { ApiMethods } from '~types/api/api-methods-object.type';
import { ApiRequestProviderInstance } from '~utils/ApiRequestProvider';

export const createOptionAction = async ({ request }: ActionFunctionArgs) => {
  const formData = await request.formData();
  const name = (formData.get(OptionsKeysInput.name) as string) || '';
  const questionId = (formData.get(OptionsKeysInput.questionId) as string) || '';
  const text = (formData.get(OptionsKeysInput.text) as string) || '';
  const img = (formData.get(OptionsKeysInput.base64File) as string | ArrayBuffer | null) || null;

  try {
    const url = '/encuestas/preguntas/opciones';
    const apiRequestProvider = ApiRequestProviderInstance;

    const formattedForm = new FormData();

    const decodeImage = apiRequestProvider.doRequest({
      url: String(img),
      requireAuth: false,
      useFullUrl: false,
    });

    const blobImage = await (await decodeImage).blob();

    formattedForm.append('nombre', name);
    formattedForm.append('preguntaId', questionId);
    formattedForm.append('text', text);
    formattedForm.append('img', blobImage);

    await apiRequestProvider.doRequest({
      url,
      method: ApiMethods.POST,
      requireAuth: true,
      body: formattedForm,
    });

    return { success: true };
  } catch (error) {
    return error;
  }
};
