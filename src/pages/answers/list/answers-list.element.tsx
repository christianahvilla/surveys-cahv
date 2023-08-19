import { Await, useLoaderData, useNavigation } from 'react-router-dom';
import { TableElement } from '~components/app/table/app-table.component';
import { TABLE_HEADER, ANSWERS_TITLE } from './constants';
import { Suspense } from 'react';
import { LoadingElement } from '~components/app/loading/loading-element.component';
import { ParentContainer } from '~components/containers/parent-container.component';
import { Card } from '@nextui-org/react';
import { PageContainer } from '~components/containers/page-container.component';
import { TitlePage } from '~components/app/title-page/app-title-page.component';
import { AnswersErrorElement } from '../answers-error.element';
import { AnswerListDTO } from '~types/answers/answers-list-object';

export const AnswersListElement = () => {
  const results = useLoaderData() as {
    answers: Awaited<AnswerListDTO>;
  };

  console.log('aqui entra');

  const navigation = useNavigation();

  return (
    <div data-testid='answers-list-element'>
      <ParentContainer>
        <PageContainer>
          <Suspense fallback={<LoadingElement />}>
            <Await errorElement={<AnswersErrorElement />} resolve={results.answers}>
              {(answers: AnswerListDTO) => {
                if (navigation.state === 'loading') return <LoadingElement />;

                return (
                  <>
                    <TitlePage title={ANSWERS_TITLE} hasButton={false} />
                    <Card>
                      <TableElement rowData={answers} columnDefs={TABLE_HEADER} />
                    </Card>
                  </>
                );
              }}
            </Await>
          </Suspense>
        </PageContainer>
      </ParentContainer>
    </div>
  );
};
