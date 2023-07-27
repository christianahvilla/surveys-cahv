import { useEffect, useState } from 'react';
import { ApiMethods } from '~types/api/api-methods-object.type';
import {
  IQuestionApiResponse,
  QuestionDataTransform,
} from '~types/questions/questions-list-object';
import { ApiRequestProviderInstance } from '~utils/ApiRequestProvider';

export const useGetQuestions = () => {
  const [loading, setLoading] = useState(false);
  const [questions, setQuestions] = useState<QuestionDataTransform>([]);
  const [error, setError] = useState(null);
  const url = `/encuestas/preguntas/all`;
  const apiRequestProvider = ApiRequestProviderInstance;

  useEffect(() => {
    if (!questions?.length) {
      setLoading(true);
      apiRequestProvider
        .doRequest({
          url,
          method: ApiMethods.GET,
          requireAuth: true,
        })
        .then((response) => {
          response.json().then((data: IQuestionApiResponse) => {
            const formattedQuestions: QuestionDataTransform = data.map(
              ({
                id,
                descripcion,
                opciones,
                textoPregunta,
                tipo,
                encuesta: {
                  cliente,
                  descripcion: descripcionEncuesta,
                  id: idEncuesta,
                  nombre,
                  slug,
                },
              }) => ({
                description: descripcion,
                survey: {
                  client: cliente,
                  description: descripcionEncuesta,
                  id: idEncuesta,
                  name: nombre,
                  slug: slug,
                },
                options: opciones,
                text: textoPregunta,
                type: tipo,
                id: id,
              }),
            );
            setQuestions(formattedQuestions);
          });
        })
        .catch((error) => {
          setError(error);
        })
        .finally(() => setLoading(false));
    }
  }, [apiRequestProvider, questions?.length, url]);

  return {
    isLoading: loading,
    questions,
    error,
  };
};
