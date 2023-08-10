import { SurveySelectListDTO } from '~types/selects/survey-object.type';

export const displaySurveysOptions = (surveys: SurveySelectListDTO) =>
  surveys.map((survey) => (
    <option value={survey.id} key={survey.id}>
      {survey.name}
    </option>
  ));
