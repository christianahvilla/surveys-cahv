import { ApiRequestProviderInstance } from '~utils/ApiRequestProvider';
import { ApiMethods } from '~types/api/api-methods-object.type';
import { defer } from 'react-router-dom';
import {
  RequirementListApiResponse,
  RequirementListDTO,
} from '~types/requirements/requirements-list-object';
import { IClientsSelectListApiResponse } from '~types/selects/clients-object.type';

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

  const requirementsData: RequirementListApiResponse = await apiResponseRequirements.json();
  const clientsData: IClientsSelectListApiResponse = await apiResponseClients.json();

  const formattedRequirements: RequirementListDTO = requirementsData.map((requirement) => ({
    id: requirement.id,
    name: requirement.nombre,
  })) as RequirementListDTO;

  const formattedClients = clientsData.map((client) => ({
    id: client.id,
    name: client.nombre,
  }));

  const results = {
    clients: formattedClients,
    requirements: formattedRequirements,
  };

  return defer(results);
};
