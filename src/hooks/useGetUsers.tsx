import { ApiRequestProviderInstance } from '~utils/ApiRequestProvider';
import { ApiMethods } from '~types/api/api-methods-object.type';
import { IUsersListApiResponse } from '~types/users/users-list-object';
import { useEffect, useState } from 'react';

const useGetUsers = () => {
  const url = '/auth/users';
  const apiRequestProvider = ApiRequestProviderInstance;
  const [loading, setLoading] = useState(true);
  const [users, setUsers] = useState<any>();

  useEffect(() => {
    if (!users) {
      apiRequestProvider
        .doRequest({
          url,
          method: ApiMethods.GET,
          requireAuth: true,
        })
        .then((response) => {
          response.json().then(({ data }: IUsersListApiResponse) => {
            const formattedUsers = data.map((user) => ({
              id: user.id,
              phone: user.celular,
              email: user.email,
              name: user.nombreCompleto,
              roles: user.roles,
              username: user.username,
            }));
            setUsers(formattedUsers);
            setLoading(false);
          });
        });
    }
  }, [apiRequestProvider, loading, users]);

  return {
    users: users,
    loading: loading,
  };
};

export default useGetUsers;
