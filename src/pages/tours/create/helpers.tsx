import { IUserDataTransform } from '~types/users/users-list-object';

export const getUsersOptions = (users: Array<IUserDataTransform>) => {
  return users.map((user) => (
    <option key={user.id} value={user.id}>
      {user.name}
    </option>
  ));
};
