import Link from 'next/link';
import Image from 'next/image';

/* components */
import Heart from "../../../../public/heart.svg?react";
import Social from '../social/social.component';
import "./footer.scss";

const Footer = () => {
    const year = new Date();
    return (
        <footer className='bg-black text-white'>
            <div className="container">
                <div className="flex flex-wrap items-center uppercase gap-x-5">
                    { <Social classes="flex md:justify-center" /> }
                    <div className="copyright md:-order-1">&copy; { year.getFullYear() } SPACEY. All Rights Reserved.</div>
                    <div className="credits md:text-right">Made with {<Heart/>} by Noel Fernandes</div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;