import { defer } from 'react-router-dom';
import { ApiMethods } from '~types/api/api-methods-object.type';
import { SurveySelectListApiResponse } from '~types/selects/survey-object.type';
import { ApiRequestProviderInstance } from '~utils/ApiRequestProvider';

export const listSurveyLoader = async () => {
  const url = '/encuestas/selects';
  const apiRequestProvider = ApiRequestProviderInstance;

  const apiResponse = await apiRequestProvider.doRequest({
    url,
    method: ApiMethods.GET,
    requireAuth: true,
  });

  const apiResponseData: SurveySelectListApiResponse = await apiResponse.json();

  const results = apiResponseData.map((survey) => ({
    key: survey.id,
    label: survey.nombre,
  }));

  return defer({ results });
};
