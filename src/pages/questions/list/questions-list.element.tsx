import { Link } from 'react-router-dom';
import { useGetQuestions } from 'src/hooks/useGetQuestions';
import { LoadingElement } from '~components/app/loading/loading-element.component';
import { TableElement } from '~components/app/table/app-table.component';
import { TABLE_HEADER } from './constants';
import { QuestionDTO } from '~types/questions/questions-list-object';
import { ErrorType } from '~types/error/error-object.type';

export const QuestionsListElement = () => {
  const { isLoading, error, questions } = useGetQuestions() as {
    questions: QuestionDTO;
    isLoading: boolean;
    error: ErrorType | null;
  };

  if (error) {
    throw error;
  }

  return (
    <div data-testid='questions-element'>
      {isLoading ? (
        <div className='min-h-screen w-full bg-gray-50 !pl-0 text-center sm:!pl-60' id='content'>
          <div className='p-12'>
            <LoadingElement />
          </div>
        </div>
      ) : (
        <div className='min-h-screen w-full bg-gray-50 !pl-0 text-center sm:!pl-60' id='content'>
          <div className='p-12'>
            <div className='flex flex-row justify-between'>
              <h3 className='my-6 text-[1.75rem] font-medium leading-[1.2] flex justify-self-start text-gray-500'>
                Preguntas
              </h3>
              <Link className='flex' to='/questions/create' replace>
                <button className='self-center h-fit rounded-md bg-indigo-600 px-3 py-2 text-lg font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'>
                  Agregar
                </button>
              </Link>
            </div>
            <div className='rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700'>
              <TableElement columnDefs={TABLE_HEADER} rowData={questions} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
