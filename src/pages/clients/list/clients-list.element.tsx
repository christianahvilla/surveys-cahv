import { Await, Link, useNavigation, useLoaderData } from 'react-router-dom';
import { IClientsList } from '~types/clients/clients-list-object';
import { Suspense } from 'react';
import { LoadingElement } from '~components/app/loading/loading-element.component';
import { TableElement } from '~components/app/table/app-table.component';
import { CLIENTS_TITLE, TABLE_HEADER } from './constants';
import { ClientsListErrorElement } from './clients-list-error.element';
import { ParentContainer } from '~components/containers/parent-container.component';
import { PageContainer } from '../../../components/containers/page-container.component';
import { TitlePage } from '../../../components/app/title-page/app-title-page.component';
import { AddButton } from '../../../components/buttons/add-button/app-add-button.component';
import { ADD_CLIENT_ROUTE } from '../constants';
import { Card } from '@nextui-org/react';


export const ClientsListElement = () => {
  const data = useLoaderData() as {
    results: Awaited<IClientsList>;
  };

  const navigation = useNavigation();

  return (
    <div data-testid='clients-list-element'>
      <Suspense fallback={<LoadingElement />}>
        <ParentContainer>
          <PageContainer>
            <Await errorElement={<ClientsListErrorElement />} resolve={data.results}>
              {(clients: IClientsList) => {
                if (navigation.state === 'loading') return <LoadingElement />;
                return (
                  <>
                    <TitlePage
                      title={CLIENTS_TITLE}
                      Button={<AddButton route={ADD_CLIENT_ROUTE} />}
                      hasButton
                    />
                    <Card>
                      <TableElement rowData={clients} columnDefs={TABLE_HEADER}></TableElement>
                    </Card>
                  </>
                );
              }}
            </Await>
          </PageContainer>
        </ParentContainer>
      </Suspense>
    </div>
  );
};
