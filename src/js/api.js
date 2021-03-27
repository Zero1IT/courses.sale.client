import AuthService from "./services/AuthService";

const apiPath = 'https://localhost:8080/api/';

/**
 * @param path {String}
 * @param init {RequestInit}
 * @return {Promise<Response>}
 */
const api = {
  /**
   * @param path
   * @param body
   * @param params
   * @param init
   * @return {Promise<Response>}
   */
  post(path, body, params = null, init= null) {
    return this.withAuth(apiPath + path, 'post', init, params, body)
  },

  /**
   * @param path
   * @param params
   * @param init
   * @return {Promise<Response>}
   */
  get(path, params = null, init= null) {
    return this.withAuth(apiPath + path, 'get', init, params)
  },

  /**
   * @param path
   * @param body
   * @param params
   * @param init
   * @return {Promise<Response>}
   */
  put(path, body, params = null, init= null) {
    return this.withAuth(apiPath + path, 'put', init, params)
  },

  /**
   * @param path
   * @param params
   * @param init
   * @return {Promise<Response>}
   */
  delete(path, params = null, init= null) {
    return this.withAuth(apiPath + path, 'delete', init, params)
  },

  /**
   * @param url
   * @param method
   * @param init
   * @param urlParams
   * @param body
   * @return {Promise<Response>}
   */
  async withAuth(url, method, init, urlParams, body) {
    const access = await AuthService.getAuthToken();
    const headers = {
      'Content-Type': 'application/json',
      ...(init ? init.headers : null)
    }
    if (access) {
      headers['Authorization'] = `Bearer ${access}`;
    }
    const params = {
      ...init,
      method,
      headers,
      body: (typeof body === 'string') ? body : JSON.stringify(body)
    }

    const urlSearchParams = new URLSearchParams();
    if (urlParams) {
      for (let key in urlParams) {
        urlSearchParams.append(key, urlParams[key]);
      }
    }

    return fetch(`${url}?${urlSearchParams}`, params);
  },

  // TODO: provide specific error handler and error page
  /**
   * @param path - refresh url
   * @param token - refresh token
   * @return {Promise<Response>}
   */
  refreshTokenQuery(path, token) {
    return fetch(apiPath + path, {
      method: 'post',
      body: token
    });
  }
}

export default api;