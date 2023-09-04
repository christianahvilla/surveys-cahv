import { ApiRequestProviderInstance } from '~utils/ApiRequestProvider';
import { ApiMethods } from '~types/api/api-methods-object.type';
import { defer } from 'react-router-dom';
import { IPointTourApiResponse, PointsListDTO } from '~types/points/points-list-object';

export const listPointsLoader = async () => {
  const url = '/recorridos/puntos/all';
  const apiResponseProvider = ApiRequestProviderInstance;
  const apiResponse = await apiResponseProvider.doRequest({
    url,
    method: ApiMethods.GET,
    requireAuth: true,
  });

  const { data }: IPointTourApiResponse = await apiResponse.json();

  const results: PointsListDTO = data.map((point) => ({
    survey: point.encuesta.nombre,
    cords: `${point.latitude},${point.longitude}`,
    order: Number(point.order),
    street: point.street,
    tour: `${point.recorrido.colony}, ${point.recorrido.city}, ${point.recorrido.state}, ${point.recorrido.cp}`,
    id: point.id,
  }));

  return defer({ results });
};
