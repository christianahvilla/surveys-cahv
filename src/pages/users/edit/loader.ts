import isNull from 'lodash/isNull';
import { ApiRequestProviderInstance } from '~utils/ApiRequestProvider';
import { ApiMethods } from '~types/api/api-methods-object.type';
import { UserData } from '~types/users/users-list-object';
import { LoaderFunctionArgs, defer } from 'react-router-dom';
import { ClientsSelectListApiResponse } from '~types/selects/clients-object.type';

export const getUserLoader = async ({ params }: LoaderFunctionArgs) => {
  const url = `/auth/user/${params.id}`;
  const urlClient = '/clientes';

  const apiRequestProvider = ApiRequestProviderInstance;

  const apiResponse = await apiRequestProvider.doRequest({
    url,
    method: ApiMethods.GET,
    requireAuth: true,
  });
  const apiResponseClients = await apiRequestProvider.doRequest({
    url: urlClient,
    method: ApiMethods.GET,
    requireAuth: true,
  });

  const clientsData: ClientsSelectListApiResponse = await apiResponseClients.json();

  const apiResponseUserData: UserData = await apiResponse.json();

  const formattedUser = {
    id: apiResponseUserData.id,
    phone: apiResponseUserData.celular,
    email: apiResponseUserData.email,
    name: apiResponseUserData.nombreCompleto,
    roles: apiResponseUserData.roles,
    username: apiResponseUserData.username,
    client: !isNull(apiResponseUserData.cliente)
      ? {
          key: apiResponseUserData.cliente?.id,
          label: apiResponseUserData.cliente?.nombre,
        }
      : null,
  };

  const formattedClients = clientsData.map((client) => ({
    key: client.id,
    label: client.nombre,
  }));

  const results = {
    user: formattedUser,
    clients: formattedClients,
  };

  return defer(results);
};
