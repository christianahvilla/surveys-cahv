import { ApiRequestProviderInstance } from '~utils/ApiRequestProvider';
import { ApiMethods } from '~types/api/api-methods-object.type';
import { ActionFunctionArgs, defer } from 'react-router-dom';
import { RequirementSurveyListApiResponse } from '~types/requirements/requirements-surveys-list-object';
import { RequirementEditApiResponse } from '~types/requirements/requirement-edit-object';

export const requirementEditLoader = async ({ params }: ActionFunctionArgs) => {
  const urlSurvey = `/encuestas/selects`;
  const urlRequirement = `/encuestas/requisitos/filter/${params.id}`;

  const apiRequestProvider = ApiRequestProviderInstance;

  const apiResponseSurvey = await apiRequestProvider.doRequest({
    url: urlSurvey,
    method: ApiMethods.GET,
    requireAuth: true,
  });

  const apiResponseRequirement = await apiRequestProvider.doRequest({
    url: urlRequirement,
    method: ApiMethods.GET,
    requireAuth: true,
  });

  const apiResponseDataSurvey: RequirementSurveyListApiResponse = await apiResponseSurvey.json();
  const apiResponseDataRequirement: RequirementEditApiResponse =
    await apiResponseRequirement.json();

  const surveys = apiResponseDataSurvey.map((survey) => ({
    id: survey.id,
    name: survey.nombre,
  }));

  const requirement = {
    name: apiResponseDataRequirement.nombre,
    female: apiResponseDataRequirement.female,
    femaleAdvance: apiResponseDataRequirement.femaleAvance,
    male: apiResponseDataRequirement.male,
    maleAdvance: apiResponseDataRequirement.maleAvance,
    adultLittle: apiResponseDataRequirement.adultoMenor,
    adultLittleAdvance: apiResponseDataRequirement.adultoMenorAvance,
    adult: apiResponseDataRequirement.adulto,
    adultAdvance: apiResponseDataRequirement.adultoAvance,
    adultUpper: apiResponseDataRequirement.adultoMayor,
    adultUpperAdvance: apiResponseDataRequirement.adultoMayorAvance,
    surveyId: apiResponseDataRequirement.encuestaId,
  };

  const results = {
    requirement,
    surveys,
  };

  return defer({ results });
};
