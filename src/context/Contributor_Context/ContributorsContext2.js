import { createContext, useReducer } from "react";
import contributorsReducer from "./ContributorsReducers";

const ContributorsContext2 = createContext();

export const ContributorsProvider2 = ({children}) => {
    const intialState = {
        users2: [],  
        user2: {},
        repo2: {},
        loading2: false
    }
    
    const [state, dispatch2] = useReducer(contributorsReducer, intialState)
 
    return <ContributorsContext2.Provider value={{
        ...state,
        dispatch2,
    }}>
    {children}
    </ContributorsContext2.Provider>
}

export default ContributorsContext2