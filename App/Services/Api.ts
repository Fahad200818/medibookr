import authAPICreator, {AuthAPI} from "@root/App/Services/AuthAPI";
import apiCreator, {CommonAPI} from "@root/App/Services/UnsecureAPI";

export interface Api {
  auth: AuthAPI;
  common: CommonAPI;
}

const common = apiCreator.createAPI();

const API: Api = {
  auth: (auth: string): AuthAPI => authAPICreator.createAPI(auth),
  common,
};

export default API;
