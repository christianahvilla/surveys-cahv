import { defer } from 'react-router-dom';
import { ApiMethods } from '~types/api/api-methods-object.type';
import {
  QuestionsSelectListApiResponse,
  QuestionsSelectListDTO,
} from '~types/selects/questions-object.type';
import { ApiRequestProviderInstance } from '~utils/ApiRequestProvider';

export const createOptionsLoader = async () => {
  const url = '/encuestas/preguntas/all';
  const apiRequestProvider = ApiRequestProviderInstance;

  const apiResponse = await apiRequestProvider.doRequest({
    url: url,
    method: ApiMethods.GET,
    requireAuth: true,
  });

  const questionsData: QuestionsSelectListApiResponse = await apiResponse.json();

  const formattedQuestions: QuestionsSelectListDTO = questionsData.map((question) => ({
    key: question.id,
    label: question.textoPregunta,
  }));

  const results = {
    questions: formattedQuestions,
  };

  return defer(results);
};
