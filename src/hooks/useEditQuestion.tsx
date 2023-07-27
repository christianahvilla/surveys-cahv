import { useState } from 'react';
import { ApiMethods } from '~types/api/api-methods-object.type';
import { ApiRequestProviderInstance } from '~utils/ApiRequestProvider';

export const useEditQuestion = (id: string) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const url = `/encuestas/preguntas${id}`;
  const apiRequestProvider = ApiRequestProviderInstance;

  const editQuestion = (body: any) => {
    setLoading(true);
    apiRequestProvider
      .doRequest({
        url,
        method: ApiMethods.PATCH,
        body,
        requireAuth: true,
      })
      .then((response) => {
        response.json().then(({ data }: any) => {
          console.log(data);
        });
      })
      .catch((error) => {
        setError(error);
      })
      .finally(() => setLoading(false));
  };

  return {
    isLoading: loading,
    editQuestion,
    error,
  };
};
