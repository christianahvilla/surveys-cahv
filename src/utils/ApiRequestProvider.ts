const BEARER = 'Bearer';
const LOCAL_STORAGE_JWT = import.meta.env.VITE_TOKEN_JWT;
const BASE_URL = import.meta.env.VITE_API_HOST;
type RequestHeaders = {
  Accept: string;
};

type RequestParams = {
  additionalHeaders?: RequestHeaders;
  body?: Record<string, any>;
  method: any;
  params?: Record<string, any>;
  requireAuth?: boolean;
  url: string;
};

class ApiRequestProvider {
  private static instance: ApiRequestProvider;
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  private constructor() {}

  public static getInstance(): ApiRequestProvider {
    if (!ApiRequestProvider.instance) {
      ApiRequestProvider.instance = new ApiRequestProvider();
    }

    return ApiRequestProvider.instance;
  }
  /**
   * Method that will parse to json the body if possible
   * @param dispatch
   * @param response
   * @returns {Promise.<TResult>}
   */
  parseBody(response: any) {
    return Promise.resolve(response.json())
      .then((json) => json)
      .catch(() => Promise.resolve());
  }

  /**
   * Base method to call an API endpoint. You only need to pass the required parameters and will reply the response accordingly.
   * @param dispatch
   * @param method
   * @param url
   * @param requireAuth
   * @param params
   * @param body
   * @returns {Promise.<T>|*}
   */

  doRequest({ method, url, requireAuth = true, params, body, additionalHeaders }: RequestParams) {
    const isFormData = body && body.constructor.name === 'FormData';
    let commonHeaders = {
      ...additionalHeaders,
    };

    if (requireAuth) {
      commonHeaders = {
        ...commonHeaders,
        Authorization: `${BEARER} ${localStorage.getItem(LOCAL_STORAGE_JWT)}`,
      } as any;
    }

    const headers: any = isFormData
      ? { ...commonHeaders }
      : {
          ...commonHeaders,
          'Content-Type': 'application/json',
        };

    let options = {
      method,
      headers: new Headers(headers),
    };

    if (body) {
      options = Object.assign({}, options, {
        body: isFormData ? body : JSON.stringify(body),
      });
    }

    let fullUrl = `${BASE_URL}${url}`;
    if (params) {
      const queryStrParams = new URLSearchParams(params).toString();
      fullUrl = fullUrl.concat(`?${queryStrParams}`);
    }

    const request = new Request(fullUrl, options);

    return fetch(request)
      .then((response) => {
        switch (response.status) {
          case 500: {
            const serviceError = new Error('error.500');
            return Promise.reject(serviceError);
          }
          case 401: {
            const serviceError = new Error('error.401');
            return this.parseBody(response).then((_json) => {
              return Promise.reject(serviceError);
            });
          }
          case 404: {
            const serviceError = new Error('error.404');
            return this.parseBody(response).then((_json) => {
              return Promise.reject(serviceError);
            });
          }
          default: {
            break;
          }
        }

        // Status in not the range <200 to 299>
        if (!response.ok) {
          const serviceError = new Error('reponse.error');
          return this.parseBody(response).then((_json) => {
            return Promise.reject(serviceError);
          });
        }

        return response;
      })
      .catch((error) => {
        throw error;
      });
  }
}

export const ApiRequestProviderInstance = ApiRequestProvider.getInstance();
