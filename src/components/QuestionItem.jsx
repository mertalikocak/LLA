import React from "react";


function QuestionItem(props){
    return <div className="container bg-neutral-800 padding-b-3">
        <div className="q">
            <div className="flex padding-bt-2">
                <h1 className="ff-primary fs-600 text-neutral-100">{props.id}. </h1>
                <h1 className="ff-primary fs-600 text-neutral-100 padding-left-1">{props.q}</h1>
            </div>
            <div className="padding-left-2">
                <div className="ans">
                    <h1 className="ff-primary fs-600 text-neutral-100">a.{props.ans[0]} </h1>
                </div>
                
                <h1 className="ff-primary fs-600 text-neutral-100">a.{props.ans[1]} </h1>
            </div>

        </div>
    </div>
}

export default QuestionItem;