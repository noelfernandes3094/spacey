"use client";
import { signOut } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";

import ActionButton from "../actionButton/actionButton.component";

import style from "./profile.style.module.scss"

const Profile = ({ details }) => {
    const { name, image } = details;
    return (
        <div className={`${ style.profile } flex flex-wrap justify-center`}>
            <Image className="mb-3" src={ image } width={96} height={96} alt={ name } />
            <p className="w-full text-center mb-4">Hi, { name }</p>
            <div className="action-wrapper w-full flex justify-between">
                <Link className="bg-black text-white" href="/">Back To Home</Link>
                <ActionButton otherprops={{ className: 'log-out',onClick: signOut }}>Sign Out</ActionButton>
            </div>
        </div>
    )
}

export default Profile;