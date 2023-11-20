"use client";

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';

import { useSession, signIn, signOut } from "next-auth/react";
import gsap from 'gsap';
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import Hamburger from "../../../../public/hamburger.svg?react";
import logo from "../../../../public/logo.svg?url";
import CloseIcon from "../../../../public/close.svg?react";
import Social from '../social/social.component';
import "./navigation.style.scss";
gsap.registerPlugin(ScrollToPlugin);

const Navigation = () => {

    const headerRef = useRef(null);
    const { data: session } = useSession();
    const router = useRouter();

    const [ showSocial, setShowSocial ] = useState(false);

    const path = usePathname();

    const menuItemTrigger = (e) => {
        const targetHash = e.target.hash;
        const pathLenth = path.split(" ").splice(0,1)[0];
        if ( targetHash != '' && path === '/' ) {
            e.preventDefault();
            setTimeout(() => {
                gsap.to(window, {
                    duration: 1,
                    scrollTo: targetHash
                });
            }, 200);
        }

        (document.querySelector('.hamburger').classList.contains('active')) ? mobileNavToggle(): '';
    }

    const mobileNavToggle = (e) => {
        document.querySelector('.hamburger').classList.toggle('active');
        document.querySelector('body').classList.toggle('stop');
        document.querySelector('nav .nav').classList.toggle('active');
    }

    useEffect(() => {
        const header = headerRef.current;
        let lastScrollTop = 0;

        window.matchMedia("(max-width: 600px)").matches ? setShowSocial(true) : setShowSocial(false);

        const winScroll = () => {
            let current = window.scrollY;
            (current > 150 && current > lastScrollTop) ? header.classList.add('slide-up') : header.classList.remove('slide-up');
            (current > 200) ? header.classList.add('dark') : header.classList.remove('dark');
            lastScrollTop = current;
        }

        window.addEventListener('scroll', winScroll);

    }, [ headerRef ]);

    return (
        <nav ref={ headerRef }>
            <div className="container flex items-center">
                <div className="logo"><Link href="/"><Image src={ logo } priority={true} alt="SpaceY"/></Link></div>
                <div className="nav md:ml-auto">
                    <ul className="flex flex-wrap">
                        <li className={ path == '/' ? "menu-item active" : "menu-item" }>
                            <Link href="/" onClick={ menuItemTrigger }>Home</Link>
                        </li>
                        <li className="menu-item">
                            <Link href="/#capsule" onClick={ menuItemTrigger }>Capsule</Link>
                        </li>
                        <li>
                            <Link href="/#rockets" onClick={ menuItemTrigger }>Rockets</Link>
                        </li>
                        <li className={ path == '/about' ? "menu-item active" : "menu-item" }>
                            <Link href="/about" onClick={ menuItemTrigger }>About</Link>
                        </li>
                        <li className="flex items-center user">
                            { ( session ) && <><Image className="object-cover" src={ session.user.image } priority={false} width={30} height={30} alt="name"/><button onClick={ () => signOut() }>Sign Out</button></> }
                            { ( !session ) && <button onClick={ () =>signIn() }>Sign In</button> }
                        </li>
                    </ul>
                    
                    {
                        showSocial && <Social classes="flex" />
                    }
                </div>
                <div className="hamburger relative md:hidden" onClick={ mobileNavToggle }>{ <Hamburger/> } { <CloseIcon/> }</div>
            </div>
        </nav>
    )
}

export default Navigation;