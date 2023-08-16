interface ITitlePage {
  title: string;
  hasButton: boolean;
  Button?: JSX.Element;
}

export const TitlePage = ({ title, hasButton, Button }: ITitlePage) => {
  return (
    <div className='flex flex-row justify-between'>
      <h3 className='my-6 text-[1.75rem] font-medium leading-[1.2] flex justify-self-start text-gray-500'>
        {title}
      </h3>
      {hasButton && Button}
    </div>
  );
};
