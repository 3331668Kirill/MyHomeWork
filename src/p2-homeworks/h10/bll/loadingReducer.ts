type TypeLoadingAC = {
    type: 'SET_LOADING'
    loading: boolean
}

const initState = {
    loading: false
}

export const loadingReducer = (state = initState, action: TypeLoadingAC): { loading: boolean } => {
    switch (action.type) {
        case 'SET_LOADING': {
            return {...state, loading: action.loading}
        }
        default:
            return state
    }
}

export const loadingAC = (loading: boolean): TypeLoadingAC => {
    return {
        type: 'SET_LOADING',
        loading,
    }
}