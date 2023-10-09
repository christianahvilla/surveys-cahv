import { ClientsListSelectDTO } from '~types/selects/clients-object.type';
import { IUserDTO } from '~types/users/users-list-object';

export interface IEditUserLoader {
  user: IUserDTO;
  clients: ClientsListSelectDTO;
}
