import { ApiRequestProviderInstance } from '~utils/ApiRequestProvider';
import { ApiMethods } from '~types/api/api-methods-object.type';
import { defer } from 'react-router-dom';
import {
  AnswerListDTO,
  Gender,
  IAnswerDTO,
  IAnswerRootObjectApiResponse,
} from '~types/answers/answers-list-object';

export const listAnswersLoader = async () => {
  const url = `/respuestas`;
  const apiRequestProvider = ApiRequestProviderInstance;

  const apiResponse = await apiRequestProvider.doRequest({
    url,
    method: ApiMethods.GET,
    requireAuth: true,
  });

  const { data: answersData }: IAnswerRootObjectApiResponse = await apiResponse.json();

  const answers: AnswerListDTO = answersData.map(
    (answer) =>
      ({
        question: answer.pregunta.textoPregunta,
        id: answer.id,
        response: answer.responseText,
        survey: answer.encuesta.nombre,
        lastName: answer.encuestado.apaterno,
        secondLastName: answer.encuestado.amaterno,
        phone: answer.encuestado.celular,
        old: answer.encuestado.edad,
        email: answer.encuestado.email,
        gender: Gender[answer.encuestado.genero as unknown as keyof typeof Gender],
        surveyedName: answer.encuestado.nombres,
        address: `${answer.encuestado.puntos[0].street} ${answer.encuestado.puntos[0].street}`,
      } as IAnswerDTO),
  );

  return defer({ answers });
};
