import { useState } from 'react';
import { ApiMethods } from '~types/api/api-methods-object.type';
import { ApiRequestProviderInstance } from '~utils/ApiRequestProvider';

export const useSaveQuestion = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const url = `/encuestas/preguntas`;
  const apiRequestProvider = ApiRequestProviderInstance;

  const saveQuestion = (body: any) => {
    setLoading(true);
    apiRequestProvider
      .doRequest({
        url,
        method: ApiMethods.POST,
        body,
        requireAuth: true,
      })
      .then((response) => {
        response.json().then(({ data }: any) => {
          console.log('aqui entro', data);
        });
      })
      .catch((error) => {
        setError(error);
      })
      .finally(() => setLoading(false));
  };

  return {
    isLoading: loading,
    saveQuestion,
    error,
  };
};
