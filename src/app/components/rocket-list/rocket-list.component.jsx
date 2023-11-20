"use client";
import { useContext, useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { RocketContext } from "../../context/rocket.context.component";
import RocketItem from "../rocket-item/rocket-item.component";
import RocketPopup from "../rocket-popup/rocket-popup.component";
import ResultNotFound from "../result-not-found/result-not-found.component";

import "./rocket-list.style.scss";

const RocketList = (props) => {
    const { title } = props;
    const { rockets, isRocketPopOpen } = useContext( RocketContext );

    if ( rockets ) {

        return (
            <>
                <section id="rockets" className="rocket-listing">
                    <div className="container">
                        { title && <h3 className="mb-10">{ title }</h3> }

                        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
                            {
                                rockets.map((rocket) => {
                                    return <RocketItem  rocket={ rocket } key={ rocket.id } />
                                })
                            }
                        </div>
                        {
                            rockets.length == 0 && < ResultNotFound / >
                        }
                    </div>
                </section>
                { isRocketPopOpen && <RocketPopup/> }
            </>
        )
    }
}

export default RocketList;