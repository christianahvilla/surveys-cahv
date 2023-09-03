import { LoaderFunctionArgs, defer } from 'react-router-dom';
import { ApiMethods } from '~types/api/api-methods-object.type';
import { ISurveyApiResponse } from '~types/surveys/surveys-list-object';
import { ApiRequestProviderInstance } from '~utils/ApiRequestProvider';

export const listQuestionLoader = async ({ params }: LoaderFunctionArgs) => {
  const url = `/encuestas/filter/${params.id}`;
  const apiResponseProvider = ApiRequestProviderInstance;
  const apiResponse = await apiResponseProvider.doRequest({
    url,
    method: ApiMethods.GET,
    requireAuth: true,
  });
  const apiResponseData: ISurveyApiResponse = await apiResponse.json();

  const results = apiResponseData.preguntas.map((question) => ({
    id: question.id,
    questionText: question.textoPregunta,
    description: question.descripcion,
    options: question.opciones,
    questionType: question.tipo,
  }));

  return defer({ results });
};
