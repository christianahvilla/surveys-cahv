import { useEffect, useState } from 'react';
import { ApiMethods } from '~types/api/api-methods-object.type';
import { ApiError } from '~types/api/api-responses.object.type';
import {
  SurveySelectListApiResponse,
  SurveySelectListDTO,
} from '~types/selects/survey-object.type';
import { ApiRequestProviderInstance } from '~utils/ApiRequestProvider';

export const useGetSurveys = (): {
  surveys: SurveySelectListDTO;
  error: null | ApiError;
  isLoading: boolean;
} => {
  const [loading, setLoading] = useState(false);
  const [surveys, setSurveys] = useState<SurveySelectListDTO>([]);
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
          response.json().then((data: SurveySelectListApiResponse) => {
            const formattedSurveys = data.map((survey) => ({
              id: survey.id,
              name: survey.nombre,
            }));
            setSurveys(formattedSurveys);
          });
        })
        .catch((error) => {
          setError(error);
        })
        .finally(() => setLoading(false));
    }
  }, [apiRequestProvider, surveys?.length, url]);

  return {
    isLoading: loading,
    surveys,
    error,
  };
};
