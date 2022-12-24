import React from "react";
import Pricing from "./Pricing";

function PricingSection(){
    return <div id="pricingSection">
        <div className="container padding-x-0">
            <h1 className="ff-primary fs-900 text-neutral-900 text-align-center padding-bt-3">Pricing</h1>
            <div className="row">
                <div className="col col-lg-4">
                    <Pricing price="29" type="Basic"/>
                </div>
                <div className="col col-lg-4">
                    <Pricing price="49" type="Standard" bg="dark"/>
                </div>
                <div className="col col-lg-4">
                    <Pricing price="79" type="Premium"/>
                </div>
            </div>
        </div>
    </div>
}

export default PricingSection;