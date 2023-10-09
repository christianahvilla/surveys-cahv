import { defer } from 'react-router-dom';
import { ApiMethods } from '~types/api/api-methods-object.type';
import { IQuestionApiResponse } from '~types/questions/questions-list-object';
import { ApiRequestProviderInstance } from '~utils/ApiRequestProvider';

export const listQuestionLoader = async () => {
  const url = '/encuestas/preguntas/all';
  const apiResponseProvider = ApiRequestProviderInstance;
  const apiResponse = await apiResponseProvider.doRequest({
    url,
    method: ApiMethods.GET,
    requireAuth: true,
  });
  const apiResponseData: IQuestionApiResponse = await apiResponse.json();
  const results = apiResponseData.map((question) => ({
    id: question.id,
    questionText: question.textoPregunta,
    description: question.descripcion,
    survey: question.encuesta,
    options: question.opciones,
    questionType: question.tipo,
  }));
  return defer({ results });
};
