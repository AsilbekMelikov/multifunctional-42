import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Button } from "../ui/button";
import { questions } from "@/constants/quiz/questions";
import { useState } from "react";

const Quiz = ({ setCorrectAnswers, setShowQuiz, setTimeCount }) => {
  const [questionNumber, setQuestionNumber] = useState(0);
  const [userResponse, setUserResponse] = useState("");
  const [addClassName, setAddClassName] = useState("");
  const [correctResponse, setCorrectResponse] = useState("");
  const [showNextButton, setShowNextButton] = useState(false);
  const [disableRadios, setDisableRadios] = useState(false);

  const questionOrder = questions.slice(questionNumber, questionNumber + 1);

  const lengthOfQuestions = questions.length;
  const successArray = new Array(lengthOfQuestions).fill("lengthOfQuestions");

  const [successNumbers, setSuccessNumbers] = useState(successArray);

  return (
    <section className="background-light700_dark500 rounded-lg p-6 shadow-md md:p-12">
      <div className="block w-full">
        <div
          role="tablist"
          aria-orientation="horizontal"
          className="flex w-full items-center justify-start gap-1.5 border-none"
        >
          {successNumbers.map((item, index) => {
            return (
              <div
                key={index}
                className={`h-2 w-full rounded-lg ${item === "true" ? "bg-primary-success" : item === "false" ? "bg-primary-danger" : questionNumber === index ? "bg-primary-100" : "bg-light-500"}`}
              ></div>
            );
          })}
        </div>
      </div>
      <div className="mt-9">
        <button
          onClick={() => {
            setQuestionNumber((prev) => prev - 1);
            setDisableRadios(true);
            setShowNextButton(true);
          }}
          className={`inline-flex h-12 min-w-12 select-none items-center justify-center rounded-lg px-6 font-medium text-primary-100 transition-all duration-200 ease-in-out hover:bg-light-600`}
          disabled={questionNumber === 0}
        >
          <span className="mr-2 inline-flex shrink-0 self-center">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              focusable="false"
            >
              <path
                d="M15 19.9201L8.47997 13.4001C7.70997 12.6301 7.70997 11.3701 8.47997 10.6001L15 4.08008"
                stroke="#3F9CFB"
                strokeWidth="2.5"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
            </svg>
          </span>
          Oldingisiga qaytish
        </button>
      </div>

      <div className="mx-auto mt-14 max-w-[80%] pb-6 text-center">
        {questionOrder.map((item) => {
          return (
            <>
              <div
                key={item.question}
                className="mb-4 flex items-center justify-between"
              >
                <p className="paragraph-medium-16 text-primary-100">
                  Savol <span>{item.numb}</span>/
                  <span>{lengthOfQuestions}</span>
                </p>
              </div>
              <div className="mb-6 flex justify-start">
                <p className="h3-semibold-24 text-dark200_light800 text-center">
                  {item.question}
                </p>
              </div>
              <p className="text-light500_dark600 mb-3 text-start">
                * Bitta variant tanlashingiz mumkin
              </p>
              <div className="">
                <RadioGroup>
                  {item.options.map((option, index) => {
                    return (
                      <Label
                        key={index}
                        className={`paragraph-medium-16 flex w-full items-center space-x-2 rounded-lg p-5 text-white ${option === correctResponse && addClassName ? addClassName : option === userResponse ? "bg-primary-200" : "bg-dark-300"}`}
                        htmlFor={`option-${index + 1}`}
                      >
                        <RadioGroupItem
                          value={option}
                          onClick={(e) => setUserResponse(e.target.value)}
                          id={`option-${index + 1}`}
                          disabled={disableRadios}
                        />
                        <div>{option}</div>
                      </Label>
                    );
                  })}
                </RadioGroup>
              </div>

              {showNextButton ? (
                <Button
                  onClick={() => {
                    if (item.numb === lengthOfQuestions) {
                      setShowQuiz(false);
                      setTimeCount((prev) => {
                        return new Date() - prev;
                      });
                    }
                    setShowNextButton(false);
                    setQuestionNumber((prev) => prev + 1);
                    setDisableRadios(false);
                  }}
                  className="base-semibold btn inline-flex-center text-light800_dark300 mt-10 h-11 rounded-md px-8 transition-all duration-200 ease-in-out hover:bg-opacity-90 md:py-8"
                >
                  {item.numb === lengthOfQuestions
                    ? "Testni tugatish"
                    : "Keyingi savol"}
                </Button>
              ) : (
                <Button
                  disabled={userResponse === ""}
                  onClick={() => {
                    if (userResponse === item.answer) {
                      setCorrectAnswers((prev) => prev + 1);
                      setSuccessNumbers((prev) => {
                        prev[item.numb - 1] = "true";
                        return prev;
                      });
                      setAddClassName("bg-primary-success");
                    } else {
                      setSuccessNumbers((prev) => {
                        prev[item.numb - 1] = "false";
                        return prev;
                      });
                      setAddClassName("bg-primary-danger");
                    }

                    setDisableRadios(true);
                    setShowNextButton(true);
                    setCorrectResponse(userResponse);
                    setUserResponse("");
                  }}
                  className="base-semibold btn inline-flex-center text-light800_dark300 mt-10 h-11 rounded-md px-8 transition-all duration-200 ease-in-out hover:bg-opacity-90 md:py-8"
                >
                  Tekshirish
                </Button>
              )}
            </>
          );
        })}
      </div>
    </section>
  );
};

export default Quiz;
