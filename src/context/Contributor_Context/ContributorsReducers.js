const contributorsReducer = (state, action) => {
    switch(action.type) {
        case 'Get_Contributors':
            return {
                ...state,
                users: action.payload,
            }
        case 'Get_Contributors2':
             return {
                ...state,
                users2: action.payload,
            }
        case 'Get_Contributors3':
                return {
                   ...state,
                   users3: action.payload,
                   loading: false
               }
        case 'Get_RepoData':
            return {
                ...state,
              repo: action.payload,
                loading: false
            }
        case 'Set_Loading':
            return {
                ...state,
                loading: true
            }
        case 'CLEAR_USERS2':
            return {
                ...state,
                users2: [],
                users3: []
            }
        case 'CLEAR_USERS':
            return {
                ...state,
                users: []
            }
        default:
            return state;
    }
}

export default contributorsReducer  
