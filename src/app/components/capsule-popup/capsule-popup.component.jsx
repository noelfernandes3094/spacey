import { useContext } from "react";
import { CapsuleContext } from "../../context/capsule.context.component";
import Close from "../../../../public/close.svg?react";
import "./capsule-popup.style.scss";

const CapsulePopup = () => {
    const { viewCapsule, isCapsulePopOpen, setIsCapsulePopOpen } = useContext( CapsuleContext );
    const closePop = () => {
        setIsCapsulePopOpen(!isCapsulePopOpen);
        document.querySelector('body').classList.toggle('stop');
    }

    
    const {
        serial,
        status,
        land_landings,
        last_update,
        type,
        water_landings,
        reuse_count,
    } = viewCapsule;

    return (

        <div className="capsule-details-pop fixed flex items-center overflow-y-auto">
            <div className="container">
            <div className="wrapper bg-slate-50 m-auto relative">
                <div className="close absolute cursor-pointer" onClick={ closePop }>{<Close/>}</div>
                <div className="col-left">
                    <h4 className="my-4">{ type }</h4>
                    <p> { last_update }</p>
                    <ul className="mt-5">
                        <li className="mb-3">
                            <label className="opacity-70">Serial:</label> { serial }
                        </li>
                        {
                            /* (original_launch !== null ) &&
                            <li className="mb-3">
                                <label className="opacity-70">Launch Date:</label> { original_launch.slice(0, 10) }
                            </li> */
                        }
                        {
                            /* (original_launch !== null) &&
                            <li className="mb-3">
                                <label className="opacity-70">Launch Time:</label> { original_launch.slice(11, 16) }
                            </li> */
                        }
                        <li className="mb-3">
                            <label className="opacity-70">Land Landings:</label> { land_landings }
                        </li>
                        <li className="mb-3">
                            <label className="opacity-70">Water Landings:</label> { water_landings
 }
                        </li>
                        <li className="mb-3">
                            <label className="opacity-70">Reused:</label> { reuse_count }
                        </li>
                        <li className="mb-3 capitalize">
                            <label className="opacity-70">Status:</label> { status }
                        </li>
                    </ul>
                </div>
            </div>
            </div>
        </div>
    )
}

export default CapsulePopup;