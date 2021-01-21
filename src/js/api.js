const apiPath = 'https://localhost:8080/api/';

/**
 * @param path {String}
 * @param init {RequestInit}
 * @return {Promise<Response>}
 */
function api(path, init= null) {
  return fetch(apiPath + path, init)
}

export default api;