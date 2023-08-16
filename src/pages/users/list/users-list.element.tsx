import { Await, useLoaderData, useNavigation } from 'react-router-dom';
import { TableElement } from '~components/app/table/app-table.component';
import { TABLE_HEADER, USERS_TITLE } from './constants';
import { IUsersList } from '~types/users/users-list-object';
import { Suspense } from 'react';
import { LoadingElement } from '~components/app/loading/loading-element.component';
import { UsersListErrorElement } from './users-list-error.element';
import { ParentContainer } from '~components/containers/parent-container.component';
import { Card } from '@nextui-org/react';
import { PageContainer } from '~components/containers/page-container.component';
import { TitlePage } from '~components/app/title-page/app-title-page.component';
import { ADD_USER_ROUTE } from '../constants';
import { AddButton } from '~components/buttons/add-button/app-add-button.component';

export const UsersListElement = () => {
  const data = useLoaderData() as {
    results: Awaited<IUsersList>;
  };

  const navigation = useNavigation();

  return (
    <div data-testid='users-list-element'>
      <Suspense fallback={<LoadingElement />}>
        <ParentContainer>
          <PageContainer>
            <Await errorElement={<UsersListErrorElement />} resolve={data.results}>
              {(users: Array<IUsersList>) => {
                if (navigation.state === 'loading') return <LoadingElement />;

                return (
                  <>
                    <TitlePage
                      title={USERS_TITLE}
                      Button={<AddButton route={ADD_USER_ROUTE} />}
                      hasButton
                    />
                    <Card>
                      <TableElement rowData={users} columnDefs={TABLE_HEADER} />
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
