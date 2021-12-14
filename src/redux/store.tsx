import {Action, applyMiddleware, combineReducers, createStore, compose} from "redux";
import thunk, { ThunkAction } from "redux-thunk";
import { AuthReducer } from "./auth/AuthReducer";
import { MainReducer } from "./main/MainReducer";


const rootReducer = combineReducers({
    auth: AuthReducer,
    main: MainReducer,
});

// Types
declare global {
    interface Window {
      __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    }
  }

// Типизация store
export type AppStateType = ReturnType<typeof rootReducer>;
// Типизация thunk
export type BaseThunkType<A extends Action, R = Promise<void>> = ThunkAction<R, AppStateType, unknown, A>
// Типизация Action
export type InferActionsTypes<T> = T extends { [keys: string]: (...args: any[]) => infer U } ? U : never;
// Add Redux-devtool
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// Create store
export const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));