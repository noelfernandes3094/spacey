import { useContext } from "react";
import Image from "next/image";
import { RocketContext } from "../../context/rocket.context.component";
import Close from "../../../../public/close.svg?react";
import "./rocket-popup.style.scss";

const RocketPopup = () => {
    const { viewRocket, isRocketPopOpen, setIsRocketPopOpen } = useContext(RocketContext);
    const closePop = () => {
        setIsRocketPopOpen(!isRocketPopOpen);
        document.querySelector('body').classList.toggle('stop');
    }

    const { active, company, cost_per_launch, country, description, diameter, flickr_images, rocket_type, rocket_name } = viewRocket;
    return (

        <div className="rocket-details-pop fixed flex items-center overflow-y-auto">
            <div className="container">
            <div className="wrapper grid grid-cols-1 md:grid-cols-2 gap-7 bg-slate-50 m-auto relative">
                <div className="close absolute cursor-pointer" onClick={ closePop }>{<Close/>}</div>
                <div className="col-left">
                    <div className="rocket-image">
                        <Image src={ flickr_images[1] } width={300} height={300} sizes="100vw" style={{
                            width: '100%',
                            height: 'auto',
                            }} alt={ rocket_name } 
                        />
                    </div>
                    <h4 className="mt-4">{ rocket_name }</h4>
                </div>
                <div className="col-right rocket-details">
                    <ul>
                        <li className="mb-3">
                            <div className="content">{ description }</div>
                        </li>
                        <li className="mb-3">
                            <label className="font-medium">Company:</label> { company }
                        </li>
                        <li className="mb-3">
                            <label className="font-medium">Country:</label> { country }
                        </li>
                        <li className="mb-3">
                            <label className="font-medium">Status:</label> { active ? 'Active' : 'Inactive' }
                        </li>
                    </ul>
                </div>
            </div>
            </div>
        </div>
    )
}

export default RocketPopup;