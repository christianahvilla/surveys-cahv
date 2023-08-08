import { Suspense } from 'react';
import { Await, Link, useLoaderData, useNavigation } from 'react-router-dom';
import { LoadingElement } from '~components/app/loading/loading-element.component';
import { TableElement } from '~components/app/table/app-table.component';
import { SurveyedListDataTransform } from '~types/surveyed/surveyed-list-object';
import { SurveyedListErrorElement } from './surveyed-list-error.element';
import { TABLE_HEADER } from './constants';

export const SurveyedListElement = () => {
  const data = useLoaderData() as { results: Awaited<SurveyedListDataTransform> };
  const navigation = useNavigation();

  return (
    <div data-testid='surveyed-list-element'>
      <Suspense fallback={<LoadingElement />}>
        <Await errorElement={<SurveyedListErrorElement />} resolve={data.results}>
          {(surveyed: SurveyedListDataTransform) => {
            if (navigation.state === 'loading')
              return (
                <div
                  className='min-h-screen w-full bg-gray-50 !pl-0 text-center sm:!pl-60'
                  id='content'
                >
                  <div className='p-12'>
                    <LoadingElement />
                  </div>
                </div>
              );

            return (
              <div
                className='min-h-screen w-full bg-gray-50 !pl-0 text-center sm:!pl-60'
                id='content'
              >
                <div className='p-12'>
                  <div className='flex flex-row justify-between'>
                    <h3 className='my-6 text-[1.75rem] font-medium leading-[1.2] flex justify-self-start text-gray-500'>
                      Encuestdos
                    </h3>
                  </div>
                  <div className='rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700'>
                    <TableElement rowData={surveyed} columnDefs={TABLE_HEADER} />
                  </div>
                </div>
              </div>
            );
          }}
        </Await>
      </Suspense>
    </div>
  );
};
