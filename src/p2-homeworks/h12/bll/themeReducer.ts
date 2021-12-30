

const initState = {
    theme: 'dark'
};

export const themeReducer = (state = initState, action: any): any => { // fix any
    switch (action.type) {
        case "CHANGE_THEME": {
            return {...state, theme: action.theme};
        }
        default:
            return state;
    }
};

export const changeThemeC = (theme: string): any => {
    return {
        type: 'CHANGE_THEME',
        theme
    }

};