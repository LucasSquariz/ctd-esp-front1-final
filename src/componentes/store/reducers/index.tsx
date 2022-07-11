import {combineReducers} from "@reduxjs/toolkit";
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { personagens  } from "./personagemReducer";

// Importamos applyMiddleware do Redux, para poder adicionar Thunk ou Saga como Middleware
import { createStore, applyMiddleware } from 'redux';
import {TypedUseSelectorHook, useSelector as useReduxSelector} from "react-redux";



const rootReducer = combineReducers({
    personagens,
});

export type IRootState = ReturnType<typeof rootReducer>;

// Tipamos o hook useSelector
export const useSelector: TypedUseSelectorHook<IRootState> = useReduxSelector

export const store = createStore(
    rootReducer, composeWithDevTools(applyMiddleware(thunk))
)