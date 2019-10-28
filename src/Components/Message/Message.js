import React from "react"
import {Slide} from "react-slideshow-image"






export const Message=()=>{

const proprietes={
        duration: 6000,
    transitionDuration:500,
    infinite:true,
    indicators:true,
    arrows:true,
}


    return (
        <div className="SlideWrapper">
<Slide  {...proprietes}>


    <div className="slide1">
        <h5>slide1</h5>
    </div>
    <div className="slide1">
        <h5>slide2</h5>
    </div>

    <div className="slide1">
        <h5>
            slide3
        </h5>
    </div>


</Slide>
       </div>
    );
}