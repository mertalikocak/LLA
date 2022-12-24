import React from "react";

function QuestionItem(props){


    function changeBorderColor(index){
        //const buttons = document.getElementsByTagName("button");
        const buttons = document.getElementsByTagName("button");
        console.log(buttons[index]);
        const remaining = index % 4;
        if (buttons[index].getAttribute("class") === "default-color"){
            if (remaining === 0){
                buttons[index+1].setAttribute("class", "default-color");
                buttons[index+2].setAttribute("class", "default-color");
                buttons[index+3].setAttribute("class", "default-color");
            }
            else if (remaining === 1){
                buttons[index-1].setAttribute("class", "default-color");
                buttons[index+1].setAttribute("class", "default-color");
                buttons[index+2].setAttribute("class", "default-color");
            }
            else if (remaining === 2){
                buttons[index-2].setAttribute("class", "default-color");
                buttons[index-1].setAttribute("class", "default-color");
                buttons[index+1].setAttribute("class", "default-color");
            }
            else if (remaining === 3){
                buttons[index-3].setAttribute("class", "default-color");
                buttons[index-2].setAttribute("class", "default-color");
                buttons[index-1].setAttribute("class", "default-color");
            }
            buttons[index].setAttribute("class", "selected-color");
            console.log("default");
        }
        else if (buttons[index].getAttribute("class") === "selected-color"){
            buttons[index].setAttribute("class", "default-color");
            console.log("not-default");
        }
        console.log(index);
        
    }

    return <div className="container bg-neutral-800 padding-b-3">
        <div className="q">
            <div className="flex padding-bt-2">
                <h1 className="ff-primary fs-600 text-neutral-100">{props.id+1}. </h1>
                <h1 className="ff-primary fs-600 text-neutral-100 padding-left-1">{props.q}</h1>
            </div>
            <div className="">

                <button className="default-color" onClick={() => changeBorderColor(props.id*4)}>{props.ans[0]}</button>
                <button className="default-color" onClick={() => changeBorderColor(props.id*4 + 1)}>{props.ans[1]}</button>
                <button className="default-color" onClick={() => changeBorderColor(props.id*4 + 2)}>{props.ans[2]}</button>
                <button className="default-color" onClick={() => changeBorderColor(props.id*4 + 3)}>{props.ans[3]}</button>
            </div>

        </div>
    </div>
}

export default QuestionItem;