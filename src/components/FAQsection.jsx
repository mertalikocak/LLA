import React from "react";
import FAQComponent from "./FAQsSub";
import notes from "../notes";


function createFAQ(note){
    return <FAQComponent key={note.key} id={note.key} q={note.q} ans={note.ans} />
}

function FAQ(){
    return <div className="faq" id="faq">
        <div className="container">
            <h1 className="ff-primary fs-900 text-neutral-100 text-align-center padding-bt-3">FAQs</h1>
            {notes.map(createFAQ)}           
        </div>
    </div>
}

export default FAQ;