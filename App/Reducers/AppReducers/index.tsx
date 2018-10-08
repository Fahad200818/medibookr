import * as SI from "seamless-immutable";
import {PayloadAction} from "typesafe-actions";
import {mapReducers, ReducerMap} from "../../Lib/ReduxHelpers";

/* ------------- Types and Action Creators ------------- */

const actionCreators = {};

export const AppActions = actionCreators;

export interface AppState {

}

export type AppAction = PayloadAction<string, AppState>;

export type ImmutableAppState = SI.ImmutableObject<AppState>;

/* ------------- Initial State ------------- */

export const INITIAL_STATE: ImmutableAppState = SI.from({});

/* ------------- Reducers ------------- */


/* ------------- Hookup Reducers To Types ------------- */

const reducerMap: ReducerMap<typeof actionCreators, ImmutableAppState> = {};

export const AppReducer = mapReducers(INITIAL_STATE, reducerMap, actionCreators);

export default AppReducer;
