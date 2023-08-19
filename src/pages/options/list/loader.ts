import { ApiRequestProviderInstance } from '~utils/ApiRequestProvider';
import { ApiMethods } from '~types/api/api-methods-object.type';
import { defer } from 'react-router-dom';
import { OptionsListApiResponse } from '~types/options/options-list-object';

export const listOptionsLoader = async () => {
  const url = `/encuestas/preguntas/opciones/selects`;
  const apiRequestProvider = ApiRequestProviderInstance;

  const apiResponse = await apiRequestProvider.doRequest({
    url,
    method: ApiMethods.GET,
    requireAuth: true,
  });

  const options: OptionsListApiResponse = await apiResponse.json();

  const results = options.map((option) => ({
    id: option.id,
    name: option.nombre,
    img: option.img,
    text: option.text,
  }));

  return defer({ results });
};
