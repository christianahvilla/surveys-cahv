import { Image } from '@nextui-org/react';
import { ChangeEvent, DragEvent } from 'react';
import { CloudIcon } from '~components/Icons/CloudIcon';
import { XIcon } from '~components/Icons/XIcon';
import { isSubmitting } from '~utils/helpers';

interface IInputFile {
  name: string;
  state: string;
  url: string | undefined;
  base64File: any;
  handleDrop: (event: DragEvent<HTMLDivElement>) => void;
  handleChange: (event: ChangeEvent<HTMLInputElement>) => void;
  handleDelete: () => void;
}

export const InputFile = ({
  name,
  state,
  handleChange,
  handleDelete,
  handleDrop,
  url,
  base64File,
}: IInputFile) => {
  return (
    <>
      <div className='relative flex items-center justify-center w-full' onDrop={handleDrop}>
        <XIcon
          className={`${!url ? 'hidden' : ''} absolute right-1 top-1 z-50 cursor-pointer`}
          handleClick={handleDelete}
        />
        <label
          htmlFor='dropzone-file'
          className='flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600'
        >
          <div
            className={`${
              url
                ? 'hidden flex-col items-center justify-center pt-5 pb-6'
                : 'flex flex-col items-center justify-center pt-5 pb-6'
            }`}
          >
            <CloudIcon />
            <p className='mb-2 text-sm text-gray-500 dark:text-gray-400'>
              <span className='font-semibold'>Click para subir</span> o arrastra y suelta
            </p>
            <p className='text-xs text-gray-500 dark:text-gray-400'>PNG o JPG</p>
          </div>

          {url && <Image className={`${!url ? 'hidden' : 'w-full h-64'}`} src={url} />}
          <input
            name={name}
            onChange={handleChange}
            disabled={isSubmitting(state)}
            type='file'
            key={url}
            id='dropzone-file'
            accept='image/jpeg, image/png'
            className='hidden'
          />
          <input
            name='base64File'
            value={base64File} // <-- set input's value
            hidden
            readOnly
          />
        </label>
      </div>
    </>
  );
};
