import api from "../js/api";

class AuthService {
  tryLogin = async () => {
    try {
      let access = this.getAccessToken();

      if (access) {
        return access;
      } else {
        const refresh = this.getRefreshToken();

        if (refresh) {
          const response = await api("auth/refresh", {
            method: 'post', body: refresh
          });

          if (response.ok) {
            return await this.ejectTokens(response);
          }
        }
      }

      return null;
    } catch (e) {
      return null;
    }
  }

  getRefreshToken = () => {
    return this.returnIfNotExpired(localStorage.getItem("TOKEN"));
  }

  getAccessToken = () => {
    return this.returnIfNotExpired(localStorage.getItem("ACS"));
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

  initiateLogin = async (data) => {
    if (data.email && data.password) {
      try {
        const response = await api("auth/login", {
          method: 'post', body: JSON.stringify(data)
        })
        console.log(this);
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
}

export default new AuthService();