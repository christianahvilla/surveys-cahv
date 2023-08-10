import { RequirementListDTO } from '~types/requirements/requirements-list-object';
import { IClientsListSelectDTO } from '~types/selects/clients-object.type';

export const getSelectOptions = (items: IClientsListSelectDTO | RequirementListDTO) => {
  return items.map((item) => (
    <option key={item.id} value={item.id}>
      {item.name}
    </option>
  ));
};
