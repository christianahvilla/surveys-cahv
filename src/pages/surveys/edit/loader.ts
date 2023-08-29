import { ApiRequestProviderInstance } from '~utils/ApiRequestProvider';
import { ApiMethods } from '~types/api/api-methods-object.type';
import { defer } from 'react-router-dom';
import { ISurveyApiResponse } from '~types/surveys/surveys-list-object';
import {
  ClientsListSelectDTO,
  ClientsSelectListApiResponse,
} from '~types/selects/clients-object.type';
import {
  RequirementsSelectApiResponse,
  RequirementsSelectDTO,
} from '~types/selects/requirements-list-object';

export const getSurveysLoader = async ({ params }: any) => {
  const urlSurvey = `/encuestas/filter/${params.id}`;
  const urlClient = `/clientes`;
  const urlRequirements = '/encuestas/requisitos/all';

  const apiRequestProvider = ApiRequestProviderInstance;

  const apiResponseSurvey = await apiRequestProvider.doRequest({
    url: urlSurvey,
    method: ApiMethods.GET,
    requireAuth: true,
  });

  const apiResponseClients = await apiRequestProvider.doRequest({
    url: urlClient,
    method: ApiMethods.GET,
    requireAuth: true,
  });

  const apiResponseRequirements = await apiRequestProvider.doRequest({
    url: urlRequirements,
    method: ApiMethods.GET,
    requireAuth: true,
  });

  const apiResponseDataSurvey: ISurveyApiResponse = await apiResponseSurvey.json();
  const clientsData: ClientsSelectListApiResponse = await apiResponseClients.json();
  const requirementsData: RequirementsSelectApiResponse = await apiResponseRequirements.json();

  const formattedClients: ClientsListSelectDTO = clientsData.map((client) => ({
    key: client.id,
    label: client.nombre,
  }));

  const formattedRequirements: RequirementsSelectDTO = requirementsData.map((requirement) => ({
    key: requirement.id,
    label: requirement.nombre,
  }));

  const survey = {
    id: apiResponseDataSurvey.id,
    name: apiResponseDataSurvey.nombre,
    slug: apiResponseDataSurvey.slug,
    description: apiResponseDataSurvey.descripcion,
    client: {
      key: apiResponseDataSurvey.cliente.id,
      label: apiResponseDataSurvey.cliente.nombre,
    },
    requirement: {
      key: apiResponseDataSurvey.requisitos?.id,
      label: apiResponseDataSurvey.requisitos?.nombre,
    },
  };

  const results = {
    survey,
    clients: formattedClients,
    requirements: formattedRequirements,
  };

  return defer(results);
};
