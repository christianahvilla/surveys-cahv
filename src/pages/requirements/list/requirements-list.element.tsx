import { Suspense } from 'react';
import { Await, Link, useLoaderData, useNavigation } from 'react-router-dom';
import { LoadingElement } from '~components/app/loading/loading-element.component';
import { TableElement } from '~components/app/table/app-table.component';
import { TABLE_HEADER } from './constants';
import { RequirementsErrorElement } from '../requirements-error.element';
import { RequirementListDTO } from '~types/requirements/requirements-list-object';

export const RequirementsListElement = () => {
  const data = useLoaderData() as {
    results: Awaited<RequirementListDTO>;
  };
  const navigation = useNavigation();

  return (
    <div data-testid='requirements-list-element'>
      <Suspense fallback={<LoadingElement />}>
        <Await errorElement={<RequirementsErrorElement />} resolve={data.results}>
          {(requirements: RequirementListDTO) => {
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
                      Requisitos
                    </h3>
                    <Link className='flex' to='/requirements/create' replace>
                      <button className='self-center h-fit rounded-md bg-indigo-600 px-3 py-2 text-lg font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'>
                        Agregar
                      </button>
                    </Link>
                  </div>
                  <div className='rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700'>
                    <TableElement rowData={requirements} columnDefs={TABLE_HEADER} />
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