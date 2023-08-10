import { ApiRequestProviderInstance } from '~utils/ApiRequestProvider';
import { ApiMethods } from '../../../types/api/api-methods-object.type';
import { IDataApiResponse, SurveyedListDTO } from '~types/surveyed/surveyed-list-object';
import { defer } from 'react-router-dom';

export const listSurveyedLoader = async () => {
  const url = '/encuestados';
  const apiRequestProvider = ApiRequestProviderInstance;
  const apiResponse = await apiRequestProvider.doRequest({
    url,
    method: ApiMethods.GET,
    requireAuth: true,
  });
  const apiResponseData: IDataApiResponse = await apiResponse.json();

  const results: SurveyedListDTO = apiResponseData.data.map((surveyed) => ({
    id: surveyed.id,
    name: surveyed.nombres,
    fatherLastname: surveyed.apaterno,
    motherLastname: surveyed.amaterno,
    phone: surveyed.celular,
    birthDate: surveyed.birthDate,
    studioLevel: surveyed.studioNivel,
    sign: surveyed.firma,
  })) as SurveyedListDTO;
  return defer({ results });
};
