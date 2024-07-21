import Button from "@/components/shared/button/Button";

const MyCoursesProfile = () => {
  return (
    <section className="background-light700_dark500 rounded-lg p-6 shadow-md md:p-12">
      <div className="">
        <div>
          <ol
            className="list-inside grid-cols-1 gap-3 gap-x-9 gap-y-4 md:grid-cols-2 lg:flex lg:gap-y-0"
            role="list"
          >
            <li className="paragraph-medium text-dark200_light800 flex items-center gap-4">
              Express backend
              <span>
                <svg
                  viewBox="0 0 24 24"
                  focusable="false"
                  width={24}
                  height={24}
                >
                  <path
                    fill="currentColor"
                    d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"
                  ></path>
                </svg>
              </span>
            </li>
            <li className="paragraph-regular text-dark200_light800 flex items-center gap-4">
              Python asoslari
              <span>
                <svg
                  viewBox="0 0 24 24"
                  focusable="false"
                  width={24}
                  height={24}
                >
                  <path
                    fill="currentColor"
                    d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"
                  ></path>
                </svg>
              </span>
            </li>
            <li className="paragraph-regular text-dark200_light800 flex items-center">
              Python asoslari boʻyicha test
            </li>
          </ol>
        </div>
        <div className="my-8 flex items-center justify-between">
          <div className="flex flex-col space-y-4">
            <h3 className="h3-semibold-24 text-dark200_light800">
              Python asoslari boʻyicha test
            </h3>
            <ul className="list-inside list-disc grid-cols-1 gap-3 gap-x-9 gap-y-4 md:grid-cols-2 lg:flex lg:gap-y-0">
              <li className="text-dark200_light800">Darajasi:</li>
              <li className="text-dark200_light800">Bajarish vaqti:</li>
              <li className="text-dark200_light800">
                O&apos;zlashtirilgan ball:
              </li>
            </ul>
          </div>
          <Button>Testni boshlash</Button>
        </div>
        <div>
          <hr
            aria-orientation="horizontal"
            className="lightest-border w-full "
          />
          <div className="grid grid-cols-1 gap-5 pt-6 md:grid-cols-3">
            <div className="lightest-border flex flex-col gap-2 border-r py-4">
              <h2>Natijangiz</h2>
              <p className="text-[30px]">-</p>
            </div>
            <div className="lightest-border flex flex-col gap-2 border-r py-4">
              <h2>Sarflangan vaqt</h2>
              <p className="text-[30px]">-</p>
            </div>
            <div className="flex flex-col gap-2 py-4">
              <h2>O&apos;zlashtirilgan vaqt</h2>
              <p className="text-[30px]">0</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MyCoursesProfile;
