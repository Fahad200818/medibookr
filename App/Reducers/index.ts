import rootEpics from "@root/App/Epics";
import {combineReducers} from "redux";
import configureStore from "./CreateStore";
import {NavigationReducer, NavigationState} from "./NavigationReducers";
import {PatientInitialState, PatientReducers} from "./PatientsReducers";
import DebugConfig from "@root/App/Config/DebugConfig";
import FixtureApi from "@root/App/Services/FixtureApi";
import Api from "@root/App/Services/Api";
import LoginReducer, {LoginState} from "@root/App/Reducers/LoginReducers";
import DashboardReducer, {DashboardState} from "@root/App/Reducers/DashboardReducers";


/* ------------- Assemble The Reducers ------------- */
export const reducers = combineReducers({
  nav: NavigationReducer,
  patient: PatientReducers,
  dashboard: DashboardReducer,
  login: LoginReducer,
});

export interface RootState {
  patient: PatientInitialState;
  dashboard: DashboardState;
  nav: NavigationState;
  login: LoginState;
}

const apiCall = DebugConfig.useFixtures ? FixtureApi() : Api;

export default () => {
  const {store} = configureStore(reducers, rootEpics, {
    api: apiCall,
  });

  return store;
};
