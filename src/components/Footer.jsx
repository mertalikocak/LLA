import React from "react";
import FooterItem from "./FooterItem";

const date = new Date().getFullYear();

function Footer(){
    return <div id="footer-section">
        <div className="container">
            <div className="row padding-bt-2">
                <div className="col col-lg-3">
                    <FooterItem heading="Parrot" f1="Who are we ?" f2="Contact Us" f3="Privacy Agreement" f4="Parrot for Students"/>
                </div>
                <div className="col col-lg-3">
                    <FooterItem heading="Buy Now" f1="English" f2="German" f3="French" f4="Spanish"/>
                </div>
                <div className="col col-lg-3">
                    <FooterItem heading="Learn" f1="Learn English" f2="Learn German" f3="Learn French" f4="Learn Spanish"/>
                </div>
                <div className="col col-lg-3">
                    <FooterItem heading="How to Start ?" f1="Try it Free" f2="Magazine" f3="Support Site" f4="See All"/>
                </div>
            </div>
            <h1 className="ff-primary fs-400 text-align-center text-muted-light fw-thin">Copyright © {date} Parrot. All Rights Reserved</h1>
        </div>
    </div>
}

export default Footer;