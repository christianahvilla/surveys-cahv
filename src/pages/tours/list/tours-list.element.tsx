import { Card } from '@nextui-org/react';
import { Suspense } from 'react';
import { Await, useLoaderData, useNavigation } from 'react-router-dom';
import { LoadingElement } from '~components/app/loading/loading-element.component';
import { TableElement } from '~components/app/table/app-table.component';
import { PageContainer } from '~components/containers/page-container.component';
import { ParentContainer } from '~components/containers/parent-container.component';
import { ToursListDataTransform } from '~types/tours/tours-list-object';
import { TitlePage } from '~components/app/title-page/app-title-page.component';
import { AddButton } from '~components/buttons/add-button/app-add-button.component';
import { ADD_TOUR_ROUTE } from '../constants';
import { TABLE_HEADER, TOURS_TITLE } from './constants';
import { ToursListErrorElement } from './tours-list-error.element';

export const ToursListElement = () => {
  const data = useLoaderData() as {
    results: Awaited<ToursListDataTransform>;
  };
  const navigation = useNavigation();

  return (
    <div data-testid='tours-list-element'>
      <Suspense fallback={<LoadingElement />}>
        <ParentContainer>
          <PageContainer>
            <Await errorElement={<ToursListErrorElement />} resolve={data.results}>
              {(users: Array<ToursListDataTransform>) => {
                if (navigation.state === 'loading') return <LoadingElement />;

                return (
                  <>
                    <TitlePage
                      title={TOURS_TITLE}
                      Button={<AddButton route={ADD_TOUR_ROUTE} />}
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
