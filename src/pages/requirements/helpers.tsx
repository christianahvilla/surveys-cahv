import { RequirementSurveyListDTO } from '~types/requirements/requirements-surveys-list-object';

export const getSurveyOptions = (surveys: RequirementSurveyListDTO) => {
  return surveys.map((survey) => (
    <option key={survey.id} value={survey.id}>
      {survey.name}
    </option>
  ));
};
