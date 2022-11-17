import { createContext, useReducer } from "react";
import contributorsReducer from "./ContributorsReducers";

const ContributorsContext = createContext();

export const ContributorsProvider = ({children}) => {
    const intialState = {
        users: [],  
        user: {},
        repo: {},
        loading: false
    }
    
    const [state, dispatch] = useReducer(contributorsReducer, intialState)
 
    return <ContributorsContext.Provider value={{
        ...state,
        dispatch,
    }}>
    {children}
    </ContributorsContext.Provider>
}

export default ContributorsContext