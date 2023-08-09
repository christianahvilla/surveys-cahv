import { useState } from 'react';
import { ApiMethods } from '~types/api/api-methods-object.type';
import { ApiError } from '~types/api/api-responses.object.type';
import { QuestionApiValues } from '~types/questions/questions-action-objects';
import { ApiRequestProviderInstance } from '~utils/ApiRequestProvider';

export const useSaveQuestion = (): {
  isLoading: boolean;
  saveQuestion: (body: QuestionApiValues) => void;
  error: ApiError | null;
  isSaved: boolean;
} => {
  const [loading, setLoading] = useState(false);
  const [saved, setSaved] = useState(false);
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
        response.json().then(() => setSaved(true));
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
    isSaved: saved,
  };
};
