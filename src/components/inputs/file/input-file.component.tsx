import { Button, Input } from '@nextui-org/react';
import { ImageIcon } from '~components/Icons/ImageIcon';
import { isSubmitting } from '~utils/helpers';

interface IInputFile {
  name: string;
  state: string;
  handleChange: (event: any) => void;
  handleUpload: () => void;
  value: any;
}

export const InputFile = ({ name, state, handleChange, value, handleUpload }: IInputFile) => {
  return (
    <>
      <Button color='success' onClick={handleUpload} endContent={<ImageIcon className='' />}>
        Take a photo
      </Button>
      <input type='file' name={name} accept='image/*' onChange={handleChange} />
    </>
  );
};
