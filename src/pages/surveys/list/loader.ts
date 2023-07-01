import { defer } from 'react-router-dom';
import { ApiMethods } from '~types/api/api-methods-object.type';
import { ISurveyListApiResponse } from '~types/surveys/surveys-list-object';
import { ApiRequestProviderInstance } from '~utils/ApiRequestProvider';

export const listSurveysLoader = async () => {
  const url = '/encuestas';
  const apiRequestProvider = ApiRequestProviderInstance;

  const apiResponse = await apiRequestProvider.doRequest({
    url,
    method: ApiMethods.GET,
    requireAuth: true,
  });

  const apiResponseData: Array<ISurveyListApiResponse> = await apiResponse.json();

  const results = apiResponseData.map((survey) => ({
    id: survey.id,
    name: survey.nombre,
    slug: survey.slug,
    description: survey.descripcion,
    client: survey.cliente,
    questions: survey.preguntas,
  }));
  return defer({ results });
};
