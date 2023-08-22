import { IClientsList } from '~types/clients/clients-list-object';

export const getClientOptions = (clients: Array<IClientsList>) => {
  return clients.map((client) => (
    <option key={client.id} value={client.id}>
      {client.name}
    </option>
  ));
};
