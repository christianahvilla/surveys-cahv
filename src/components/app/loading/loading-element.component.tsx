export const LoadingElement = () => {
  return (
    <div data-testid='loading-element' className='h-full'>
      <section className='gradient-form h-full bg-neutral-200 dark:bg-neutral-700'>
        <span className='loading loading-spinner text-primary'></span>
        <span className='loading loading-spinner text-secondary'></span>
        <span className='loading loading-spinner text-accent'></span>
        <span className='loading loading-spinner text-neutral'></span>
        <span className='loading loading-spinner text-info'></span>
        <span className='loading loading-spinner text-success'></span>
        <span className='loading loading-spinner text-warning'></span>
        <span className='loading loading-spinner text-error'></span>
      </section>
    </div>
  );
};
