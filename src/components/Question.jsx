import React, { useState } from "react";
import parrot from "../images/parrot.png";
import QuestionItem from "./QuestionItem";

import { useEffect } from "react";
import axios from "axios";

function createQuestion(question, questionNo) {
  return (
    <QuestionItem
      key={question.id}
      id={questionNo}
      q={question.questionContent}
      ans1={question.answer1}
      ans2={question.answer2}
      ans3={question.answer3}
      ans4={question.answer4}
      correctAns={question.correctAnswer}
    />
  );
}

function checkResult(correctAnswers) {
  console.log(correctAnswers);

  const buttons = document.getElementsByTagName("button");
  console.log(buttons);
  const userAnswers = new Array(correctAnswers.length).fill(-1);
  let x = 0;
  for (let i = 0; i < buttons.length - 1; i++) {
    if (buttons[i].getAttribute("class") === "selected-color") {
      userAnswers[Math.floor(i / 4)] = i % 4;
      x += 1;
    }
  }
  for (let i = 0; i < correctAnswers.length; i++) {
    buttons[i * 4 + correctAnswers[i]].setAttribute("class", "correct-answer");
  }
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].setAttribute("disabled", true);
  }
  let res = 0;
  console.log(userAnswers);
  for (let i = 0; i < correctAnswers.length; i++) {
    if (correctAnswers[i] === userAnswers[i]) {
      res += 1;
    }
  }
  let grade = "Your grade: " + res * 10 + "/100";
  console.log(grade);
  if (res >= 6) {
    document.getElementById("grade").innerHTML =
      grade + ". Congrats. You can go the next lesson.";
  } else {
    document.getElementById("grade").innerHTML =
      grade + ". You failed. You can try again after 1 day.";
  }

  axios.post(
    `https://localhost:7093/api/Exam/api/Exam/DoneExam?userIdParam=6&examIdParam=1&gradeParam=${
      res * 10
    }`
  );
  return res * 10;
}

function Question() {
  const [exam, setExam] = useState([]);
  const [correctAnswers, setCorrectAnswer] = useState([]);
  const [grade, setGrade] = useState(-1);
  useEffect(() => {
    axios
      .get(
        "https://localhost:7093/api/Exam/api/Exam/GetList?userIdParam=6&examIdParam=1"
      )
      .then(function (response) {
        console.log(response.data);
        setExam(response.data);
      })
      .catch(function (error) {
        // handle error

        console.log(error);
      });
  }, []);
  useEffect(() => {
    if (exam[1]) {
      var answers = [];
      exam.map((question) => {
        console.log(parseInt(question.correctAnswer));
        answers.push(parseInt(question.correctAnswer));
      });
      setCorrectAnswer(answers);
    }
  }, [exam]);

  return (
    <div className="bg-neutral-800 relative">
      <header className="primary-header flex align-items-center">
        <div className="primary-header flex">
          <a
            href="/#"
            className="flex align-items-center justify-content-space-between"
          >
            <img src={parrot} alt="" width={50} height={50} />
            <h1 className="ff-header fs-750 gradient-text padding-left-1">
              Parrot
            </h1>
          </a>
        </div>
      </header>
      {console.log(exam)}
      {exam ? (
        <>
          {exam.map((question) =>
            createQuestion(question, exam.indexOf(question))
          )}
          <img
            className="personal-tutor"
            src={parrot}
            alt=""
            width={100}
            height={100}
          />
          <div className="flex justify-content-center">
            <button
              onClick={() => setGrade(checkResult(correctAnswers))}
              className="finish-test-btn ff-primary text-netral-100 fs-600"
            >
              Submit Test
            </button>
            {grade > -1 ? (
              <>
                {grade > 60 ? (
                  <a
                    href="/lesson2/0"
                    className="finish-test-btn ff-primary text-netral-100 fs-600"
                  >
                    Next Lesson
                  </a>
                ) : (
                  <></>
                )}
              </>
            ) : (
              <></>
            )}
          </div>
          <div className="flex justify-content-center padding-bt-3">
            <p id="grade" className="ff-primary fs-600 text-neutral-100"></p>
          </div>
        </>
      ) : (
        <>
          <div>
            <p className="text-neutral-100 ff-primary fs-900 text-align-center padding-x-3 vh100 flex align-items-center">
              Sınav hakkınız bulunmamaktadır. 24 saat sonra tekrar deneyiniz.
            </p>
          </div>
        </>
      )}
    </div>
  );
}

export default Question;
