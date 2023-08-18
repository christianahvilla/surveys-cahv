import { Card, Image, Input } from '@nextui-org/react';
import { useEffect, useState, useRef, ChangeEvent } from 'react';
import { Navigate, useFetcher } from 'react-router-dom';
import useNotification from 'src/hooks/useNotification';
import { TitleAction } from '~components/app/title-actions/app-title-page.component';
import { FormButtons } from '~components/buttons/form-buttons/form-buttons.component';
import { PageContainer } from '~components/containers/page-container.component';
import { ParentContainer } from '~components/containers/parent-container.component';
import { InputFile } from '~components/inputs/file/input-file.component';
import { ApiMethods } from '~types/api/api-methods-object.type';
import { ApiError, ApiSuccess } from '~types/api/api-responses.object.type';
import { AVAILABLE_ERRORS, IAvailableErrors } from '~types/error/error-object.type';
import {
  NOTIFICATION_SUCCESS,
  NotificationType,
} from '~types/notification/notification-object.type';
import { isSubmitting } from '~utils/helpers';
import { ADD_OPTIONS_ROUTE, LIST_OPTIONS_ROUTE } from '../constants';
import { ADD_OPTION_TITLE } from './constants';

export const OptionsCreateElement = () => {
  const fetcher = useFetcher();
  const [file, setFile] = useState<any>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);

  const handleUploadClick = () => {
    // 👇 We redirect the click event onto the hidden input element
    inputRef.current?.click();
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) {
      return;
    }

    setFile(e.target.files[0]);

    console.log(e.target.files[0]);

    // 🚩 do the file upload here normally...
  };
  // const [role, setRole] = useState(getDropdownValue('admin', USER_DROPDOWN_OPTIONS));

  // const handleSelect = (key: Key) => setRole(getDropdownValue(key, USER_DROPDOWN_OPTIONS));

  const { addNotification } = useNotification();

  const { state, data, Form } = fetcher;
  const { error, statusCode, message } = (data || {}) as ApiError;
  const { success } = (data || {}) as ApiSuccess;

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

    return <Navigate to='/options/list' />;
  }

  return (
    <div data-testid='create-user-element'>
      <ParentContainer>
        <PageContainer>
          <TitleAction title={ADD_OPTION_TITLE} route={LIST_OPTIONS_ROUTE} />
          <Form method={ApiMethods.POST} action={ADD_OPTIONS_ROUTE}>
            <Card className='p-6'>
              <div className='space-y-12'>
                <div className='pb-4'>
                  <div className='mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-3'>
                    <div className='sm:col-span-1 '>
                      <Input
                        className='w-full'
                        variant='bordered'
                        type='text'
                        isDisabled={isSubmitting(state)}
                        name='name'
                        label='Nombre'
                        isRequired
                      />
                    </div>
                    <div className='sm:col-span-1'>
                      <Input
                        className='w-full'
                        type='text'
                        variant='bordered'
                        isDisabled={isSubmitting(state)}
                        name='text'
                        label='Texto'
                        isRequired
                      />
                    </div>
                    <div className='sm:col-span-1'>
                      <Input name='questionId' value='e6818659-68be-4636-85ff-af00a963ba4c' />
                      {/* <InputDropdown
                        handleSelect={handleSelect}
                        value={role}
                        name='roles'
                        options={USER_DROPDOWN_OPTIONS}
                      /> */}
                    </div>
                  </div>
                </div>
                <div className='border-b border-gray-900/10 pb-12'>
                  <div className='mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-3'>
                    <div className='sm:col-span-1'>
                      <InputFile
                        state={state}
                        name='img'
                        value={file}
                        handleChange={handleFileChange}
                        handleUpload={handleUploadClick}
                      />
                      <Image
                        width={300}
                        alt='NextUI hero Image'
                        src='https://nextui-docs-v2.vercel.app/images/hero-card-complete.jpeg'
                      />
                    </div>
                  </div>
                </div>
              </div>

              <FormButtons state={state} backRoute={LIST_OPTIONS_ROUTE} />
            </Card>
          </Form>
        </PageContainer>
      </ParentContainer>
    </div>
  );
};
