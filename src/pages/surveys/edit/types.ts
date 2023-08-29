import { ClientsListSelectDTO } from '~types/selects/clients-object.type';
import { RequirementsSelectDTO } from '~types/selects/requirements-list-object';
import { ISurveyDTO } from '~types/surveys/surveys-list-object';

export type SurveyLoaderData = {
  survey: ISurveyDTO;
  clients: ClientsListSelectDTO;
  requirements: RequirementsSelectDTO;
};
