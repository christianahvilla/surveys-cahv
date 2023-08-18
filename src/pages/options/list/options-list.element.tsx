import { Await, useLoaderData, useNavigation } from 'react-router-dom';
import { TableElement } from '~components/app/table/app-table.component';
import { OPTIONS_TITLE, TABLE_HEADER } from './constants';
import { Suspense } from 'react';
import { LoadingElement } from '~components/app/loading/loading-element.component';
import { UsersListErrorElement } from './options-list-error.element';
import { ParentContainer } from '~components/containers/parent-container.component';
import { Card } from '@nextui-org/react';
import { PageContainer } from '~components/containers/page-container.component';
import { TitlePage } from '~components/app/title-page/app-title-page.component';
import { AddButton } from '~components/buttons/add-button/app-add-button.component';
import { IOptionsListDTO } from '~types/options/options-list-object';
import { ADD_OPTIONS_ROUTE } from '../constants';

export const UsersListElement = () => {
  const data = useLoaderData() as {
    results: Awaited<IOptionsListDTO>;
  };

  const navigation = useNavigation();

  return (
    <div data-testid='users-list-element'>
      <Suspense fallback={<LoadingElement />}>
        <ParentContainer>
          <PageContainer>
            <Await errorElement={<UsersListErrorElement />} resolve={data.results}>
              {(options: Array<IOptionsListDTO>) => {
                if (navigation.state === 'loading') return <LoadingElement />;

                return (
                  <>
                    <TitlePage
                      title={OPTIONS_TITLE}
                      Button={<AddButton route={ADD_OPTIONS_ROUTE} />}
                      hasButton
                    />
                    <Card>
                      <TableElement rowData={options} columnDefs={TABLE_HEADER} />
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
