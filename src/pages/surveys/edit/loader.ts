import { ApiRequestProviderInstance } from '~utils/ApiRequestProvider';
import { ApiMethods } from '~types/api/api-methods-object.type';
import { ISurveyListApiResponse } from '~types/surveys/surveys-list-object';
import { defer } from 'react-router-dom';

export const getSurveysLoader = async ({ params }: any) => {
  const url = `/encuestas/${params.id}`;

  const apiRequestProvider = ApiRequestProviderInstance;

  const apiResponse = await apiRequestProvider.doRequest({
    url,
    method: ApiMethods.GET,
    requireAuth: true,
  });

  const apiResponseData: ISurveyListApiResponse = await apiResponse.json();

  const results = {
    id: apiResponseData.id,
    name: apiResponseData.nombre,
    slug: apiResponseData.slug,
    description: apiResponseData.descripcion,
    client: apiResponseData.cliente,
  };

  return defer({ results });
};


