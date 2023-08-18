export interface IQuestionsSelectApiResponse {
  id: string;
  nombre: string;
}

export interface IQuestionsSelectDTO {
  key: string;
  label: string;
}

export type QuestionsSelectListApiResponse = Array<IQuestionsSelectApiResponse>;
export type QuestionsSelectListDTO = Array<IQuestionsSelectDTO>;
