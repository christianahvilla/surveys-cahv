import { defer } from 'react-router-dom';
import { ApiMethods } from '~types/api/api-methods-object.type';
import { ITourApiResponse } from '~types/tours/tours-list-object';
import { IUsersListApiResponse } from '~types/users/users-list-object';
import { ApiRequestProviderInstance } from '~utils/ApiRequestProvider';

export const getToursLoader = async ({ params }: any) => {
  const urlTour = `/recorridos/${params.id}`;
  const urlUser = `/auth/users`;

  const apiRequestProvider = ApiRequestProviderInstance;

  const apiResponseTour = await apiRequestProvider.doRequest({
    url: urlTour,
    method: ApiMethods.GET,
    requireAuth: true,
  });

  const apiResponseUser = await apiRequestProvider.doRequest({
    url: urlUser,
    method: ApiMethods.GET,
    requireAuth: true,
  });

  const apiResponseDataTours: ITourApiResponse = await apiResponseTour.json();
  console.log(apiResponseDataTours);
  const apiResponseDataUsers: IUsersListApiResponse = await apiResponseUser.json();

  const users = apiResponseDataUsers.map((user) => ({
    id: user.id,
    name: user.nombreCompleto,
  }));

  const tours = {
    id: apiResponseDataTours.id,
    state: apiResponseDataTours.state,
    city: apiResponseDataTours.city,
    colony: apiResponseDataTours.colony,
    cp: apiResponseDataTours.cp,
    order: apiResponseDataTours.order,
    user: {
      id: apiResponseDataTours.user.id,
      name: apiResponseDataTours.user.nombreCompleto,
    },
  };
  const results = { tours, users };
  return defer({ results });
};
