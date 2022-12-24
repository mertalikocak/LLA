import React from "react";
import PricingListItem from "./PricingListItem";


function Pricing(props){
    const type = props.type;
    return <div className="pricingCard" aria-details={props.bg}>
        <div className="card-head padding-bt-2">
            <h1 className="ff-primary fs-500 padding-bt-1 text-muted-light">{props.type}</h1>
            <h1 className="ff-primary padding-bt-1 fs-400"><span className="fs-800 fw-bolder">{props.price}₺</span> /month</h1>
            <p className="ff-primary fs-300 text-muted-light">The perfect way to get started and use our app.</p>
        </div>
        <div className="divider" style={{backgroundColor: type==="standard" ? "white" : "black"}}></div>
        <div className="card-body padding-bt-1">
            <PricingListItem text="Lifetime access"/>
            <PricingListItem text="Award winning method"/>
            <PricingListItem text="Unlimited online sessions"/>
            {
                (props.type === "Basic") && <PricingListItem text="3 languages"/>
            }
            {
                (props.type === "Basic") && <PricingListItem text="Budget friendly"/>
            }
            {
                (props.type === "Standard" || props.type === "Premium") && <PricingListItem text="Access to all languages"/>
            }
            {
                (props.type === "Standard") && <PricingListItem text="Native certified coaches"/>
            }
            {
                (props.type === "Premium") && <PricingListItem text="Get help from native speakers"/>
            }
        </div>
        <div>
            <a className="pricingCard-btn ff-primary"
             style={{backgroundColor: type==="Standard" ? "white" : "black", color: type==="Standard" ? "black" : "white"}}
             href="/#">Get Started
             </a>
        </div>
    </div>
}

export default Pricing;