import { ApiRequestProviderInstance } from '~utils/ApiRequestProvider';
import { ApiMethods } from '~types/api/api-methods-object.type';
import { IUsersListApiResponse } from '~types/users/users-list-object';
import { LoaderFunctionArgs, defer } from 'react-router-dom';

export const listUserLoader = async ({ params }: LoaderFunctionArgs) => {
  const { page } = params as { page: string };
  const url = `/auth/users?page=${Number(page) + 1}`;
  const apiRequestProvider = ApiRequestProviderInstance;

  const apiResponse = await apiRequestProvider.doRequest({
    url,
    method: ApiMethods.GET,
    requireAuth: true,
  });

  const { data, meta }: IUsersListApiResponse = await apiResponse.json();

  const results = data.map((user) => ({
    id: user.id,
    phone: user.celular,
    email: user.email,
    name: user.nombreCompleto,
    roles: user.roles,
    username: user.username,
  }));

  return defer({ results, meta });
};
