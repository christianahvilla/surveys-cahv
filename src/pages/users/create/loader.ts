import { ApiRequestProviderInstance } from '~utils/ApiRequestProvider';
import { ApiMethods } from '~types/api/api-methods-object.type';
import { defer } from 'react-router-dom';
import { ClientsSelectListApiResponse } from '~types/selects/clients-object.type';

export const createUserLoader = async () => {
  const urlClient = '/clientes';
  const apiRequestProvider = ApiRequestProviderInstance;

  const apiResponseClients = await apiRequestProvider.doRequest({
    url: urlClient,
    method: ApiMethods.GET,
    requireAuth: true,
  });

  const clientsData: ClientsSelectListApiResponse = await apiResponseClients.json();

  const formattedClients = clientsData.map((client) => ({
    key: client.id,
    label: client.nombre,
  }));

  const results = {
    clients: formattedClients,
  };

  return defer(results);
};
