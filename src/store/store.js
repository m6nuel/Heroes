import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunk from "redux-thunk";
import { authenticated } from "../reducers/authenticated";
import { equipo } from "../reducers/equipo";
import { modal } from "../reducers/modal";
import { search } from "../reducers/search";

const reducers = combineReducers({
    logueado: authenticated,
    modal: modal,
    search: search,
    equipo: equipo

})

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;


export const store = createStore(
    reducers,
    composeEnhancers(
        applyMiddleware( thunk )
    )

);
