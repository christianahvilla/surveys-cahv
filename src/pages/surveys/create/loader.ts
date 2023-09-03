import { ApiRequestProviderInstance } from '~utils/ApiRequestProvider';
import { ApiMethods } from '~types/api/api-methods-object.type';
import { defer } from 'react-router-dom';
import { ClientsSelectListApiResponse } from '~types/selects/clients-object.type';
import { RequirementsSelectApiResponse } from '~types/selects/requirements-object';

export const listClientLoader = async () => {
  const urlClients = '/clientes';
  const urlRequirements = '/encuestas/requisitos/all';
  const apiRequestProvider = ApiRequestProviderInstance;

  const apiResponseRequirements = await apiRequestProvider.doRequest({
    url: urlRequirements,
    method: ApiMethods.GET,
    requireAuth: true,
  });

  const apiResponseClients = await apiRequestProvider.doRequest({
    url: urlClients,
    method: ApiMethods.GET,
    requireAuth: true,
  });

  const requirementsData: RequirementsSelectApiResponse = await apiResponseRequirements.json();
  const clientsData: ClientsSelectListApiResponse = await apiResponseClients.json();

  const formattedRequirements = requirementsData.map((requirement) => ({
    key: requirement.id,
    label: requirement.nombre,
  }));

  const formattedClients = clientsData.map((client) => ({
    key: client.id,
    label: client.nombre,
  }));

  const results = {
    clients: formattedClients,
    requirements: formattedRequirements,
  };

  return defer(results);
};
