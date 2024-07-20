import Button from '../shared/button/Button';

const MainContent = () => {
  return (
    /* Main Section  */
    <section className='background-light700_dark500 flex min-h-64 flex-col items-center justify-between gap-4 rounded-md p-6 pb-0 shadow-sm md:flex-row md:items-end md:p-12 md:pb-0'>
      <div className='flex w-full flex-col gap-4 pb-12'>
        <h1 className='h1-bold text-dark200_light800'>
          <span className='block sm:inline-block'>42 kunda</span>
          <span className='underline sm:mx-2'>backend</span>
          <br />
          dasturlashni o&apos;rganing
        </h1>
        <p className='paragraph-medium-18 text-dark200_light800 max-w-[512px]'>
          ⚡️42 kun o&apos;z ustingizda ishlang va kelajagingiz sari yo&apos;l
          toping!
        </p>
        <div className='flex flex-col items-start gap-2 md:flex-row'>
          <Button navigation={'/courses'} alt={'ZapIcon'}>
            Ishtirok etish
          </Button>
        </div>
      </div>
      <img
        src='https://42.uz/home/hey.svg'
        alt='Team'
        decoding='async'
        loading='lazy'
        width={620}
        height={200}
        className='w-full md:w-2/5'
      />
    </section>
    /* /Main Section  */
  );
};

export default MainContent;
