import { Card } from '@nextui-org/react';
import { Suspense } from 'react';
import { Await, useLoaderData, useNavigation } from 'react-router-dom';
import { LoadingElement } from '~components/app/loading/loading-element.component';
import { TableElement } from '~components/app/table/app-table.component';
import { TitlePage } from '~components/app/title-page/app-title-page.component';
import { AddButton } from '~components/buttons/add-button/app-add-button.component';
import { PageContainer } from '~components/containers/page-container.component';
import { ParentContainer } from '~components/containers/parent-container.component';
import { ADD_QUESTION_ROUTE } from '../constants';
import { QUESTIONS_TITLE, TABLE_HEADER } from './constants';
import { QuestionsListErrorElement } from './questions-list-error.element';
import { QuestionDTO } from '~types/questions/questions-list-object';

export const QuestionsListElement = () => {
  const data = useLoaderData() as { results: Awaited<QuestionDTO> };
  const navigation = useNavigation();

  return (
    <div data-testid='question-list-element'>
      <Suspense fallback={<LoadingElement />}>
        <ParentContainer>
          <PageContainer>
            <Await errorElement={<QuestionsListErrorElement />} resolve={data.results}>
              {(questions: Array<QuestionDTO>) => {
                if (navigation.state === 'loading') return <LoadingElement />;
                return (
                  <>
                    <TitlePage
                      title={QUESTIONS_TITLE}
                      Button={<AddButton route={ADD_QUESTION_ROUTE} />}
                      hasButton
                    />
                    <Card>
                      <TableElement rowData={questions} columnDefs={TABLE_HEADER} />
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
