import React from "react";
import parrotreading from '../images/parrot-reading.png';
import { Link } from "react-router-dom";


function TopSection(){
    return <div className="top-section"> 
    <div className="container padding-b-3">
        <div className="row">
            <div className="col-lg-6 padding-b-3">
                <div className="">
                <div className="word">
                    <span className="gradient-text">Hello.</span>
                    <span className="gradient-text">Hallo.</span>
                    <span className="gradient-text">Merhaba.</span>
                    <span className="gradient-text">Bonjour.</span>
                    <span className="gradient-text">Hola.</span>
                    <span className="gradient-text">你好.</span>
                </div>
                    <h1 className="ff-primary fs-900 text-neutral-100 padding-bt-2">Learn new <span className="gradient-text">languages</span> intuitively without translations.</h1>
                    <p className="ff-primary fs-600 text-neutral-100 padding-bt-3 text-muted">Lifetime access to 24 languages for 199₺.</p>
                    <div className="padding-bt-3 flex align-items-center">
                        {/*<a className="ff-primary fs-500 text-neutral-800 cta-btn" href="/">GetStarted</a>*/}
                        <Link className="ff-primary fs-500 text-neutral-800 cta-btn" to="skills">Get Started</Link>
                        
                    </div>
                
                </div>
                {/* <div className="circle"></div> */}
            </div>
            <div className="col-lg-6 justify-content-center align-items-center flex">
                
                <img src={parrotreading} alt="" width={400} height={509}/>
            </div>

        </div>
    </div>
    </div>
}

export default TopSection;