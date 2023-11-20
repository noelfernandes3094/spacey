"use client";

import {useState, useEffect, createContext} from "react";

export const RocketContext = createContext(
  {
    rockets: [],
    isRocketPopOpen: false,
    setIsRocketPopOpen: () => {},
    viewRocket: [],
    setViewRocket: () => {},
    searchField: '',
    setSearchField: () => {}
  }
);

export const RocketProvider = ({children}) => {
  const [ rockets, setRocket ] = useState(null);
  const [ isRocketPopOpen, setIsRocketPopOpen ] = useState(false);
  const [ viewRocket, setViewRocket ] = useState([]);
  const [ searchField, setSearchField ] = useState('');
 
 

  useEffect(() => {
    fetch('https://api.spacexdata.com/v3/rockets')
      .then(response => response.json())
      .then(json => setRocket(json))
      .catch(error => console.error(error));
  }, []);

  const value = {
    rockets,
    setRocket,
    isRocketPopOpen,
    setIsRocketPopOpen,
    viewRocket,
    setViewRocket,
    searchField,
    setSearchField
  };
  
  return <RocketContext.Provider value={ value }>{ children }</RocketContext.Provider>
}