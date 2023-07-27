import { useEffect, useState } from 'react';
import { ApiMethods } from '~types/api/api-methods-object.type';
import { ApiRequestProviderInstance } from '~utils/ApiRequestProvider';

export const useGetQuestionById = (id: string) => {
  const [loading, setLoading] = useState(false);
  const [questions, setQuestions] = useState([]);
  const [error, setError] = useState(null);
  const url = `/encuestas/preguntas/${id}`;
  const apiRequestProvider = ApiRequestProviderInstance;

  useEffect(() => {
    if (!questions.length) {
      setLoading(true);
      apiRequestProvider
        .doRequest({
          url,
          method: ApiMethods.GET,
          requireAuth: true,
        })
        .then((response) => {
          response.json().then(({ data }: any) => {
            setQuestions(data);
          });
        })
        .catch((error) => {
          setError(error);
        })
        .finally(() => setLoading(false));
    }
  }, [apiRequestProvider, questions.length, url]);

  return {
    isLoading: loading,
    questions,
    error,
  };
};
