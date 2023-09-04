import { Card, Input } from '@nextui-org/react';
import { Key, Suspense, useEffect, useState } from 'react';
import { Await, Navigate, useFetcher, useLoaderData, useNavigation } from 'react-router-dom';
import useNotification from 'src/hooks/useNotification';
import { LoadingElement } from '~components/app/loading/loading-element.component';
import { TitleAction } from '~components/app/title-actions/app-title-page.component';
import { FormButtons } from '~components/buttons/form-buttons/form-buttons.component';
import { PageContainer } from '~components/containers/page-container.component';
import { ParentContainer } from '~components/containers/parent-container.component';
import { InputDropdown } from '~components/inputs/dropdown/input-dropdown.component';
import { ApiMethods } from '~types/api/api-methods-object.type';
import { ApiError, ApiSuccess } from '~types/api/api-responses.object.type';
import { AVAILABLE_ERRORS, IAvailableErrors } from '~types/error/error-object.type';
import {
  NOTIFICATION_SUCCESS,
  NotificationType,
} from '~types/notification/notification-object.type';
import { getDropdownValue, isSubmitting } from '~utils/helpers';
import { SELECT_ELEMENT } from '../../../constants';
import { ADD_POINT_ROUTE, LIST_POINT_ROUTE } from '../constants';
import { ADD_POINT_TITLE } from './constants';
import { ToursCreateErrorElement } from './points-create-error.element';
import { ICreatePointLoader } from './types';
import { ISurveySelectDTO } from '~types/selects/survey-object.type';
import { ITourSelectDTO } from '~types/selects/tours-object.type';
import { ICords } from '~components/app/google-map/types';
import GoogleMapComponent from '~components/app/google-map/google-map.component';

export const ToursCreateElement = () => {
  const results = useLoaderData() as Awaited<ICreatePointLoader>;
  const { surveys, tours } = results;
  const navigation = useNavigation();
  const fetcher = useFetcher();

  const [tour, setTour] = useState<ITourSelectDTO>(SELECT_ELEMENT);
  const [survey, setSurvey] = useState<ISurveySelectDTO>(SELECT_ELEMENT);
  const [selectedLocation, setSelectedLocation] = useState<ICords>({
    lat: 0,
    lng: 0,
  });

  console.log(selectedLocation);

  const { addNotification } = useNotification();

  const { state, data, Form } = fetcher;
  const { error, statusCode, message } = (data || {}) as ApiError;
  const { success } = (data || {}) as ApiSuccess;

  const handleSelectTour = (key: Key) => setTour(getDropdownValue(key, tours || []));
  const handleSelectSurvey = (key: Key) => setSurvey(getDropdownValue(key, surveys || []));
  const handleLocationSelect = (location: ICords) => {
    setSelectedLocation(location);
  };

  useEffect(() => {
    if (error && state !== 'submitting') {
      addNotification({
        title: AVAILABLE_ERRORS[statusCode as keyof IAvailableErrors].title,
        body: message,
        type: AVAILABLE_ERRORS[statusCode as keyof IAvailableErrors]
          .type as unknown as NotificationType.ERROR,
      });
    }
  }, [addNotification, error, message, state, statusCode]);

  if (success && state !== 'submitting') {
    addNotification(NOTIFICATION_SUCCESS);
    return <Navigate to='/tours/list' />;
  }

  return (
    <div data-testid='create-tours-element'>
      <ParentContainer>
        <PageContainer>
          <Suspense fallback={<LoadingElement />}>
            <Await errorElement={<ToursCreateErrorElement />} resolve={results}>
              {({ surveys, tours } = results) => {
                if (navigation.state === 'loading') return <LoadingElement />;
                return (
                  <>
                    <TitleAction title={ADD_POINT_TITLE} route={LIST_POINT_ROUTE} />
                    <Form method={ApiMethods.POST} action={ADD_POINT_ROUTE}>
                      <Card className='p-6'>
                        <div className='space-y-12'>
                          <div className='pb-4'>
                            <div className='mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-2'>
                              <div className='sm:col-span-1'>
                                <InputDropdown
                                  handleSelect={handleSelectSurvey}
                                  value={survey}
                                  defaultValue={SELECT_ELEMENT}
                                  name='surveyId'
                                  options={surveys}
                                />
                              </div>
                              <div className='sm:col-span-1'>
                                <InputDropdown
                                  handleSelect={handleSelectTour}
                                  value={tour}
                                  defaultValue={SELECT_ELEMENT}
                                  name='tourId'
                                  options={tours}
                                />
                              </div>
                            </div>
                          </div>
                          <div className='pb-4'>
                            <div className='mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-2'>
                              <div className='sm:col-span-1'>
                                <Input
                                  className='w-full'
                                  variant='bordered'
                                  type='address'
                                  isDisabled={isSubmitting(state)}
                                  name='street'
                                  label='Calle'
                                  isRequired
                                />
                              </div>
                              <div className='sm:col-span-1'>
                                <Input
                                  className='w-full'
                                  variant='bordered'
                                  type='number'
                                  isDisabled={isSubmitting(state)}
                                  name='number'
                                  label='Número'
                                  isRequired
                                />
                              </div>
                            </div>
                          </div>
                          <div className='pb-4'>
                            <div className='mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-2'>
                              <div className='sm:col-span-1'>
                                <Input
                                  className='w-full'
                                  variant='bordered'
                                  isDisabled={isSubmitting(state)}
                                  readOnly
                                  value={String(selectedLocation.lat)}
                                  name='latitude'
                                  label='Latitud'
                                  isRequired
                                />
                              </div>
                              <div className='sm:col-span-1'>
                                <Input
                                  className='w-full'
                                  variant='bordered'
                                  isDisabled={isSubmitting(state)}
                                  readOnly
                                  value={String(selectedLocation.lng)}
                                  name='longitude'
                                  label='Logintud'
                                  isRequired
                                />
                              </div>
                            </div>
                            <div className='col-span-3 flex border-b border-gray-900/10 pb-12'>
                              <div className='mt-10 w-full'>
                                <GoogleMapComponent onLocationSelect={handleLocationSelect} />
                              </div>
                            </div>
                          </div>
                        </div>
                        <FormButtons state={state} backRoute={LIST_POINT_ROUTE} />
                      </Card>
                    </Form>
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
