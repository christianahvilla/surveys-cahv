import { ApiRequestProviderInstance } from '~utils/ApiRequestProvider';
import { ApiMethods } from '~types/api/api-methods-object.type';
import { defer } from 'react-router-dom';
import {
  SurveySelectListApiResponse,
  SurveySelectListDTO,
} from '~types/selects/survey-object.type';

export const requirementCreateLoader = async () => {
  const url = '/encuestas/selects';
  const apiRequestProvider = ApiRequestProviderInstance;

  const apiResponse = await apiRequestProvider.doRequest({
    url,
    method: ApiMethods.GET,
    requireAuth: true,
  });

  const apiResponseData: SurveySelectListApiResponse = await apiResponse.json();

  const results: SurveySelectListDTO = apiResponseData.map((survey) => ({
    key: survey.id,
    label: survey.nombre,
  }));

  return defer({ results });
};
