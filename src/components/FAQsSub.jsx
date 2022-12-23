import React from "react";


function handleClick(index){
    const questions = document.querySelectorAll(".question");
    const answers = document.querySelectorAll(".answer");
    const icons = document.querySelectorAll(".icon");
    console.log(questions[index - 1]);
    const visible = questions[index - 1].getAttribute("aria-expanded");
    if (visible === "false"){
        answers[index - 1].classList.add("show");
        questions[index - 1].setAttribute("aria-expanded", true);
        icons[index - 1].classList.remove("fa-plus");
        icons[index - 1].classList.add("fa-minus");
    }
    else if (visible === "true"){
        answers[index - 1].classList.remove("show");
        questions[index - 1].setAttribute("aria-expanded", false);
        icons[index - 1].classList.remove("fa-minus");
        icons[index - 1].classList.add("fa-plus");

    }
}

function FAQComponent(props){
    return <div className="faq-component">
        <div onClick={() => handleClick(props.id)} className="question padding-b-1 flex align-items-center justify-content-space-between" aria-expanded="false"
        aria-controls="a">
            <h1 className="fs-500 ff-primary">{props.q}</h1>
            <i className="icon fa-solid fa-plus"></i>
        </div>
        <div className="answer">
            <p className="ff-primary fs-400 text-muted-light fw-thin">
                {props.ans}
            </p>
        </div>
    </div>
}

export default FAQComponent;