const INIT_STATE = {
    toggler: false
}

const toggleReducer = (state = INIT_STATE, action) => {
const {type} = action;
switch(type) {
    case "DARK_MODE_TOGGLE":
        return {
            ...state,
            toggler: !state.toggler
        }
        default:
            return state
}
}

export default toggleReducer;