import { CommonErrorPageElement } from '~components/app/common-error-page/common-error-page.element';
import { NotFoundError } from './constants';

export const ErrorElement = () => {
  return (
    <div data-testid='error-element'>
      <CommonErrorPageElement
        message={NotFoundError.message}
        status={Number(NotFoundError.status)}
        title={NotFoundError.title}
      />
    </div>
  );
};
