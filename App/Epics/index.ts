import {combineEpics} from "redux-observable";
import {Api} from "@root/App/Services/Api";
import {epicLogin} from "@root/App/Epics/LoginEpics";
import {epicSearchKeyword} from "@root/App/Epics/SearchEpics";


export declare interface IDependencies {
  api: Api;
}

export default combineEpics(
  epicLogin,
  epicSearchKeyword,
);
