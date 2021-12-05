import {UserType} from "../HW8";

export const homeWorkReducer = (state: Array<UserType>, action: { type: string, payload: string }): Array<UserType> => {
    switch (action.type) {
        case 'sort': {
            let newState = state.map((t) => t)
            return action.payload === 'up'
                ? newState.sort((a: UserType, b: UserType) => a.name.toLowerCase() <= b.name.toLowerCase() ? -1 : 1)
                : newState.sort((a: UserType, b: UserType) => a.name.toLowerCase() >= b.name.toLowerCase() ? -1 : 1)

        }
        case 'check': {

            return action.payload === '18'
                ? state.map((t) => t).filter((t) => t.age >= 18)
                : state
        }
        default:
            return state
    }
}