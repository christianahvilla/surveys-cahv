import { Await, Link, useNavigation, useLoaderData } from 'react-router-dom';
import { TableElement } from '~components/app/table/app-table.component';
import { TABLE_HEADER } from './constants';
import { IClientsList } from '~types/clients/clients-list-object';
import { Suspense } from 'react';
import { LoadingElement } from '~components/app/loading/loading-element.component';
import { NotificationElement } from '~components/app/common-notification/notification.element';
import { NotificationType } from '~types/notification/notification-object.type';


export const ClientsListElement = () => {
  const data = useLoaderData() as {
    results: Awaited<Array<IClientsList>>;
  }
  const navigation = useNavigation();

  return (
    
    <div data-testid='clients-list-element'>
      <Suspense fallback={<LoadingElement />}>
        <Await
          errorElement={
            <NotificationElement
              title={'Uuups'}
              body={'Algo fallo'}
              type={NotificationType.ERROR}
            />
          }
          resolve={data.results}
        >
          {(clients: Array<IClientsList>) => {
            if (navigation.state === 'loading')
              return (
                <div
                  className='min-h-screen w-full bg-gray-50 !pl-0 text-center sm:!pl-60'
                  id='content'
                >
                  <div className='p-12'>
                    <LoadingElement />
                  </div>
                </div>
              );

            const generateHead = () => TABLE_HEADER.map((header) => <th key={header}>{header}</th>);
            const generateRows = () =>
              clients.map((client: IClientsList) => (
                <tr key={client.id}>
                  <th>{client.name}</th>
                  <th>{client.slug}</th>
                </tr>
              ));

            return (
              <div
                className='min-h-screen w-full bg-gray-50 !pl-0 text-center sm:!pl-60'
                id='content'
              >
                <div className='p-12'>
                  <div className='flex flex-row justify-between'>
                    <h3 className='my-6 text-[1.75rem] font-medium leading-[1.2] flex justify-self-start text-gray-500'>
                      Clientes
                    </h3>
                    <Link className='flex' to='/clients/create' replace>
                      <button className='self-center h-fit rounded-md bg-indigo-600 px-3 py-2 text-lg font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'>
                        Agregar
                      </button>
                    </Link>
                  </div>
                  <div className='rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700'>
                    <TableElement head={generateHead()} rows={generateRows()} />
                  </div>
                </div>
              </div>
            );
          }}
        </Await>
      </Suspense>
    </div>
  );
};
