import { ApiMethods } from '~types/api/api-methods-object.type';
import { ApiRequestProviderInstance } from '~utils/ApiRequestProvider';
import { defer } from 'react-router-dom';
import {
  SurveySelectListApiResponse,
  SurveySelectListDTO,
} from '~types/selects/survey-object.type';
import { TourSelectDTO } from '~types/selects/tours-object.type';
import { ToursListApiResponse } from '~types/tours/tours-list-object';

export const listUserLoader = async () => {
  const urlSurveys = '/encuestas/selects';
  const urlTours = '/recorridos';
  const apiRequestProvider = ApiRequestProviderInstance;

  const apiResponseSurveys = await apiRequestProvider.doRequest({
    url: urlSurveys,
    method: ApiMethods.GET,
    requireAuth: true,
  });
  const apiResponseTours = await apiRequestProvider.doRequest({
    url: urlTours,
    method: ApiMethods.GET,
    requireAuth: true,
  });

  const apiResponseDataSurveys: SurveySelectListApiResponse = await apiResponseSurveys.json();
  const apiResponseDataTours: ToursListApiResponse = await apiResponseTours.json();

  const formattedSurveys: SurveySelectListDTO = apiResponseDataSurveys.map((survey) => ({
    key: survey.id,
    label: survey.nombre,
  }));

  const formattedTours: TourSelectDTO = apiResponseDataTours.map((tour) => ({
    key: tour.id,
    label: `${tour.colony}, ${tour.city}, ${tour.cp}, ${tour.state} `,
  }));

  return defer({ surveys: formattedSurveys, tours: formattedTours });
};
