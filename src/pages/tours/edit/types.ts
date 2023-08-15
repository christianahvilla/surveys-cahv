import { ITourDTO } from '~types/tours/tours-list-object';
import { IUsersList } from '~types/users/users-list-object';

export type ToursLoaderData = { tours: ITourDTO; users: IUsersList };
