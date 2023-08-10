import { defer } from 'react-router-dom';
import { ApiMethods } from '~types/api/api-methods-object.type';
import { SurveyListDTO, SurveysListApiResponse } from '~types/surveys/surveys-list-object';
import { ApiRequestProviderInstance } from '~utils/ApiRequestProvider';

export const listSurveysLoader = async () => {
  const url = '/encuestas';
  const apiRequestProvider = ApiRequestProviderInstance;

  const apiResponse = await apiRequestProvider.doRequest({
    url,
    method: ApiMethods.GET,
    requireAuth: true,
  });

  const apiResponseData: SurveysListApiResponse = await apiResponse.json();

  const results: SurveyListDTO = apiResponseData.map((survey) => ({
    id: survey.id,
    name: survey.nombre,
    slug: survey.slug,
    description: survey.descripcion,
    client: {
      id: survey.id,
      name: survey.cliente.nombre,
    },
    questions: Boolean(survey.preguntas.length),
    requirements: survey.requisitos?.nombre || 'N/A',
  })) as SurveyListDTO;

  return defer({ results });
};
