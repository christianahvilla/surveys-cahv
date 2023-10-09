import { Nullable } from '~clean/common/types/common';
export interface IQuestionsSelectApiResponse {
  id: string;
  textoPregunta: string;
}

export interface IQuestionsSelectDTO {
  key: Nullable<string>;
  label: string;
}

export type QuestionsSelectListApiResponse = Array<IQuestionsSelectApiResponse>;
export type QuestionsSelectListDTO = Array<IQuestionsSelectDTO>;
