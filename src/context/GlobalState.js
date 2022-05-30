import React, { createContext, useReducer, useEffect} from "react";
import AppReducer from "./reducer/AppReducer";

//initial state
const initialState = {
  collections: localStorage.getItem('collections') 
    ? JSON.parse(localStorage.getItem('collections')) 
    : []
};

//create context
export const GlobalContext = createContext(initialState);

//create global provider
export const GlobalProvider = ({children}) => {

  const [state, dispatch] = useReducer(AppReducer, initialState);

  useEffect(() => {
    localStorage.setItem('collections', JSON.stringify(state.collections))
  }, [state]);

  //actions
  const addAnimeToCollections = (anime) => {
    dispatch({type: "ADD_ANIME_TO_COLLECTIONS", payload: anime});
  };

  const removeAnimeFromCollections = (id) => {
    dispatch({type: "REMOVE_ANIME_FROM_COLLECTIONS", payload: id})
  }

  return (
    <GlobalContext.Provider value={{
      collections: state.collections, 
      addAnimeToCollections: addAnimeToCollections,
      removeAnimeFromCollections: removeAnimeFromCollections}}>
      {children}
    </GlobalContext.Provider>
  )
}
