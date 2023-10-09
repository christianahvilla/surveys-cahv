export const LoadingElement = () => {
  return (
    <div data-testid='loading-element' className='h-full'>
      <section className='gradient-form h-full flex justify-center'>
        <span className='loading loading-spinner text-primary h-full w-40'></span>
      </section>
    </div>
  );
};
