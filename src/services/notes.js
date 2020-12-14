import axios from "axios";
import decamelizeKeysDeep from "decamelize-keys-deep";
import camelcaseKeysDeep from "camelcase-keys-deep";
import qs from "qs";
import AuthStorage from "../utils/auth";

const { REACT_APP_NOTES_SERVICE_URL } = process.env;

const makeAuthorizationString = () => {
  const user = AuthStorage.getUser();
  if (!user) {
    throw new Error("Login first to make this request!");
  }

  const { id_token } = user.token;
  return id_token;
};

const defaultConfig = () => ({
  baseURL: `${REACT_APP_NOTES_SERVICE_URL}/api/v1/`,
  headers: { Authorization: makeAuthorizationString() },
  paramsSerializer: (params) =>
    qs.stringify(decamelizeKeysDeep(params), { arrayFormat: "brackets" }),
  transformRequest: [
    function decamelize(data) {
      return decamelizeKeysDeep(data);
    },
    ...axios.defaults.transformRequest,
  ],
  transformResponse: [
    ...axios.defaults.transformResponse,
    function camelcase(data) {
      return camelcaseKeysDeep(data);
    },
  ],
});

function makeRequest(url, method = "get", config = {}) {
  return axios({
    ...defaultConfig(),
    url,
    method,
    ...config,
  });
}

export default makeRequest;
