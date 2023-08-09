import { ApiRequestProviderInstance } from '~utils/ApiRequestProvider';
import { ApiMethods } from '~types/api/api-methods-object.type';
import { defer } from 'react-router-dom';
import { RequirementSurveyListApiResponse } from '~types/requirements/requirements-surveys-list-object';

export const requirementCreateLoader = async () => {
  const url = '/encuestas/selects';
  const apiRequestProvider = ApiRequestProviderInstance;

  const apiResponse = await apiRequestProvider.doRequest({
    url,
    method: ApiMethods.GET,
    requireAuth: true,
  });

  const apiResponseData: RequirementSurveyListApiResponse = await apiResponse.json();

  const results = apiResponseData.map((survey) => ({
    id: survey.id,
    name: survey.nombre,
  }));

  return defer({ results });
};
