import {Reducer} from "redux";
import * as SI from "seamless-immutable";
import {createAction, PayloadAction} from "typesafe-actions";
import {mapReducers, ReducerMap} from "../../Lib/ReduxHelpers";
import {ErrorResponse} from "@root/App/Services/DataModels/Error";
import {LoginResponse} from "@root/App/Services/DataModels/LoginResponse";

/* ------------- Types and Action Creators ------------- */

interface LoginRequestParams {
  email: string;
  password: string;
}

const TYPE_LOGIN_REQUEST = "LOGIN_REQUEST";
const TYPE_LOGIN_SUCCESS = "LOGIN_SUCCESS";
const TYPE_LOGIN_FAILURE = "LOGIN_FAILURE";

const actionCreators = {
  request: createAction(TYPE_LOGIN_REQUEST, (params: LoginRequestParams) => ({type: TYPE_LOGIN_REQUEST, payload: params})),
  success: createAction(TYPE_LOGIN_SUCCESS, (payload: LoginResponse) => ({type: TYPE_LOGIN_SUCCESS, payload})),
  failure: createAction(TYPE_LOGIN_FAILURE, (payload: ErrorResponse) => ({type: TYPE_LOGIN_FAILURE, payload})),
};

export const LoginActions = actionCreators;

export interface LoginState {
  data?: LoginResponse | null;
  error?: ErrorResponse | null;
  fetching?: boolean | null;
}

export type LoginAction = PayloadAction<string, LoginResponse | ErrorResponse>;

export type ImmutableLoginState = SI.ImmutableObject<LoginState>;

/* ------------- Initial RootState ------------- */

const INITIAL_STATE: ImmutableLoginState = SI.from({
  data: null,
  error: null,
  fetching: null,
});

/* ------------- Reducers ------------- */

export const request: Reducer<ImmutableLoginState> =
  (state: ImmutableLoginState) =>
    state.merge({fetching: true});

export const success: Reducer<ImmutableLoginState> =
  (state, action) => {
    if (!action.payload) {
      return failure(state, action);
    }
    return state.merge({fetching: false, error: null, data: action.payload});
  };

export const failure: Reducer<ImmutableLoginState> = (state, action) =>
  state.merge({fetching: false, error: action.payload, data: null});

/* ------------- Hookup Reducers To Types ------------- */

const reducerMap: ReducerMap<typeof actionCreators, ImmutableLoginState> = {
  request,
  failure,
  success,
};

export const LoginReducer = mapReducers(INITIAL_STATE, reducerMap, actionCreators);

export default LoginReducer;
