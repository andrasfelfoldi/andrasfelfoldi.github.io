import Actions from "../constants/Actions";

export const changeScrollPosition = (position) => {
    return {
        type: Actions.SCROLL_POSITION_CHANGED,
        data: {
            position
        }
    }
}