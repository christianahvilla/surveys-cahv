import { ApiRequestProviderInstance } from '~utils/ApiRequestProvider';
import { ApiMethods } from '~types/api/api-methods-object.type';
import { ToursListApiResponse, ToursListDataTransform } from '~types/tours/tours-list-object';
import { defer } from 'react-router-dom';

export const listToursLoader = async () => {
  const url = '/recorridos';
  const apiResponseProvider = ApiRequestProviderInstance;
  const apiResponse = await apiResponseProvider.doRequest({
    url,
    method: ApiMethods.GET,
    requireAuth: true,
  });

  const apiResponseData: ToursListApiResponse = await apiResponse.json();

  const results: ToursListDataTransform = apiResponseData.map((tour) => ({
    id: tour.id,
    state: tour.state,
    city: tour.city,
    colony: tour.colony,
    cp: tour.cp,
    order: tour.order,
    user: tour.user.nombreCompleto,
  })) as ToursListDataTransform;
  return defer({ results });
};
