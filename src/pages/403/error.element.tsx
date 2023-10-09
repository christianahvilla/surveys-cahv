import { CommonErrorPageElement } from '~components/app/common-error-page/common-error-page.element';
import { NotAuthorizedError } from './constants';

export const ErrorElement = () => {
  return (
    <div data-testid='error-element'>
      <CommonErrorPageElement
        message={NotAuthorizedError.message}
        status={Number(NotAuthorizedError.status)}
        title={NotAuthorizedError.title}
      />
    </div>
  );
};
