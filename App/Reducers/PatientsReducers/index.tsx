import * as SI from "seamless-immutable";
import {PayloadAction} from "typesafe-actions";
import {mapReducers, ReducerMap} from "../../Lib/ReduxHelpers";

/* ------------- Types and Action Creators ------------- */

const actions = {};

export const PatientAPIActions = actions;

interface PatientState {
}

export type APIAction = PayloadAction<string, PatientState>;

export type PatientInitialState = SI.ImmutableObject<PatientState>;

/* ------------- Initial RootState ------------- */

export const INITIAL_STATE: PatientInitialState = SI.from({});

/* ------------- Reducers ------------- */


/* ------------- Hookup Reducers To Types ------------- */

const reducerMap: ReducerMap<typeof actions, PatientInitialState> = {};

export const PatientReducers = mapReducers(INITIAL_STATE, reducerMap, actions);

export default PatientReducers;
