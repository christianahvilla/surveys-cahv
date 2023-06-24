import { ApiRequestProviderInstance } from '~utils/ApiRequestProvider';
import { ApiMethods } from '~types/api/api-methods-object.type';
import { IUsersListApiResponse } from '~types/users/users-list-object';
import { defer } from 'react-router-dom';

export const listUserLoader = async () => {
  const url = '/auth/users';
  const apiRequestProvider = ApiRequestProviderInstance;

  const apiResponse = await apiRequestProvider.doRequest({
    url,
    method: ApiMethods.GET,
    requireAuth: true,
  });

  const apiResponseData: Array<IUsersListApiResponse> = await apiResponse.json();

  const results = apiResponseData.map((user) => ({
    id: user.id,
    phone: user.celular,
    email: user.email,
    name: user.nombre_completo,
    roles: user.roles,
    username: user.username,
  }));

  return defer({ results });
};
