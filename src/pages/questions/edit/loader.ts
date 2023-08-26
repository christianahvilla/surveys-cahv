import { LoaderFunctionArgs, defer } from 'react-router-dom';
import { ApiMethods } from '~types/api/api-methods-object.type';
import { IQuestionDataEdit } from '~types/questions/questions-list-object';
import { ApiRequestProviderInstance } from '~utils/ApiRequestProvider';
import { SurveySelectListApiResponse } from '../../../types/selects/survey-object.type';

export const EditQuestionLoader = async ({ params }: LoaderFunctionArgs) => {
  const url = `/encuestas/pregunta/${params.id}`;
  const urlSurvey = `/encuestas/selects`;
  const apiResponseProvider = ApiRequestProviderInstance;
  const apiResponse = await apiResponseProvider.doRequest({
    url,
    method: ApiMethods.GET,
    requireAuth: true,
  });

  const apiResponseSurvey = await ApiRequestProviderInstance.doRequest({
    url: urlSurvey,
    method: ApiMethods.GET,
    requireAuth: true,
  });

  const apiResponseDataSurvey: SurveySelectListApiResponse = await apiResponseSurvey.json();
  const apiResponseData: IQuestionDataEdit = await apiResponse.json();
  const surveys = apiResponseDataSurvey.map((survey) => ({
    key: survey.id,
    label: survey.nombre,
  }));
  const question = {
    id: apiResponseData.id,
    text: apiResponseData.textoPregunta,
    description: apiResponseData.descripcion,
    order: apiResponseData.orden,
    survey: undefined,
    type: apiResponseData.tipo,
  };

  const results = {
    question,
    surveys,
  };
  return defer({ results });
};
