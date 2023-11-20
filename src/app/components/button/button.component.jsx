"use client";

import { useState } from "react";
const Button = ( { children, action } ) => {
    
    const [ name, setName ] = useState('');

    const setAction = async () => {
        setName(await action())
    }
    return (
        <div>
            <button onClick={ setAction }>{ children }</button>
            {name && <div>{name}</div>}
        </div>
    )
}

export default Button;