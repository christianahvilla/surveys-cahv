import { RequirementListDTO } from '~types/requirements/requirements-list-object';
import { ClientsListSelectDTO } from '~types/selects/clients-object.type';

export const getSelectOptions = (items: ClientsListSelectDTO | RequirementListDTO) => {
  return items.map((item) => (
    <option key={item.id} value={item.id}>
      {item.name}
    </option>
  ));
};
