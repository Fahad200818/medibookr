// a library to wrap and simplify api calls
import {create as apicreate} from "apisauce";
import AppConfig from "@root/App/Config/AppConfig";

export interface AuthAPI {

}

// our "constructor"
const createAuthAPI = (authorization: string): AuthAPI => {
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
      "Authorization": `Bearer ${authorization}`,
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

  const auth: AuthAPI = {

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
  return auth;
};

// let's return back our create method as the default.
export default {
  createAPI: createAuthAPI,
};
