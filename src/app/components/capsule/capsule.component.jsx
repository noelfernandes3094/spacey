"use client";
import Link from "next/link";
import { useSession } from "next-auth/react"

import capsule from "./style.module.scss";
import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

import capsuleImg from "../../../../public/capsule.png";

const Capsulte = () => {
    const { data: session, status } = useSession();

    useEffect(() => {

        const animateContent = document.querySelector('#capsule .max-w-lg');
        const animateImage = document.querySelector('#capsule .graphic');
        gsap.set(animateContent, {
            opacity: 0,
            y: 40
        });
        gsap.set(animateImage, {
            opacity: 0,
        });
        const cTl = gsap.timeline({
            scrollTrigger: {
                trigger: '#capsule',
                start: "top 80%",
                end: "bottom bottom",
                once: true,
                onEnter: (e) => {
                    const triggerEl = e.trigger.classList;
                    !triggerEl.contains('active') ? triggerEl.add('bg-black') : '';
                },
                invalidateOnRefresh: true
            }
        });

        cTl.to(animateContent, {
            delay: 0.3,
            duration: 0.5,
            opacity: 1,
            y: 0,
        }, '<').to(animateImage, {
            opacity: 1
        })
    },[]);

    

    return (
        <section id="capsule" className={capsule.capsule}>
            <div className="container flex flex-wrap items-center">
                <div className="content">
                    <div className="max-w-lg">
                        <h3>DRAGON</h3>
                        <p> The Dragon spacecraft is capable of carrying up to 7 passengers to and from Earth orbit, and beyond.It is the only spacecraft currently flying that is capable of returning significant amounts of cargo to Earth, 
                            and is the first private spacecraft to take humans to the space station. 
                        </p>
                        { ( status === "authenticated" ) && <Link className="button inline-block uppercase hover:bg-white hover:text-black mt-10" href="/capsules">See More</Link> }
                        { ( status !== "authenticated" ) && <Link className="button inline-block uppercase hover:bg-white hover:text-black mt-10" href="/sign-in">Sign In See More</Link> }
                        
                    </div>
                </div>
                <div className="bg-contain bg-no-repeat bg-center graphic" style={{backgroundImage: `url(${capsuleImg.src})`}}></div>
            </div>
        </section>
    );
}

export default Capsulte;