export const url = 'https://localhost:8080';

/**
 * Returns default array with error object for unexpected request error
 * First element of array is always empty data, second element is object with panic field
 * @return {(*[]|{panic: boolean})[]}
 */
export function panicWithData(e) {
  return [[], {panic: true, error: e}];
}

/**
 * Returns default array with status object for bad request
 * First element of array is always empty data, second element is object with response status
 * @param status - response status
 * @param response - response object
 * @return {(*[]|{status: *})[]}
 */
export function badStatusWithData(status, response = null) {
  return [[], {status, response}];
}

/**
 * Accept only 2xx result codes, rethrow response error with custom object
 * @param awaitableRequest
 * @return {Promise<*|*[]|{status: *}>}
 */
export async function acceptOkJsonResponse(awaitableRequest) {
  const result = await handleDataRequest(awaitableRequest);
  if (result) {
    if (result.length > 1) {
      throw result[1];
    } else {
      return result[0];
    }
  }

  return null;
}

/**
 * Return json body from response as first element of array
 * Function return data only if response status is OK (200)
 * @param awaitableRequest {Promise<Response>}
 * @return {Promise<any[]|[[], {status: *}]>}
 */
async function handleDataRequest(awaitableRequest) {
  try {
    const response = await awaitableRequest;
    const isJson = response.headers.get('content-type')?.toLowerCase()?.indexOf('application/json') !== -1;
    if (response.ok) {
      try {
        return isJson ? [await response.json()] : null;
      } catch (e) {
        return null;
      }
    } else {
      return isJson ? badStatusWithData(response.status, await response.json()) : badStatusWithData(response.status);
    }
  } catch (e) {
    return panicWithData(e);
  }
}
