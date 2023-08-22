import { ApiRequestProviderInstance } from '~utils/ApiRequestProvider';
import { ApiMethods } from '~types/api/api-methods-object.type';
import { defer } from 'react-router-dom';
import { ISurveyApiResponse } from '~types/surveys/surveys-list-object';
import {
  RequirementListApiResponse,
  RequirementListDTO,
} from '~types/requirements/requirements-list-object';
import { IClientsSelectListApiResponse } from '~types/selects/clients-object.type';

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
  const clientsData: IClientsSelectListApiResponse = await apiResponseClients.json();
  const requirementsData: RequirementListApiResponse = await apiResponseRequirements.json();

  const clients = clientsData.map((client) => ({
    id: client.id,
    name: client.nombre,
  }));

  const formattedRequirements: RequirementListDTO = requirementsData.map((requirement) => ({
    id: requirement.id,
    name: requirement.nombre,
  })) as RequirementListDTO;

  const survey = {
    id: apiResponseDataSurvey.id,
    name: apiResponseDataSurvey.nombre,
    slug: apiResponseDataSurvey.slug,
    description: apiResponseDataSurvey.descripcion,
    client: {
      id: apiResponseDataSurvey.cliente.id,
      name: apiResponseDataSurvey.cliente.nombre,
    },
    requirements: {
      id: apiResponseDataSurvey.requisitos?.id,
      name: apiResponseDataSurvey.requisitos?.nombre,
    },
  };

  const results = {
    survey,
    clients,
    requirements: formattedRequirements,
  };

  return defer(results);
};
