import React from "react";
import parrot from "../images/parrot.png"
import QuestionItem from "./QuestionItem";
import questions from "../questions"


function createQuestion(question){
    return <QuestionItem key={question.key} id={question.key} q={question.q} ans={question.ans}/>
}


function Question(){
    return <div className="bg-neutral-800">
            <header className="primary-header flex align-items-center">
                <div className="primary-header flex">
                    <a href="/#" className="flex align-items-center justify-content-space-between">
                        <img src={parrot} alt="" width={50} height={50}/>
                        <h1 className="ff-header fs-750 gradient-text padding-left-1">Parrot</h1>
                    </a>
                </div>
            </header>
            {questions.map(createQuestion)}
    </div>
}

export default Question;



