import {AnyAction, Reducer} from "redux";
import * as SI from "seamless-immutable";
import {createAction, PayloadAction} from "typesafe-actions";
import {mapReducers, ReducerMap} from "../../Lib/ReduxHelpers";

/* ------------- Types and Action Creators ------------- */
export interface DashboardSuccessParams {
  provider: SearchByNameResponse | null;
  service: ServicesSearchResponse | null;
  speciality: SpecialitySearchResponse | null;
}

interface DashboardRequestParams {
  keyword: string;
  lat: string;
  long: string;
}

const REQUEST = "DASHBOARD_REQUEST";
const SUCCESS = "DASHBOARD_SUCCESS";

const actionCreators = {
  request: createAction(REQUEST, (payload: DashboardRequestParams) => ({type: REQUEST, payload})),
  success: createAction(SUCCESS, (payload: DashboardSuccessParams) => ({type: SUCCESS, payload})),
  failure: createAction("DASHBOARD_FAILURE"),
};

export const DashboardActions = actionCreators;

export interface DashboardState {
  data?: DashboardSuccessParams;
  error?: boolean | null;
  fetching?: boolean | null;
}

export type DashboardAction = PayloadAction<string, DashboardRequestParams & DashboardSuccessParams>;

export type ImmutableDashboardState = SI.ImmutableObject<DashboardState>;

/* ------------- Initial State ------------- */

export const INITIAL_STATE: ImmutableDashboardState = SI.from({
  data: null,
  error: null,
  fetching: null,
});

/* ------------- Reducers ------------- */

export const request: Reducer<ImmutableDashboardState> =
  (state: ImmutableDashboardState) =>
    state.merge({fetching: true});

export const success: Reducer<ImmutableDashboardState> =
  (state: ImmutableDashboardState, action: AnyAction & { payload?: DashboardSuccessParams }) => {
    if (!action.payload) {
      return failure(state, action);
    }

    return state.merge({fetching: false, error: null, data: action.payload});
  };

export const failure: Reducer<ImmutableDashboardState> = (state: ImmutableDashboardState) =>
  state.merge({fetching: false, error: true, data: null});

/* ------------- Hookup Reducers To Types ------------- */

const reducerMap: ReducerMap<typeof actionCreators, ImmutableDashboardState> = {
  request,
  failure,
  success,
};

export const DashboardReducer = mapReducers(INITIAL_STATE, reducerMap, actionCreators);

export default DashboardReducer;
