import { Key, ReactNode } from 'react';
import { IDropdownOptions } from '~components/inputs/dropdown/types';
import { SELECT_ELEMENT, SUBMITTING } from '../constants';

export const isSubmitting = (state: string) => state === SUBMITTING;

export const displayContentButton = (state: string, text: string): ReactNode => {
  return isSubmitting(state) ? (
    <>
      <span className='loading loading-spinner'></span>
    </>
  ) : (
    <>{text}</>
  );
};

export const getDropdownValue = (filterKey: Key, options: Array<IDropdownOptions>) => {
  if (!options.length) {
    return SELECT_ELEMENT;
  }
  return options.filter(({ key }) => key === filterKey)[0];
};

export const openNewTab = (url: string) => window.open(url, '_blank');

export const setupApp = () => {
  window.addEventListener(
    'dragover',
    function (e) {
      e = e || event;
      e.preventDefault();
    },
    false,
  );
  window.addEventListener(
    'drop',
    function (e) {
      e = e || event;
      e.preventDefault();
    },
    false,
  );
};

export const fileToBase64 = (file: File): Promise<string | ArrayBuffer | null> => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onload = () => {
      const base64 = reader.result;
      resolve(base64);
    };

    reader.onerror = (error) => {
      reject(error);
    };
  });
};

// Helper function to create a data URL from Base64 data.
export const createDataUrl = (base64Data: string) => {
  console.log(`data:image/png;base64,${base64Data}`);
  return `data:image/svg+xml;base64,,${base64Data}`;
};
