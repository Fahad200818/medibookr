import {Epic, ofType} from "redux-observable";
import {Observable} from "rxjs";
import {LoginAction, LoginActions} from "@root/App/Reducers/LoginReducers";
import {map, mergeMap} from "rxjs/operators";
import {IDependencies} from "@root/App/Epics";

export const epicLogin: Epic = (action$, _, {api}: IDependencies): Observable<LoginAction> => action$.pipe(
  ofType(LoginActions.request.getType()),
  mergeMap((action) => {
    return api.common.login(action.payload.email, action.payload.password).pipe(
      map((response) => {
        if (response.ok) {
          return LoginActions.success(response.data);
        } else {
          return LoginActions.failure(response.data);
        }
      }),
    );
  }),
);
