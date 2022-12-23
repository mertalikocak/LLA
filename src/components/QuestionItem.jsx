import React from "react";


function QuestionItem(props){
    return <div className="container bg-neutral-800 padding-b-3">
        <div className="q">
            <div className="flex padding-bt-2">
                <h1 className="ff-primary fs-600 text-neutral-100">{props.id}. </h1>
                <h1 className="ff-primary fs-600 text-neutral-100 padding-left-1">{props.q}</h1>
            </div>
            <div className="padding-left-2">

                <button className="ff-primary bg-neutral-800 fs-600 text-neutral-100 btn-ans">{props.ans[0]}</button>
                <button className="ff-primary bg-neutral-800 fs-600 text-neutral-100 btn-ans">{props.ans[1]}</button>
                <button className="ff-primary bg-neutral-800 fs-600 text-neutral-100 btn-ans">{props.ans[2]}</button>
                <button className="ff-primary bg-neutral-800 fs-600 text-neutral-100 btn-ans">{props.ans[3]}</button>
            </div>

        </div>
    </div>
}

export default QuestionItem;