import { AVAILABLE_QUESTION_TYPE } from './constants';
import { SurveySelectListDTO } from '~types/selects/survey-object.type';

export const displaySurveysOptions = (surveys: SurveySelectListDTO) =>
  surveys.map((survey) => (
    <option value={survey.id} key={survey.id}>
      {survey.name}
    </option>
  ));

export const displayAvailableQuestionType = () =>
  AVAILABLE_QUESTION_TYPE.map((type) => (
    <option value={type.value} key={type.value}>
      {type.text}
    </option>
  ));
