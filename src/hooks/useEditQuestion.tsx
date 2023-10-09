import { useState } from 'react';
import { ApiMethods } from '~types/api/api-methods-object.type';
import { ApiError } from '~types/api/api-responses.object.type';
import { QuestionApiValues } from '~types/questions/questions-action-objects';
import { ApiRequestProviderInstance } from '~utils/ApiRequestProvider';

export const useEditQuestion = (
  id: string,
): {
  isLoading: boolean;
  error: ApiError | null;
  editQuestion: (body: QuestionApiValues) => void;
  isEdited: boolean;
} => {
  const [loading, setLoading] = useState(false);
  const [edited, setEdited] = useState(false);
  const [error, setError] = useState(null);
  const url = `/encuestas/preguntas/${id}`;
  const apiRequestProvider = ApiRequestProviderInstance;

  const editQuestion = (body: QuestionApiValues) => {
    setLoading(true);
    apiRequestProvider
      .doRequest({
        url,
        method: ApiMethods.PATCH,
        body,
        requireAuth: true,
      })
      .then((response) => {
        response.json().then(() => {
          setEdited(true);
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
    isEdited: edited,
    error,
  };
};
