import { ApiMethods } from '~types/api/api-methods-object.type';
import { ApiRequestProviderInstance } from '~utils/ApiRequestProvider';
import { defer } from 'react-router-dom';
import { IUsersListApiResponse } from '../../../types/users/users-list-object';

export const listUserLoader = async () => {
  const url = '/auth/users';
  const apiRequestProvider = ApiRequestProviderInstance;

  const apiResponse = await apiRequestProvider.doRequest({
    url,
    method: ApiMethods.GET,
    requireAuth: true,
  });

  const apiResponseData: IUsersListApiResponse = await apiResponse.json();

  const results = apiResponseData.map((user) => ({
    key: user.id,
    label: user.nombreCompleto,
  }));

  return defer({ results });
};
