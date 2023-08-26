import { Card } from '@nextui-org/react';
import { Suspense } from 'react';
import { Await, useLoaderData, useNavigation } from 'react-router-dom';
import { LoadingElement } from '~components/app/loading/loading-element.component';
import { TableElement } from '~components/app/table/app-table.component';
import { TitlePage } from '~components/app/title-page/app-title-page.component';
import { AddButton } from '~components/buttons/add-button/app-add-button.component';
import { PageContainer } from '~components/containers/page-container.component';
import { ParentContainer } from '~components/containers/parent-container.component';
import { RequirementListDTO } from '~types/requirements/requirements-list-object';
import { ADD_REQUIREMENTS_ROUTE } from '../constants';
import { RequirementsErrorElement } from '../requirements-error.element';
import { REQUIREMENTS_TITLE, TABLE_HEADER } from './constants';

export const RequirementsListElement = () => {
  const data = useLoaderData() as {
    results: Awaited<RequirementListDTO>;
  };
  const navigation = useNavigation();

  console.log(data);

  return (
    <div data-testid='requirements-list-element'>
      <Suspense fallback={<LoadingElement />}>
        <ParentContainer>
          <PageContainer>
            <Await errorElement={<RequirementsErrorElement />} resolve={data.results}>
              {(requirements: RequirementListDTO) => {
                if (navigation.state === 'loading') return <LoadingElement />;

                return (
                  <>
                    <TitlePage
                      title={REQUIREMENTS_TITLE}
                      hasButton
                      Button={<AddButton route={ADD_REQUIREMENTS_ROUTE} />}
                    />
                    <Card>
                      <TableElement rowData={requirements} columnDefs={TABLE_HEADER} />
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
