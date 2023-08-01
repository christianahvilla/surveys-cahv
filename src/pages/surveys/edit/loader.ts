import { ApiRequestProviderInstance } from '~utils/ApiRequestProvider';
import { ApiMethods } from '~types/api/api-methods-object.type';
import { defer } from 'react-router-dom';
import { ISurveyApiResponse } from '~types/surveys/surveys-list-object';
import { IClientsListApiResponse } from '~types/clients/clients-list-object';

export const getSurveysLoader = async ({ params }: any) => {
  const urlSurvey = `/encuestas/filter/${params.id}`;
  const urlClient = `/clientes`;

  const apiRequestProvider = ApiRequestProviderInstance;

  const apiResponseSurvey = await apiRequestProvider.doRequest({
    url: urlSurvey,
    method: ApiMethods.GET,
    requireAuth: true,
  });

  const apiResponseClient = await apiRequestProvider.doRequest({
    url: urlClient,
    method: ApiMethods.GET,
    requireAuth: true,
  });

  const apiResponseDataSurvey: ISurveyApiResponse = await apiResponseSurvey.json();
  const apiResponseDataClients: IClientsListApiResponse = await apiResponseClient.json();

  const clients = apiResponseDataClients.map((client) => ({
    id: client.id,
    name: client.nombre,
    slug: client.slug,
  }));

  const survey = {
    id: apiResponseDataSurvey.id,
    name: apiResponseDataSurvey.nombre,
    slug: apiResponseDataSurvey.slug,
    description: apiResponseDataSurvey.descripcion,
    client: {
      id: apiResponseDataSurvey.cliente.id,
      name: apiResponseDataSurvey.cliente.nombre,
    },
  };

  const results = {
    survey,
    clients,
  };

  return defer({ results });
};
