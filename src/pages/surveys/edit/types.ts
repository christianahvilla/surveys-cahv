import { IClientsList } from '~types/clients/clients-list-object';
import { ISurveyDataTransform } from '~types/surveys/surveys-list-object';

export type SurveyLoaderData = { survey: ISurveyDataTransform; clients: IClientsList };
