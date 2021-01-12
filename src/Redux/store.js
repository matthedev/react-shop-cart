import {createStore} from "redux"
// import {composedWithDevTools} from "redux-devtools-extension"
import toggleReducer from "./Reducers/toggle-reducer";


const store = createStore(toggleReducer)

export default store;