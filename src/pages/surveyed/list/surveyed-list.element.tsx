import { Suspense } from 'react';
import { Await, Link, useLoaderData, useNavigation } from 'react-router-dom';
import { LoadingElement } from '~components/app/loading/loading-element.component';
import { TableElement } from '~components/app/table/app-table.component';
import { SurveyedListDTO } from '~types/surveyed/surveyed-list-object';
import { SurveyedListErrorElement } from './surveyed-list-error.element';
import { SURVEYEDS_TITLE, TABLE_HEADER } from './constants';
import { TitlePage } from '~components/app/title-page/app-title-page.component';
import { ParentContainer } from '~components/containers/parent-container.component';
import { PageContainer } from '~components/containers/page-container.component';
import { SurveyedErrorElement } from '../surveyed-error.element';
import { ADD_SURVEYED_ROUTE } from '../constants';
import { AddButton } from '~components/buttons/add-button/app-add-button.component';
import { Card } from '@nextui-org/react';

export const SurveyedListElement = () => {
  const data = useLoaderData() as { results: Awaited<SurveyedListDTO> };
  const navigation = useNavigation();

  return (
    <div data-testid='surveyed-list-element'>
      <Suspense fallback={<LoadingElement />}>
        <ParentContainer>
          <PageContainer>
            <Await errorElement={<SurveyedErrorElement />} resolve={data.results}>
              {(surveyeds: Array<SurveyedListDTO>) => {
                if (navigation.state === 'loading') return <LoadingElement />;

                return (
                  <>
                    <TitlePage
                      title={SURVEYEDS_TITLE}
                      Button={<AddButton route={ADD_SURVEYED_ROUTE} />}
                      hasButton
                    />
                    <Card>
                      <TableElement rowData={surveyeds} columnDefs={TABLE_HEADER} />
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
