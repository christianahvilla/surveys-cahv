import { ApiRequestProviderInstance } from '~utils/ApiRequestProvider';
import { ApiMethods } from '~types/api/api-methods-object.type';
import { UserData } from '~types/users/users-list-object';
import { LoaderFunctionArgs, defer } from 'react-router-dom';

export const getUserLoader = async ({ params }: LoaderFunctionArgs) => {
  const url = `/auth/user/${params.id}`;

  const apiRequestProvider = ApiRequestProviderInstance;

  const apiResponse = await apiRequestProvider.doRequest({
    url,
    method: ApiMethods.GET,
    requireAuth: true,
  });

  const apiResponseData: UserData = await apiResponse.json();

  const results = {
    id: apiResponseData.id,
    phone: apiResponseData.celular,
    email: apiResponseData.email,
    name: apiResponseData.nombreCompleto,
    roles: apiResponseData.roles,
    username: apiResponseData.username,
  };

  return defer({ results });
};
