import { useEffect, useState } from 'react';
import { ApiMethods } from '~types/api/api-methods-object.type';
import { ISurveyList, ISurveyListApiResponse } from '~types/surveys/surveys-list-object';
import { ApiRequestProviderInstance } from '~utils/ApiRequestProvider';

export const useGetSurveys = () => {
  const [loading, setLoading] = useState(false);
  const [surveys, setSurveys] = useState<Array<ISurveyList>>([]);
  const [error, setError] = useState(null);
  const url = '/encuestas';
  const apiRequestProvider = ApiRequestProviderInstance;

  useEffect(() => {
    if (!surveys?.length) {
      setLoading(true);
      apiRequestProvider
        .doRequest({
          url,
          method: ApiMethods.GET,
          requireAuth: true,
        })
        .then((response) => {
          response.json().then((data: Array<ISurveyListApiResponse>) => {
            const formattedSurveys = apiResponseData.map((survey) => ({
              id: survey.id,
              name: survey.nombre,
              slug: survey.slug,
              description: survey.descripcion,
              client: survey.cliente,
              questions: survey.preguntas,
            }));
            setSurveys(formattedSurveys);
          });
        })
        .catch((error) => {
          setError(error);
        })
        .finally(() => setLoading(false));
    }
  }, [apiRequestProvider, apiResponseData, surveys?.length, url]);

  return {
    isLoading: loading,
    surveys,
    error,
  };
};
