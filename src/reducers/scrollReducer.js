import Actions from "../constants/Actions";

export default function scroll(state = {position: 0, maxPosition: 4}, action) {
    switch (action.type) {
        case Actions.SCROLL_POSITION_CHANGED:
            return Object.assign({}, state, {position: action.data.position})
        
        default:
            return state
    }
}