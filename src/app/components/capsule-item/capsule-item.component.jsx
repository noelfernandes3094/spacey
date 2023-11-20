import { useContext } from "react";
import "./capsule-item.style.scss";
import { CapsuleContext } from "../../context/capsule.context.component";

const CapsuleItem = ( { capsule } ) => {
    const {
        serial,
        status,
        land_landings,
        last_update,
        type,
        water_landings,
    } = capsule;
    const { isCapsulePopOpen, setIsCapsulePopOpen, setViewCapsule } = useContext(CapsuleContext);
    const showPopUp = () => {
        setIsCapsulePopOpen(!isCapsulePopOpen);
        setViewCapsule(capsule);
        document.querySelector('body').classList.toggle('stop');
    }
    return (
        <div className="capsule-card cursor-pointer shadow" onClick={ showPopUp }>
            <div className="content h-full flex flex-wrap pt-4">
                <div className="w-full pb-5">
                    <h4 className="mb-5"> { type } - { serial  } </h4>
                    <p>{ last_update }</p>
                </div>
                <p className="self-end w-full text-gray-500 capitalize"><span className={ status }></span>{ status }</p>
            </div>
        </div>
    )
}

export default CapsuleItem;