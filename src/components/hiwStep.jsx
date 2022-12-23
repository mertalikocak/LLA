import React from "react";

function HIWstep(props){
    return <div className="flex col">
        <div className="flex justify-content-center padding-bt-2">
            <img className="img" src={props.img} alt="" width={150} height={150}/>
        </div>
        <div>
            <h1 className="ff-primary fs-700 text-neutral-800 text-align-center">{props.text}</h1>
        </div>

</div>
}

export default HIWstep;