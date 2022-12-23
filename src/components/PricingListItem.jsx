import React from "react";



function PricingListItem(props){
    return <div className="">
        <div className="flex padding-bt-1">
            <i className="fa-solid fa-check"></i>
            <h1 className="ff-primary fs-300 text-muted">{props.text}</h1>
        </div>
        
    </div>
}

export default PricingListItem;