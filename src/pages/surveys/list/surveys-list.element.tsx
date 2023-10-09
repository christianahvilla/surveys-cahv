import { Suspense } from 'react';
import { Await, useLoaderData, useNavigation } from 'react-router-dom';
import { LoadingElement } from '~components/app/loading/loading-element.component';
import { TableElement } from '~components/app/table/app-table.component';
import { SURVEYS_TITLE, TABLE_HEADER } from './constants';
import { SurveyListDTO } from '~types/surveys/surveys-list-object';
import { SurveysListErrorElement } from './surveys-list-error.element';
import { PageContainer } from '~components/containers/page-container.component';
import { ParentContainer } from '~components/containers/parent-container.component';
import { TitlePage } from '~components/app/title-page/app-title-page.component';
import { Card } from '@nextui-org/react';
import { AddButton } from '~components/buttons/add-button/app-add-button.component';
import { ADD_SURVEYS_ROUTE } from '../constants';

export const SurveysListElement = () => {
  const data = useLoaderData() as {
    results: Awaited<SurveyListDTO>;
  };
  const navigation = useNavigation();

  return (
    <div data-testid='surveys-list-element'>
      <Suspense fallback={<LoadingElement />}>
        <ParentContainer>
          <PageContainer>
            <Await errorElement={<SurveysListErrorElement />} resolve={data.results}>
              {(surveys: SurveyListDTO) => {
                if (navigation.state === 'loading') return <LoadingElement />;

                return (
                  <>
                    <TitlePage
                      title={SURVEYS_TITLE}
                      Button={<AddButton route={ADD_SURVEYS_ROUTE} />}
                      hasButton
                    />
                    <Card>
                      <TableElement rowData={surveys} columnDefs={TABLE_HEADER} />
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
