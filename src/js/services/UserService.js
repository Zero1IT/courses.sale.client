import {acceptOkJsonResponse} from "./responseResults";
import api from "../api";

class UserService {
  url = 'users'

  async loadCurrentProfile() {
    return acceptOkJsonResponse(api.get(this.url));
  }
}

export default new UserService();