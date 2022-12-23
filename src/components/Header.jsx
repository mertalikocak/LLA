import React from "react";
import parrot from '../images/parrot.png';
// import parrotReading from "../images/parrot-reading.png";


function Header(){
    return <div>
        <header className="primary-header flex align-items-center">
            <div className="primary-header flex">
                <a href="/#" className="flex align-items-center justify-content-space-between">
                    <img src={parrot} alt="" width={50} height={50}/>
                    <h1 className="ff-header fs-750 gradient-text padding-left-1">Parrot</h1>
                </a>
            </div>
            <button className="mobile-nav-toggle" aria-controls="primary-nav" aria-expanded="false"></button>
            <div className="navbar-wrapper flex">
                <nav className="flex nav">
                    <ul data-visible="false" className="flex primary-nav align-items-center justify-content-center">
                        <li className="nav-list-item"><a href="/#" className="ff-nav fs-400 text-neutral-100 text-muted">Home</a></li>
                        <li className="nav-list-item"><a href="/#hiw" className="ff-nav fs-400 text-neutral-100 text-muted">How it works</a></li>
                        <li className="nav-list-item"><a href="/#faq" className="ff-nav fs-400 text-neutral-100 text-muted">FAQs</a></li>
                        <li className="nav-list-item"><a href="/#pricingSection" className="ff-nav fs-400 text-neutral-100 text-muted">Pricing</a></li>
                        
                    </ul>
                    <ul className="flex align-items-center primary-nav justify-content-end">
                        <li className="nav-list-item"><a className="ff-nav fs-400 text-neutral-800 text-muted a-btn-inverted" href="/#">Login</a></li>
                        <li className="nav-list-item"><a className="ff-nav fs-400 text-neutral-800 a-btn" href="/#">Sign up</a></li>
                    </ul>
                </nav>
            </div>

        </header>
    </div>
}

export default Header;