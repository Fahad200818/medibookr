// a library to wrap and simplify api calls
import {ApiResponse, create as apicreate} from "apisauce";
import {LoginResponse} from "@root/App/Services/DataModels/LoginResponse";
import {from, Observable} from "rxjs";
import AppConfig from "@root/App/Config/AppConfig";

export interface CommonAPI {
  login: (email: string, password: string) => Observable<ApiResponse<LoginResponse>> | null;
  searchByName: (keyword: string, lat: string, long: string) => Observable<ApiResponse<SearchByNameResponse>> | null;
  serviceSearch: (keyword: string, lat: string, long: string) => Observable<ApiResponse<ServicesSearchResponse>> | null;
  specialitySearch: (keyword: string, lat: string, long: string) => Observable<ApiResponse<SpecialitySearchResponse>> | null;
}

// our "constructor"
const createAPI = (): CommonAPI => {
  // ------
  // STEP 1
  // ------
  //
  // Create and configure an apisauce-based api object.
  //
  const api = apicreate({
    // base URL is read from the "constructor"
    baseURL: AppConfig.url,
    // here are some default headers
    headers: {
      "accept-version": "v1",
      "Content-Type": "application/json",
    },
    // 30 seconds timeout...
    timeout: 30000,
  });

  // ------
  // STEP 2
  // ------
  //
  // Define some functions that call the api.  The goal is to provide
  // a thin wrapper of the api layer providing nicer feeling functions
  // rather than "get", "post" and friends.
  //
  // I generally don't like wrapping the output at this level because
  // sometimes specific actions need to be take on `403` or `401`, etc.
  //
  // Since we can't hide from that, we embrace it by getting out of the
  // way at this level.
  //

  const commonAPI: CommonAPI = {
    login: (email, password) => from(api.post<LoginResponse>("patients/login", {
      email,
      password,
    })),
    searchByName: (keyword, lat, long) => from(api.get<SearchByNameResponse>("providers/searchByName", {
      keyword, lat, long,
    })),
    serviceSearch: (keyword, lat, long) => from(api.get<ServicesSearchResponse>("services/search", {
      keyword, lat, long,
    })),
    specialitySearch: (keyword, lat, long) => from(api.get<SpecialitySearchResponse>("specialties/search", {
      keyword, lat, long,
    })),
  };


  // ------
  // STEP 3
  // ------
  //
  // Return back a collection of functions that we would consider our
  // interface.  Most of the time it'll be just the list of all the
  // methods in step 2.
  //
  // Notice we're not returning back the `api` created in step 1?  That's
  // because it is scoped privately.  This is one way to create truly
  // private scoped goodies in JavaScript.
  //
  return commonAPI;
};

// let's return back our create method as the default.
export default {
  createAPI,
};
