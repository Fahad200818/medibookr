import Config from "@root/App/Config/DebugConfig";
import Reactotron from "reactotron-react-native";
import {applyMiddleware, compose, createStore, Reducer} from "redux";
import {createEpicMiddleware, Epic} from "redux-observable";
import ScreenTracking from "./ScreenTrackingMiddleware";
import {IDependencies} from "@root/App/Epics";

// creates the store
export default (rootReducer: Reducer<any>, rootEpics: Epic, dependencies: IDependencies) => {
  /* ------------- Redux Configuration ------------- */

  const middleware: any[] = [];
  const enhancers = [];

  /* ------------- Analytics Middleware ------------- */
  if (Config.useReactotron) {
    middleware.push(ScreenTracking);
  }
  /* ------------- Epic Middleware ------------- */

  const epicMiddleware = createEpicMiddleware({dependencies});
  middleware.push(epicMiddleware);

  /* ------------- Assemble Middleware ------------- */

  // @ts-ignore
  enhancers.push(applyMiddleware(...middleware));

  // if Reactotron is enabled (default for __DEV__), we'll create the store through Reactotron
  // @ts-ignore
  const createAppropriateStore = Config.useReactotron ? Reactotron.createStore : createStore;

  // @ts-ignore
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  const store = createAppropriateStore(rootReducer, composeEnhancers(...enhancers));

  // kick off root epics
  epicMiddleware.run(rootEpics);

  return {
    store,
  };
};
