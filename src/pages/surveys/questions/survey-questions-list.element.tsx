import { Card } from '@nextui-org/react';
import { Suspense } from 'react';
import { Await, useLoaderData, useNavigation } from 'react-router-dom';
import { LoadingElement } from '~components/app/loading/loading-element.component';
import { TableElement } from '~components/app/table/app-table.component';
import { TitleAction } from '~components/app/title-actions/app-title-page.component';
import { PageContainer } from '~components/containers/page-container.component';
import { ParentContainer } from '~components/containers/parent-container.component';
import { QuestionDTO } from '~types/questions/questions-list-object';
import { LIST_SURVEYS_ROUTE } from '../constants';
import { QUESTIONS_TITLE, TABLE_HEADER } from './constants';
import { SurveyQuestionsListErrorElement } from './survey-questions-list-error.element';

export const SurveyQuestionsListElement = () => {
  const data = useLoaderData() as { results: Awaited<QuestionDTO> };
  const navigation = useNavigation();

  return (
    <div data-testid='question-list-element'>
      <Suspense fallback={<LoadingElement />}>
        <ParentContainer>
          <PageContainer>
            <Await errorElement={<SurveyQuestionsListErrorElement />} resolve={data.results}>
              {(questions: Array<QuestionDTO>) => {
                if (navigation.state === 'loading') return <LoadingElement />;
                return (
                  <>
                    <TitleAction title={QUESTIONS_TITLE} route={LIST_SURVEYS_ROUTE} />
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
