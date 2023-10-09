import { useEffect, useState } from 'react';
import { ApiMethods } from '~types/api/api-methods-object.type';
import { ApiError } from '~types/api/api-responses.object.type';
import { QuestionApiResponse, QuestionApiDTO } from '~types/questions/questions-action-objects';
import { ApiRequestProviderInstance } from '~utils/ApiRequestProvider';

export const useGetQuestionById = (
  id: string,
): { isLoading: boolean; question: QuestionApiDTO | undefined; error: ApiError | null } => {
  const [loading, setLoading] = useState(false);
  const [question, setQuestion] = useState<QuestionApiDTO | undefined>();
  const [error, setError] = useState(null);
  const url = `/encuestas/pregunta/${id}`;
  const apiRequestProvider = ApiRequestProviderInstance;

  useEffect(() => {
    if (!question) {
      setLoading(true);
      apiRequestProvider
        .doRequest({
          url,
          method: ApiMethods.GET,
          requireAuth: true,
        })
        .then((response) => {
          response.json().then((data: QuestionApiResponse) => {
            setQuestion({
              description: data.descripcion,
              order: data.orden,
              id: data.id,
              surveyId: data.encuestaId,
              text: data.textoPregunta,
              type: data.tipo,
            });
          });
        })
        .catch((error) => {
          setError(error);
        })
        .finally(() => setLoading(false));
    }
  }, [apiRequestProvider, question, url]);

  return {
    isLoading: loading,
    question,
    error,
  };
};
