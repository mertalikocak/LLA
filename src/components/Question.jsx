import React from "react";
import parrot from "../images/parrot.png";
import QuestionItem from "./QuestionItem";
import questions from "../questions";


function createQuestion(question){
    return <QuestionItem key={question.key} id={question.key} q={question.q} ans={question.ans}/>
}

function checkResult(){
    const correctAnswers = [];
    questions.forEach(q => {
        correctAnswers.push(q.correct)
    });
    console.log(correctAnswers);
    const buttons = document.getElementsByTagName("button");
    const userAnswers = new Array(correctAnswers.length).fill(-1);
    let x = 0;
    for (let i = 0; i < buttons.length - 1; i++){
        if (buttons[i].getAttribute("class") === "selected-color"){
            userAnswers[x] = i%4;
            x += 1;
        }
    }
    for (let i = 0; i < correctAnswers.length; i++){
        buttons[i*4 + correctAnswers[i]].setAttribute("class", "correct-answer")
    }
    for (let i = 0; i < buttons.length; i++){
        buttons[i].setAttribute("disabled", true);
    }
    console.log(userAnswers);
    let res = 0;
    for (let i = 0; i < correctAnswers.length; i++){
        if (correctAnswers[i] === userAnswers[i]){
            res += 1;
        }
    }
    let grade ="Your grade: " + res*10 + "/100";
    document.getElementById("grade").innerHTML = grade; 
    
}

function Question(){

    return <div className="bg-neutral-800 relative">
            <header className="primary-header flex align-items-center">
                <div className="primary-header flex">
                    <a href="/#" className="flex align-items-center justify-content-space-between">
                        <img src={parrot} alt="" width={50} height={50}/>
                        <h1 className="ff-header fs-750 gradient-text padding-left-1">Parrot</h1>
                    </a>
                </div>
            </header>
            {questions.map(createQuestion)}
            <img className="personal-tutor" src={parrot} alt="" width={100} height={100}/>
            <div className="flex justify-content-center">
                <button onClick={checkResult} className="finish-test-btn ff-primary text-netral-100 fs-600">Submit Test</button>
            </div>
            <div className="flex justify-content-center padding-bt-3">
                <p id="grade" className="ff-primary fs-600 text-neutral-100"></p>
            </div>
            

            
    </div>
}

export default Question;



