"use client";
import {useState, useEffect, createContext} from "react";

export const CapsuleContext = createContext(
  {
    capsules: [],
    isCapsulePopOpen: false,
    setIsCapsulePopOpen: () => {},
    viewCapsule: [],
    setViewCapsule: () => {},
    searchField: '',
    setSearchField: () => {},
    query: '', 
    setQuery: () => {},
    status: [],
    setStatus: () => {}
  }
);

export const CapsuleProvider = ({children}) => {
  const [ capsules, setCapsules ] = useState(null);
  const [ isCapsulePopOpen, setIsCapsulePopOpen ] = useState(false);
  const [ viewCapsule, setViewCapsule ] = useState([]);
  const [ searchField, setSearchField ] = useState('');
  const [ pageCount, setPageCount ] = useState(1);
  const [ currentPage, setcurrentPage ] = useState(0);
  const [ limit, setLimit ] = useState(12);
  const [ loading, setLoading ] = useState(false);
  const [ sort, setSort ] = useState('');
  const [ status, setStatus ] = useState([]);

  

  useEffect(() => {

    const arr = status.map((stat, i) => {
      return {
        status: {
          $eq: stat
        }
      }
    });
    
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
   
    const raw = JSON.stringify({
      "query": {
        ...(
          ( searchField != '' ) ? {
            "$text": {
            "$search": searchField
            }
          } : {}
        ),
        ...(
          (arr.length > 0) ? {
            "$or": arr
          }: {} 
        ),
      },
      "options": {
        "limit": limit,
        "offset": currentPage,
        ...( (sort !== '') ? {
          "sort": {
            type: sort
          }
        } : {} )
      }
    });

    const requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };

    fetch("https://api.spacexdata.com/v4/capsules/query", requestOptions)
      .then(response => response.json())
      .then(result => {
          setLoading( true );
          setTimeout(() => {
            setLoading(false);
            setCapsules( result.docs );
            setPageCount( result.totalPages );
          }, 400);
      })
      .catch(error => console.log('error', error));
  }, [ currentPage, setcurrentPage, searchField, sort, status ]);

  const value = {
    capsules, 
    setCapsules, 
    isCapsulePopOpen, 
    setIsCapsulePopOpen,
    viewCapsule, 
    setViewCapsule, 
    searchField, 
    setSearchField,
    limit,
    pageCount, 
    setPageCount,
    currentPage, 
    setcurrentPage,
    loading, 
    setLoading,
    sort, setSort,
    status, 
    setStatus
  };
  
  return <CapsuleContext.Provider value={ value }>{ children }</CapsuleContext.Provider>
}