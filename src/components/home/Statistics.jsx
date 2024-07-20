const Statistics = () => {
  const statisticsData = [
    {
      label: "O'rtacha jamoaviy tajriba",
      data: '+5 yil',
    },
    {
      label: "Umumiy o'quvchilar soni",
      data: '+6,379',
    },
    {
      label: 'Yozilgan darslar soni',
      data: '+272',
    },
  ];

  return (
    <section id='statistics'>
      <div className='mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center'>
        <h2 className='h2-semibold text-dark200_light800'>Shu kunga qadar</h2>
        <p className='text-light500_dark600 paragraph-medium-18'>
          Bizning maqsadimiz - o&apos;quvchilarni IT sohasida professional
          mutaxassislar bo&apos;lishiga yordam berish.
        </p>
      </div>
      <dl className='mt-8 grid grid-cols-1 gap-5 sm:grid-cols-3'>
        {statisticsData.map((statistic) => {
          return (
            <div
              key={statistic.data}
              className='background-light700_dark500 flex cursor-default flex-col gap-4 rounded-lg px-4  py-5 transition-all duration-200 hover:shadow-md'
            >
              <dt className='text-dark200_light800 paragraph-medium truncate'>
                {statistic.label}
              </dt>
              <dd className='h3-semibold text-dark200_light800 mt-1'>
                {statistic.data}
              </dd>
            </div>
          );
        })}
      </dl>
    </section>
  );
};

export default Statistics;
