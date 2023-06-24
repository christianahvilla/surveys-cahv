import { NotificationType } from '~types/notification/notification-object.type';
import { NOTIFICATION_TYPES } from './constants';

interface INotificationElement {
  title: string;
  information?: string;
  body: string;
  type: NotificationType;
}

export const NotificationElement = ({ title, information, body, type }: INotificationElement) => {
  return (
    <div
      className={`absolute m-12 right-12 ${NOTIFICATION_TYPES[type].mainClass}`}
      role='alert'
      aria-live='assertive'
      aria-atomic='true'
      data-te-autohide='false'
      data-te-toast-init
      data-te-toast-show
    >
      <div className={NOTIFICATION_TYPES[type].iconClass}>
        <p className={NOTIFICATION_TYPES[type].titleClass}>
          {NOTIFICATION_TYPES[type].icon}
          {title}
        </p>
        <div className='flex items-center'>
          <p className={NOTIFICATION_TYPES[type].informationClass}>{information}</p>
          <button
            type='button'
            className='ml-2 box-content rounded-none border-none opacity-80 hover:no-underline hover:opacity-75 focus:opacity-100 focus:shadow-none focus:outline-none'
            data-te-toast-dismiss
            aria-label='Close'
          >
            <span className='w-[1em] focus:opacity-100 disabled:pointer-events-none disabled:select-none disabled:opacity-25 [&.disabled]:pointer-events-none [&.disabled]:select-none [&.disabled]:opacity-25'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth={1.5}
                stroke='currentColor'
                className='w-6 h-6'
              >
                <path strokeLinecap='round' strokeLinejoin='round' d='M6 18L18 6M6 6l12 12' />
              </svg>
            </span>
          </button>
        </div>
      </div>
      <div className={NOTIFICATION_TYPES[type].bodyClass}>{body}</div>
    </div>
  );
};
