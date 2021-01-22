import api from "../api";

class UserService {
  url = 'admin/users/'

  async loadUsers(page, params= {}, limit= 10) {
    try {
      const urlSearchParams = new URLSearchParams();
      for (let paramsKey in params) {
        urlSearchParams.append(paramsKey, params[paramsKey]);
      }

      const response = await api(this.url + page + urlSearchParams);
      return await response.json();
    } catch (e) {
      return [[], {panic: true}]
    }
  }
}

export default new UserService();