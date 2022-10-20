import { createContext, useReducer } from "react";
import githubReducer from "./GithubReducers";

const GithubContext = createContext();

const GITHUB_URL = "https://api.github.com"
const GITHUB_TOKEN = "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"

export const GithubProvider = ({children}) => {
    const intialState = {
        users: [],  
        user: {},   
        repos: [],
        loading: false
    }
 
    const [state, dispatch] = useReducer(githubReducer, intialState)
    //Get Initial users for testing purpose
    const searchUsers = async (text) => {
        setLoading();

        const params = new URLSearchParams({
            q: text
        })

        const response = await fetch(`${GITHUB_URL}/search/users?${params}`, {
            headers: {
                Authorization: `token ${GITHUB_TOKEN}`, 
            },
        })
        const {items} = await response.json()
        dispatch({
            type: 'Get_Users',
            payload: items
        })
    }

    const getUser = async (login) => {
        setLoading();

        const response = await fetch(`${GITHUB_URL}/users/${login}`, {
            headers: {
                Authorization: `token ${GITHUB_TOKEN}`, 
            },
        })

        if(response.status === 404) {
            window.location = '/notfound'
        } else {

            const data = await response.json()
            dispatch({
               type: 'Get_User',
               payload: data
              })
        }
    }
    
    const getRepos = async (login) => {

        const response = await fetch(`${GITHUB_URL}/users/${login}/repos`, {
            headers: {
                Authorization: `token ${GITHUB_TOKEN}`, 
            },
        })

        if(response.status === 404) {
            window.location = '/notfound'
        } else {
            const data = await response.json()
            dispatch({
               type: 'Get_Repos',
               payload: data
              })
        }
    }

    const clearUsers = () => {
        dispatch({ type: 'CLEAR_USERS' })
    }

    const setLoading = () => dispatch({type: 'Set_Loading'})
    
    return <GithubContext.Provider value={{
        users: state.users,
        loading: state.loading,
        user: state.user,
        repos: state.repos,
        searchUsers,
        getRepos,
        clearUsers,
        getUser,
    }}>
    {children}
    </GithubContext.Provider>
}

export default GithubContext