import { BackButton } from '../../buttons/back-button/app-back-button.component';

interface ITitleAction {
  title: string;
  route: string;
}

export const TitleAction = ({ title, route }: ITitleAction) => {
  return (
    <div className='flex flex-row  flex-nowrap'>
      <BackButton route={route} />
      <h3 className='my-6 text-[1.75rem] font-medium leading-[1.2] flex justify-self-start text-gray-500'>
        {title}
      </h3>
    </div>
  );
};
