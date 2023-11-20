"use client";

import { useContext, useEffect  } from "react";
import Image from "next/image";
import "./filter.style.scss";
import { CapsuleContext } from "../../context/capsule.context.component";
import arrowDown from "../../../../public/arrow-down.svg?url"

const CapsuleFilter = () => {

    const { setSort, setStatus } = useContext(CapsuleContext);
    const sortClick = document.querySelectorAll('.sort input');
    const statusClick = document.querySelectorAll('.status input');

    const sortClickHandle = (e) => {
        const elm = e.target;
        const value = elm.attributes.name.value;

        sortClick.forEach((el) => {
            const elParentActive = el.parentElement.classList.contains('active');
            elParentActive ? el.parentElement.classList.remove('active') : '';
        });

        elm.parentElement.classList.add('active');
        setSort(value);
        document.querySelector('.filter button').classList.toggle('active');
        document.querySelector('.filter-options').classList.toggle('show');
    }

    const statusClickHandle = (e) => {
        const elm = e.target;
        const value = elm.attributes.name.value;
        let getValues = [];

        statusClick.forEach((el) => {
            const elParentActive = el.parentElement.classList.contains('active');
            elParentActive ? getValues.push(el.attributes.name.value) : '';
        });

        if( elm.parentElement.classList.contains('active') ) {
            const index = getValues.indexOf( value );
            getValues.splice( index, 1 );
        } else {
            getValues.push( value );
        }

        elm.parentElement.classList.toggle('active');
        setStatus( getValues );
    }

    
    const toggleFilter = (e) => {
        e.target.classList.toggle('active');
        e.target.nextElementSibling.classList.toggle('show');
    }

    return (
        <div className="filter relative">
            <button type="button" className="inline-flex w-full justify-between items-center" aria-expanded="true" onClick={ toggleFilter }>
                Filter
                <Image src={ arrowDown } width={16} alt="arrow" />
            </button>
            <div className="filter-options grid gap-2 absolute transition-opacity">
                <div className="sort">
                    <h6>Sort By</h6>
                    <form className="grid grid-cols-2" onSubmit={(e) => e.preventDefault() }>
                        <label><input type="radio" className="select" name="asc" onClick={ sortClickHandle }/> A - Z </label>
                        <label><input type="radio" className="select" name="desc" onClick={ sortClickHandle }/> Z - A </label>
                    </form>
                </div>
                {<div className="status">
                    <h6>Status</h6>
                    <form className="grid grid-cols-2" onSubmit={(e) => e.preventDefault() }>
                        <label><input type="checkbox" className="select" name="active" onClick={ statusClickHandle }/> Active </label>
                        <label><input type="checkbox" className="select" name="retired" onClick={ statusClickHandle }/> Retired </label>
                        <label><input type="checkbox" className="select" name="destroyed" onClick={ statusClickHandle }/> Destroyed </label>
                        <label><input type="checkbox" className="select" name="unknown" onClick={ statusClickHandle }/> Unknown </label>
                    </form>
                </div>}
            </div>
        </div>
    )
}

export default CapsuleFilter;