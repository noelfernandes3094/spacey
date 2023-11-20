import Link from 'next/link';
import Image from 'next/image';

import facebook from '../../../../public/facebook.svg?url';
import linkedin from '../../../../public/linkedin.svg?url';
import insta from '../../../../public/insta.svg?url';

import social from "./social.module.scss";

const Social = (prop) => {
    return (
        <div className={ social.social }>
            <ul className={ prop.classes }>
                <li><Link href="https://www.facebook.com/" target="_blank"><Image src={ facebook } width="30" height="30" alt="facebook"/></Link></li>
                <li><Link href="https://www.linkedin.com/in/noel-ferns/" target="_blank"><Image src={ linkedin } width="30" height="30" alt="facebook"/></Link></li>
                <li><Link href="https://www.instagram.com/naz.noel/" target="_blank"><Image src={ insta } width="30" height="30" alt="facebook"/></Link></li>
            </ul>
        </div>
    )
}

export default Social;