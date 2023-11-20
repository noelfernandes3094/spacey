import { useContext, useLayoutEffect, useRef } from "react";
import Image from "next/image";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./rocket-item.style.scss";
import { RocketContext } from "../../context/rocket.context.component";

gsap.registerPlugin( ScrollTrigger );

const RocketItem = ( { rocket } ) => {
    const { flickr_images, rocket_name, description } = rocket;
    const { isRocketPopOpen, setIsRocketPopOpen, viewRocket, setViewRocket } = useContext(RocketContext);
    const showPopUp = () => {
        setIsRocketPopOpen(!isRocketPopOpen);
        setViewRocket(rocket);
        document.querySelector('body').classList.toggle('stop');
    }
    return (
        <div className="rocket-card cursor-pointer shadow" onClick={ showPopUp }>
            <div className="image aspect relative">
                <Image className="object-cover" src={ flickr_images[1] } fill={true} alt={ rocket_name } />
            </div>
            <div className="content pt-4">
                <div className="title">{ rocket_name }</div>
                <div className="desc line-clamp-2 mt-2">{ description }</div>
            </div>
        </div>
    )
}

export default RocketItem;