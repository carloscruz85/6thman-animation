import React, { createContext, useReducer } from "react";
import { reducer } from "./reducer";
export const SectionContext = createContext();

//CREATE A CONTEXT WICH WILL HAVE ALL MY STATE
const SectionProvider = ({ children }) => {
  //USEREDUCE IS LIKE USETATE BUT PASS A REDUCER
  const [sections, dispatch] = useReducer(reducer, {
    section0: null,
    section1: null,
    section2: null,
  });

  return (
    <SectionContext.Provider value={{ sections, dispatch }}>
      {children}
    </SectionContext.Provider>
  );
};

export default SectionProvider;
