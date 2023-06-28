import { ApiRequestProviderInstance } from '~utils/ApiRequestProvider';
import { ApiMethods } from '~types/api/api-methods-object.type';
import { IUsersListApiResponse } from '~types/users/users-list-object';
import { defer } from 'react-router-dom';

export const getUserLoader = async ({ params }: any) => {
  const url = `/auth/user/${params.id}`;

  const apiRequestProvider = ApiRequestProviderInstance;

  const apiResponse = await apiRequestProvider.doRequest({
    url,
    method: ApiMethods.GET,
    requireAuth: true,
  });

  const apiResponseData: IUsersListApiResponse = await apiResponse.json();

  const results = {
    id: apiResponseData.id,
    phone: apiResponseData.celular,
    email: apiResponseData.email,
    name: apiResponseData.nombre_completo,
    roles: apiResponseData.roles,
    username: apiResponseData.username,
  };

  return defer({ results });
};