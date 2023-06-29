import { defer } from 'react-router-dom';
import { ApiMethods } from '~types/api/api-methods-object.type';
import { ApiRequestProviderInstance } from '~utils/ApiRequestProvider';
import { IClientsListApiResponse } from '../../../types/clients/clients-list-object';

export const getClientsLoader = async ({ params }: any) => {
  const url = `/clientes/${params.id}`;

  const apiRequestProvider = ApiRequestProviderInstance;

  const apiResponse = await apiRequestProvider.doRequest({
    url,
    method: ApiMethods.GET,
    requireAuth: true,
  });

  const apiResponseData: IClientsListApiResponse = await apiResponse.json();

  const results = {
    id: apiResponseData.id,
    name: apiResponseData.nombre,
    slug: apiResponseData.slug,
  };

  return defer({ results });
};
