import React from "react";

function Subscription(){
    return <div className="">
        <div className="container subs-wrapper">
            <div className="subs justify-content-center">
                <h1 className="ff-primary fs-700 text-align-center padding-bt-3">
                    Subscribe to our newsletter so you don't miss out on opportunities.
                </h1>
                <div className="input-wrapper flex justify-content-space-between">
                    <input className="ff-primary text-muted-light fs-600 fw-thin" type="email" placeholder="your_gmail@gmail.com"/>
                    <button className="subs-btn ff-primary fs-500">
                        Subscribe
                    </button>
                </div>
                <div className="socials flex justify-content-center">
                    <i class="fa-brands fa-whatsapp social-icon"></i>
                    <i class="fa-brands fa-facebook social-icon"></i>
                    <i class="fa-brands fa-instagram social-icon"></i>
                    <i class="fa-brands fa-twitter social-icon"></i>
                </div>
            </div>
        </div>
        
    </div>
}

export default Subscription;