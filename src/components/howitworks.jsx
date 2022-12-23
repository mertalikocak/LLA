import React from "react";
import signup from "../images/signup.jpg";
import langs from "../images/langs.jpg";
import start from "../images/start.jpg";
import HIWstep from "./hiwStep";

function HIW(){
    return <div className="hiw-section" id="hiw">
        <div className="container padding-b-3">
            <div className="flex justify-content-center padding-bt-3">
                <h1 className="ff-primary fs-900 text-neutral-800">How It Works ?</h1>
            </div>
            <div className="row justify-content-center">
                <ul className="flex numbered-items">
                    <li className="col col-lg-4">
                        <HIWstep img={signup} text="Create your account."/>
                        
                    </li>
                    <li className="col col-lg-4">
                        <HIWstep img={langs} text="Choose the language you want to learn."/>
                    </li>
                    <li className="col col-lg-4">
                        <HIWstep img={start} text="Start learning."/>
                    </li>
                </ul>
            </div>
                
        </div>
    </div>
}

export default HIW;