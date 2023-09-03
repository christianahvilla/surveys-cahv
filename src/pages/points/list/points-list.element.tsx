import { Card } from '@nextui-org/react';
import { Suspense } from 'react';
import { Await, useLoaderData, useNavigation } from 'react-router-dom';
import { LoadingElement } from '~components/app/loading/loading-element.component';
import { TableElement } from '~components/app/table/app-table.component';
import { PageContainer } from '~components/containers/page-container.component';
import { ParentContainer } from '~components/containers/parent-container.component';
import { TitlePage } from '~components/app/title-page/app-title-page.component';
import { AddButton } from '~components/buttons/add-button/app-add-button.component';
import { ADD_POINT_ROUTE } from '../constants';
import { TABLE_HEADER, POINTS_TITLE } from './constants';
import { PointsListErrorElement } from './points-list-error.element';
import { PointsListDTO } from '~types/points/points-list-object';

export const PointsListElement = () => {
  const data = useLoaderData() as {
    results: Awaited<PointsListDTO>;
  };
  const navigation = useNavigation();

  return (
    <div data-testid='points-list-element'>
      <Suspense fallback={<LoadingElement />}>
        <ParentContainer>
          <PageContainer>
            <Await errorElement={<PointsListErrorElement />} resolve={data.results}>
              {(points: PointsListDTO) => {
                if (navigation.state === 'loading') return <LoadingElement />;

                return (
                  <>
                    <TitlePage
                      title={POINTS_TITLE}
                      Button={<AddButton route={ADD_POINT_ROUTE} />}
                      hasButton
                    />
                    <Card>
                      <TableElement rowData={points} columnDefs={TABLE_HEADER} />
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
