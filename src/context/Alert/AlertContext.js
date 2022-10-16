import { createContext, useReducer } from 'react';
import alertReducers from './AlertReducers';

const AlertContext = createContext()

export const AlertProvider = ({children}) => {
    const intialStage = null

    const [state, dispatch] = useReducer(alertReducers,intialStage)

    const setAlert = (msg, type) => {
        dispatch({
            type: 'SET_ALERT',
            payload: {msg, type}
        })

        setTimeout( () => dispatch({type: 'SET_ALERT'}), 3000)
    }

    return (
        <AlertContext.Provider value={{alert: state, setAlert }}>
            {children}
        </AlertContext.Provider>
    )
}

export default AlertContext