const githubReducer = (state, action) => {
    switch(action.type) {
        case 'Get_Users':
            return {
                ...state,
                users: action.payload,
                loading: false
            }
        case 'Get_User':
            return {
                ...state,
                user: action.payload,
                loading: false
            }
        case 'Get_Repos':
            return {
                ...state,
                repos: action.payload,
                loading: false
            }
        case 'Set_Loading':
            return {
                ...state,
                loading: true
            }
        case 'CLEAR_USERS':
            return {
                ...state,
                users: []
            }
        case 'Get_User_And_Repos':
            return {
                ...state,
                user: action.payload.user,
                repos: action.payload.repos,
                loading: false
            }
        default:
            return state;
    }
}

export default githubReducer
