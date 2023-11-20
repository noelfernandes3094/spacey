"use client";
import { signIn } from "next-auth/react";
const Providers = ({ otherprops }) => {
    const { id, name } = otherprops
    return (    
        <button className={ `${ name.toLowerCase() } w-full` } onClick={() => signIn(id)}>Sign in with { name }</button>
    )
}

export default Providers;