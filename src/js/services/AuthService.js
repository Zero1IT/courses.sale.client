import api from "../api";
import {acceptOkJsonResponse} from "./responseResults";

class AuthService {
  url = 'auth'

  tryLogin = async () => {
    try {
      const access = this.getAccessToken();

      if (access) {
        return access;
      } else {
        const refresh = this.getRefreshToken();

        if (refresh) {
          const response = await api.refreshTokenQuery(`${this.url}/refresh`, refresh);

          if (response.ok) {
            return await this.ejectTokens(response);
          }
        } else {
          this.clearTokens();
        }
      }

      return null; // TODO: check usage and redirect to home page
    } catch (e) {
      return null; // TODO: check usage and redirect to error page
    }
  }

  getRefreshToken = () => {
    return this.returnIfNotExpired(localStorage.getItem("TOKEN"));
  }

  getAccessToken = () => {
    return this.returnIfNotExpired(localStorage.getItem("ACS"));
  }

  /**
   * @return {Promise<null|undefined|*>}
   */
  getAuthToken = () => {
    return this.tryLogin();
  }

  returnIfNotExpired = token => {
    try {
      if (!token) {
        return null;
      }

      const data = JSON.parse(atob(token.split('.')[1]));
      if (!data || !data.exp) {
        return null;
      }

      const exp = new Date(Number(data.exp) * 1000);
      return exp > new Date() ? token : null;
    } catch (e) {
      this.clearTokens();
      return null;
    }
  }

  saveTokens = tokens => {
    localStorage.setItem("TOKEN", tokens.refresh);
    localStorage.setItem("ACS", tokens.access);
  }

  clearTokens = () => {
    localStorage.removeItem("TOKEN");
    localStorage.removeItem("ACS");
  }

  /**
   * If method was complete successfully second element contains field `success` with value `true`
   * first element [0]: fetched data
   * second element [1]: error object, if code is not 2xx object contains `status` field
   * if it's client error: returns error object with `panic` field (boolean type, true if error)
   * in both error cases `success` = false
   * @param credentials {{email: String, password: String}}
   * @return {Promise<(any|{success: boolean})[]|{success: boolean, status: number}[]|{success: boolean, panic: boolean}[]>}
   */
  initiateLogin = async (credentials) => {
    if (credentials.email && credentials.password) {
      try {
        const response = await api.post(`${this.url}/login`, credentials);

        if (response.ok) {
          const access = await this.ejectTokens(response);
          return [access, {
            success: true
          }];
        }

        return [null, {
          success: false,
          status: response.status
        }];
      } catch (e) {
        return [null, {
          success: false,
          panic: true
        }];
      }
    }
  }

  ejectTokens = async (response) => {
    const json = await response.json();
    this.saveTokens(json);
    return json.access;
  }

  registration = async (credentials) => {
    const result = await acceptOkJsonResponse(api.post(`${this.url}/registration`, credentials));
    if (result) {
      throw result;
    }
  }
}

export default new AuthService();