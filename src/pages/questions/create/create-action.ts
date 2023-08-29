import { ActionFunctionArgs } from 'react-router-dom';
import { QuestionKeysInput } from '../../../clean-core/entity/questions/questions.dto';
import { ApiRequestProviderInstance } from '~utils/ApiRequestProvider';
import { ApiMethods } from '~types/api/api-methods-object.type';

export const createQuestionsAction = async ({ request }: ActionFunctionArgs) => {
  const formData = await request.formData();
  const questionText = (formData.get(QuestionKeysInput.questionText) as string) || '';
  const description = (formData.get(QuestionKeysInput.description) as string) || '';
  const questionType = (formData.get(QuestionKeysInput.questionType) as string) || '';
  const surveyId = (formData.get(QuestionKeysInput.surveyId) as string) || '';
  const order = (formData.get(QuestionKeysInput.order) as string) || '';

  try {
    const url = '/encuestas/preguntas';
    const apiRequestProvider = ApiRequestProviderInstance;
    await apiRequestProvider.doRequest({
      url,
      method: ApiMethods.POST,
      requireAuth: true,
      body: {
        textoPregunta: questionText,
        descripcion: description,
        tipo: questionType,
        encuestaId: surveyId,
        orden: order,
      },
    });
    return { success: true };
  } catch (error) {
    return error;
  }
};
