import api from "../api";
import {acceptOkJsonResponse} from "./responseResults";

/**
 * Service methods returns arrays with two elements if fetch is failure
 * If method was complete successfully returns array with one element
 * first [0]: fetched data
 * second [1]: error object, if code is not 2xx object contains `status` field (boolean, true if error)
 * if it's client error: returns error object with `panic` field (boolean, true if error)
 */
class UserControlService {
  url = 'admin/users'

  async loadUsers(page, params= {limit: 10}) {
    return acceptOkJsonResponse(api.get(`${this.url}/page`, params));
  }

  async loadUsersPage(page, params = null) {
    const pageParams = {
      page: page - 1,
      size: 10,
      sort: 'id,DESC',
      ...params
    }

    return acceptOkJsonResponse(api.get(`${this.url}/select`, pageParams));
  }

  /**
   * @param dto {{userId: Number, newRoleName: String}}
   */
  async changeRole(dto) {
    return acceptOkJsonResponse(api.post(`${this.url}/role`, dto));
  }
}

export default new UserControlService();