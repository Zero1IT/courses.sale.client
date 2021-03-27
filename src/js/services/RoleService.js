import api from "../api";
import {acceptOkJsonResponse} from "./responseResults";

/**
 * Service methods returns arrays with two elements if fetch is failure
 * If method was complete successfully returns array with one element
 * first [0]: fetched data
 * second [1]: error object, if code is not 2xx object contains `status` field (boolean, true if error)
 * if it's client error: returns error object with `panic` field (boolean, true if error)
 */
class RoleService {
  url = 'admin/roles'

  async loadRoles() {
    return acceptOkJsonResponse(api.get(this.url));
  }
}

export default new RoleService();