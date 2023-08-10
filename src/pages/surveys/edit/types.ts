import { IClientsList } from '~types/clients/clients-list-object';
import { RequirementListDTO } from '~types/requirements/requirements-list-object';
import { ISurveyDTO } from '~types/surveys/surveys-list-object';

export type SurveyLoaderData = {
  survey: ISurveyDTO;
  clients: IClientsList;
  requirements: RequirementListDTO;
};
