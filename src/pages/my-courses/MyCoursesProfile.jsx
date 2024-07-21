import Quiz from "@/components/my-courses/Quiz";
import { Button } from "@/components/ui/button";
import { questions } from "@/constants/quiz/questions";
import { useState } from "react";

const MyCoursesProfile = () => {
  const [showQuiz, setShowQuiz] = useState(false);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [timeCount, setTimeCount] = useState(new Date());
  const lengthOfQuestions = questions.length;
  const resultPercent = ((correctAnswers * 100) / lengthOfQuestions).toFixed(1);
  const timeSeconds = Math.floor(timeCount / 1000);

  const spentTime = `${Math.floor(timeSeconds / 60)}:${timeSeconds % 60}`;

  return showQuiz ? (
    <Quiz
      setCorrectAnswers={setCorrectAnswers}
      setShowQuiz={setShowQuiz}
      setTimeCount={setTimeCount}
    />
  ) : (
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
          <Button
            onClick={() => setShowQuiz(true)}
            className="base-semibold btn inline-flex-center text-light800_dark300 h-11 rounded-md px-8 transition-all duration-200 ease-in-out hover:bg-opacity-90 md:py-8"
          >
            <img
              alt={"ZapIcon"}
              loading="lazy"
              width="24"
              height="24"
              decoding="async"
              className="mr-2"
              srcSet="https://42.uz/_next/image?url=%2Fanimated%2FZapIcon-64.gif&w=32&q=75"
              src="https://42.uz/_next/image?url=%2Fanimated%2FZapIcon-64.gif&w=32&q=75"
            />
            Testni boshlash
          </Button>
        </div>
        <div>
          <hr
            aria-orientation="horizontal"
            className="lightest-border w-full "
          />
          <div className="grid grid-cols-1 gap-5 pt-6 md:grid-cols-3">
            <div className="lightest-border flex flex-col gap-2 border-r py-4">
              <h2 className="text-light500_dark600 base-semibold">
                Natijangiz
              </h2>
              <p className="text-light500_dark600 text-[30px] font-semibold">
                {correctAnswers ? `${resultPercent}%` : "-"}
              </p>
            </div>
            <div className="lightest-border flex flex-col gap-2 border-r py-4">
              <h2 className="text-light500_dark600 base-semibold">
                Sarflangan vaqt
              </h2>
              <p className="text-light500_dark600 text-[30px] font-semibold">
                {correctAnswers ? `${spentTime}` : "-"}
              </p>
            </div>
            <div className="flex flex-col gap-2 py-4">
              <h2 className="text-light500_dark600 base-semibold">
                To&apos;g&apos;ri javoblar soni
              </h2>
              <p className="text-light500_dark600 text-[30px] font-semibold">
                {correctAnswers}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MyCoursesProfile;
