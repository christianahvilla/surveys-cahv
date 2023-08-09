import { defer } from 'react-router-dom';
import { ApiMethods } from '~types/api/api-methods-object.type';
import {
  RequirementListApiResponse,
  RequirementListDTO,
} from '~types/requirements/requirements-list-object';
import { ApiRequestProviderInstance } from '~utils/ApiRequestProvider';

export const listRequirementsLoader = async () => {
  const url = '/encuestas/requisitos/all';
  const apiRequestProvider = ApiRequestProviderInstance;

  const apiResponse = await apiRequestProvider.doRequest({
    url,
    method: ApiMethods.GET,
    requireAuth: true,
  });

  const apiResponseData: RequirementListApiResponse = await apiResponse.json();

  const results: RequirementListDTO = apiResponseData.map((requirement) => ({
    id: requirement.id,
    name: requirement.nombre,
  })) as RequirementListDTO;

  return defer({ results });
};
