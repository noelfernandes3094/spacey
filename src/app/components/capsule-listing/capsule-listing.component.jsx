"use client";

import { useContext, useEffect } from "react";
import { CapsuleContext } from "../../context/capsule.context.component";
import CapsuleItem from "../capsule-item/capsule-item.component";
import CapsulePopup from "../capsule-popup/capsule-popup.component";
import ResultNotFound from "../result-not-found/result-not-found.component";
import FormInput from "../form-input/form-input.componenet";
import Loading from "../loading/loading.component";
import CapsuleFilter from "../filter/filter.component";
import Pagination from "../pagination/pagination.component";

import "./capsule-list.style.scss";

const CapsuleList = (props) => {
    const { title } = props;
    const {
        capsules,
        isCapsulePopOpen,
        setSearchField,
        pageCount,
        setcurrentPage,
        setLoading,
        loading
    } = useContext(CapsuleContext);

    
    const onSearchHandle = (e) => {
        let timeOut = setTimeout(() => {
            let searchFieldString = e.target.value.toLocaleLowerCase();
            setSearchField(searchFieldString);
        }, 800);
    }

    const handlePageChange = (e) => {
        const pageIndex = e.selected + 1;
        const pageOffsetChange = ( pageIndex * 8 ) - 8;
        ( pageIndex == 1 ) ? setcurrentPage(0): setcurrentPage( pageOffsetChange )
    }

    if ( capsules) {
        
        return (
            <>
                <section className="capsule-listing">
                    <div className="container">
                        { title && <h3 className="mb-10">{ title }</h3> }

                        <div className="filter-wrapper flex flex-wrap justify-items-center gap-5">
                            <div>
                                <form onSubmit={(e) => e.preventDefault() }>
                                    <FormInput otherprops={{
                                        className: "bg-transparent border-b border-b-gray-100",
                                        type: "search",
                                        name: "search",
                                        placeholder: "Search",
                                        onChange: onSearchHandle,
                                        autoComplete: "off"
                                        }}
                                    />
                                </form>
                            </div>
                            <div className="md:ml-auto">
                                {<CapsuleFilter />}
                            </div>
                        </div>
                        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
                            {
                                capsules.map((capsule) => {
                                    return <CapsuleItem  capsule={ capsule } key={ capsule.id } />
                                })
                            }
                        </div>
                        {
                            (capsules.length == 0 && loading == false) && <ResultNotFound />
                        }
                    </div>
                    { loading && <Loading /> }
                    {   
                        capsules.length >= 1 && 
                        <div className="pagination py-12">
                            <Pagination pagecount={ pageCount } handle={ handlePageChange} />
                        </div>
                    }
                </section>
                { isCapsulePopOpen && <CapsulePopup/> }
            </>
        )
    }
}

export default CapsuleList; 