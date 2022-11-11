
import { createContext, useContext, useEffect, useReducer } from "react";
import reducer from './reducer'

let API = `https://api.nationalize.io/?name`;
let AppContext = createContext();
let initialstate = {
isLoading: false,
 name: '',
 country: []  
}
let AppProvider= ({children})=>{

    let [state,dispatch]= useReducer(reducer,initialstate)

    let  getApiData = async(API)=>{
        dispatch({type: 'LOADER'})
        try {
            let res= await fetch(API);
            let response = await res.json();
            dispatch({type: 'GET_COUNTERY', payload: response.country})
        } catch (error) {
            
        }
        
    }
        useEffect(()=>{
            getApiData(`${API}=${state.name}`);
        },[state.name])

        // get value 
        let getValue = (e,value)=>{
                e.preventDefault();
            dispatch({type: 'GET_VALUE', payload: value})
        }
    return (<AppContext.Provider value={{...state, getValue}}>
        {children}
    </AppContext.Provider>)
}
let useGlobalContext = ()=>{
    return useContext(AppContext);
}
export {AppContext, AppProvider, useGlobalContext}