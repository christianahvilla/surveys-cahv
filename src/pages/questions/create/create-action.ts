import { ActionFunctionArgs } from 'react-router-dom';
import { QuestionKeysImput } from '../../../clean-core/entity/questions/questions.dto';
import { ApiRequestProviderInstance } from '~utils/ApiRequestProvider';
import { ApiMethods } from '~types/api/api-methods-object.type';

export const createQuestionsAction = async ({ request }: ActionFunctionArgs) => {
  const formData = await request.formData();
  const questionText = (formData.get(QuestionKeysImput.questionText) as string) || '';
  const description = (formData.get(QuestionKeysImput.description) as string) || '';
  const questionType = (formData.get(QuestionKeysImput.questionType) as string) || '';
  const surveyId = (formData.get(QuestionKeysImput.surveyId) as string) || '';
  const order = (formData.get(QuestionKeysImput.order) as string) || '';

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
