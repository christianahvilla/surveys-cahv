import { CommonErrorPageElement } from '~components/app/common-error-page/common-error-page.element';
import { ServerError } from './constants';

export const ErrorElement = () => {
  return (
    <div data-testid='error-element'>
      <CommonErrorPageElement
        message={ServerError.message}
        status={Number(ServerError.status)}
        title={ServerError.title}
      />
    </div>
  );
};
