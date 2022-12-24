import React from "react";
import { Link, useParams } from "react-router-dom";
import "../global.css";
import "../style.css";
import parrot from "../images/parrot.png";
import lessons from "../lessons";

function Lesson() {
  let { no } = useParams();
  console.log(parseInt(no, 10) + 5);
  return (
    <div className="bg-neutral-800">
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
      <div className="container padding-b-3 vh100 ">
        <div className="padding-x-3">
          <h1 className="ff-primary fs-800 text-neutral-100 padding-bt-3">
            Vocabulary
          </h1>
          <p className="ff-primary fs-500 text-neutral-100 lesson-paragraph">
            {lessons[no].content}
          </p>
        </div>
        <div className="navigator">
          {no > 0 ? (
            <Link
              to={"/lesson/" + (parseInt(no, 10) - 1)}
              className="navigator-button"
            >
              Previous Lesson
            </Link>
          ) : (
            <></>
          )}

          {no < lessons.length - 1 ? (
            <Link
              to={"/lesson/" + (parseInt(no, 10) + 1)}
              className="navigator-button"
            >
              Next Lesson
            </Link>
          ) : (
            <>
              <Link to="/questions" className="navigator-button">
                Exam
              </Link>
            </>
          )}
        </div>
      </div>
      <form action="" className="forum">
        <input
          name="forum"
          id="0"
          placeholder="Ders hakkında bir şeyler yaz."
        ></input>
        <button> Gönder</button>
      </form>
    </div>
  );
}

export default Lesson;