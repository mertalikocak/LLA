import React from "react";

function FooterItem(props){
    return <div>
        <h1 className="ff-primary fs-500 padding-bt-2">{props.heading}</h1>
        <ul className="ff-primary fs-300 fw-thin text-muted-light">
            <li className="footer-item"><a className="text-neutral-100" href="/#">{props.f1}</a></li>
            <li className="footer-item"><a className="text-neutral-100" href="/#">{props.f2}</a></li>
            <li className="footer-item"><a className="text-neutral-100" href="/#">{props.f3}</a></li>
            <li className="footer-item"><a className="text-neutral-100" href="/#">{props.f4}</a></li>
        </ul>
    </div>
}

export default FooterItem;