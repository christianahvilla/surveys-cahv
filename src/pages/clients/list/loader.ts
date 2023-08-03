import { ApiRequestProviderInstance } from '~utils/ApiRequestProvider';
import { ApiMethods } from '~types/api/api-methods-object.type';
import { IClientsListApiResponse } from '~types/clients/clients-list-object';
import { defer } from 'react-router-dom';

export const listClientLoader = async () => {
  const url = `/clientes`;
  const apiRequestProvider = ApiRequestProviderInstance;

  const apiResponse = await apiRequestProvider.doRequest({
    url,
    method: ApiMethods.GET,
    requireAuth: true,
  });

  const clients: IClientsListApiResponse = await apiResponse.json();

  const results = clients.map((client) => ({
    id: client.id,
    name: client.nombre,
    slug: client.slug,
  }));

  return defer({ results });
};
