import {Epic, ofType} from "redux-observable";
import {DashboardAction, DashboardActions} from "@root/App/Reducers/DashboardReducers";
import {IDependencies} from "@root/App/Epics";
import {Api} from "@root/App/Services/Api";
import {of, zip} from "rxjs";
import {mergeMap} from "rxjs/operators";
import {ApiResponse} from "apisauce";

const providerSearch = (api: Api, action: DashboardAction) =>
  api.common.searchByName(action.payload.keyword, action.payload.lat, action.payload.long);

const serviceSearch = (api: Api, action: DashboardAction) =>
  api.common.serviceSearch(action.payload.keyword, action.payload.lat, action.payload.long);

const specialitySearch = (api: Api, action: DashboardAction) =>
  api.common.specialitySearch(action.payload.keyword, action.payload.lat, action.payload.long);

export const epicSearchKeyword: Epic = ((action$, state$, {api}: IDependencies) => action$.pipe(
  ofType(DashboardActions.request.getType()),
  mergeMap((action) => zip(providerSearch(api, action), serviceSearch(api, action), specialitySearch(api, action))),
  mergeMap((arr: Array<ApiResponse<any>>) => of(DashboardActions.success(
    {
      provider: arr[0].data,
      service: arr[1].data,
      speciality: arr[2].data,
    },
  ))),
));
