export type QuestionValues = {
  description: string;
  surveyId: string;
  text: string;
  order: number;
  type: string;
};

export type QuestionApiValues = {
  descripcion: string;
  encuestaId: string;
  textoPregunta: string;
  orden: number;
  tipo: string;
};

export type QuestionApiResponse = {
  descripcion: string;
  encuestaId: string;
  textoPregunta: string;
  orden: number;
  tipo: string;
  id: string;
};

export type QuestionApiDTO = {
  description: string;
  surveyId: string;
  text: string;
  order: number;
  type: string;
  id: string;
};
