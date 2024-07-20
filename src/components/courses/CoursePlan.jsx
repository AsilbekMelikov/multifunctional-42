const CoursePlan = () => {
  return (
    <section id="courseInfo">
      <div>
        <h1 className="h3-semibold text-dark200_light800 mb-8">
          Kurs qanday tartibda o&apos;tiladi?
        </h1>
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-9">
          <div className="flex flex-col space-y-5 sm:flex-row sm:space-x-4 sm:space-y-0">
            <svg
              height="1em"
              viewBox="0 0 28 28"
              width="1em"
              className="text-light500_dark600 size-7 shrink-0"
              data-icon="video"
            >
              <symbol id="ai:local:video">
                <path
                  d="M17.185 2.332h-6.37v5.087h6.37V2.332Zm1.75 0v5.087h6.58c-.595-3.209-2.964-5.075-6.58-5.087ZM2.333 9.172v9.718c0 4.247 2.532 6.779 6.778 6.779h9.777c4.247 0 6.778-2.532 6.778-6.779V9.172H2.333Zm14.513 9.706-2.426 1.4c-.514.292-1.015.444-1.482.444a1.92 1.92 0 0 1-.957-.245c-.676-.385-1.05-1.178-1.05-2.205v-2.8c0-1.027.374-1.82 1.05-2.205.677-.397 1.54-.327 2.439.198l2.426 1.4c.899.514 1.389 1.237 1.389 2.019 0 .781-.502 1.47-1.389 1.994ZM9.065 2.332C5.45 2.344 3.08 4.21 2.485 7.419h6.58V2.332Z"
                  fill="currentColor"
                ></path>
              </symbol>
              <use xlinkHref="#ai:local:video"></use>
            </svg>
            <div>
              <h2 className="h3-semibold-24 text-light500_dark600 mb-2.5">
                Videodarslar
              </h2>
              <p className="paragraph-medium text-dark200_light800">
                Darslar video shaklda platformaga joylangan bo&apos;lib, ularni
                xohlagan payt, istalgan joyda ko&apos;rishingiz mumkin.
                Videodarslar yangilanib boriladi.
              </p>
            </div>
          </div>
          <div className="flex flex-col space-y-5 sm:flex-row sm:space-x-4 sm:space-y-0">
            <svg
              height="1em"
              viewBox="0 0 28 28"
              width="1em"
              data-icon="task-list"
              className="text-light500_dark600 size-7 shrink-0"
            >
              <symbol id="ai:local:task-list">
                <path
                  d="M18.888 2.332H9.111c-4.246 0-6.778 2.532-6.778 6.778v9.777c0 4.247 2.532 6.778 6.778 6.778h9.777c4.247 0 6.778-2.531 6.778-6.778V9.11c0-4.246-2.531-6.778-6.778-6.778Zm-7.257 15.05-2.625 2.625a.865.865 0 0 1-.618.257.846.846 0 0 1-.618-.257l-.875-.875a.86.86 0 0 1 0-1.237.88.88 0 0 1 1.236 0l.257.257 2.007-2.007a.88.88 0 0 1 1.236 0 .88.88 0 0 1 0 1.237Zm0-8.167L9.006 11.84a.865.865 0 0 1-.618.257.846.846 0 0 1-.618-.257l-.875-.875a.86.86 0 0 1 0-1.236.88.88 0 0 1 1.236 0l.257.256 2.007-2.006a.88.88 0 0 1 1.236 0 .88.88 0 0 1 0 1.236Zm8.855 10.174h-6.125a.881.881 0 0 1-.875-.875c0-.479.397-.875.875-.875h6.125a.874.874 0 1 1 0 1.75Zm0-8.167h-6.125a.881.881 0 0 1-.875-.875c0-.478.397-.875.875-.875h6.125c.49 0 .875.397.875.875a.874.874 0 0 1-.875.875Z"
                  fill="currentColor"
                ></path>
              </symbol>
              <use xlinkHref="#ai:local:task-list"></use>
            </svg>
            <div>
              <h2 className="h3-semibold-24 text-light500_dark600 mb-2.5">
                Vazifalar
              </h2>
              <p className="paragraph-medium text-dark200_light800">
                Modul oxirida test topshiriqlari berilgan. Testdan
                muvaffaqiyatli o&apos;tgan o&apos;quvchilargina keyingi
                moduldagi darslarga kirish imkoniga ega bo&apos;ladi.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoursePlan;
