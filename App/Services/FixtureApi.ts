import {Api} from "@root/App/Services/Api";
import {from, of} from "rxjs";
import {ApiOkResponse, ApiResponse} from "apisauce";

export default (): Api => {
  const services = require("../Fixtures/services.json");
  const byName = require("../Fixtures/byname.json");
  const specialities = require("../Fixtures/specialities") as SpecialitySearchResponse;

  return {
    // Functions return fixtures

    common: {
      login: (username, password) => from(Promise.resolve({
        ok: true,
        data: null
      } as ApiResponse<any>)),
      specialitySearch: (keyword, lat, long) => from(Promise.resolve({
        ok: true,
        data: specialities
      } as ApiResponse<any>)),
      searchByName: (keyword, lat, long) => from(Promise.resolve({
        ok: true,
        data: byName
      } as ApiResponse<any>)),
      serviceSearch: (keyword, lat, long) => from(Promise.resolve({
        ok: true,
        data: services
      } as ApiResponse<any>)),
    },
    auth: {},
  };
};

/*Promise<ApiResponse<LoginResponse>> => {
  return Promise.resolve({
    ok: true,
    data: require("../Fixtures/root.json"),
  } as ApiResponse<any>);
},
};*/
