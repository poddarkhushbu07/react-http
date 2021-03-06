import axios, { AxiosError, AxiosRequestConfig, AxiosResponse, Method } from 'axios';
import { timer } from 'rxjs';
import * as React from 'react';
import { HttpConstants, HttpMethodTypes, HttpResponseTypes } from './server.constants';
import Cookie from 'universal-cookie';

export const cookies = new Cookie();

const http = axios.create({
    baseURL: HttpConstants.URL,
    headers: HttpConstants.headers
});

class HttpService {
    public unAuthorizedError: boolean | undefined;

    constructor() {
        this.unAuthorizedError = false;
    }

    /**
     * @author Khushbu Poddar (Oct'21)
     * HTTP GET API USING AXIOS
     * @param {string} endPoint
     * @param {object | string} [params]
     * @param {string} [contentType]
     * @param {string} [backendUrl]
     * @param {{ [key: string]: string }} [extraHeaders]
     * @param {HttpResponseTypes} [responseType = HttpResponseTypes.json]
     * @param {boolean} [withCredentials]
     */
    get(endPoint: string,
        params?: object | string,
        contentType?: string | null,
        backendUrl?: string | null,
        extraHeaders?: { [key: string]: string } | null,
        responseType: HttpResponseTypes = HttpResponseTypes.json,
        withCredentials?: boolean) {
        return new Promise<any>((resolve, reject) => {
            let count = 0;
            let config = this.getRequestOptions(params, null, backendUrl, contentType, extraHeaders, responseType, withCredentials);
            const takeCallback = async () => {
                try {
                    const response = await http.get(endPoint, config);
                    resolve(response.data);
                } catch (httpError: any) {
                    count++;
                    this.handleCatchBlock(httpError, count, resolve, reject, takeCallback).then(r => {
                    });
                }
            };
            takeCallback();
        });
    }

    /**
     * @author Khushbu Poddar (Oct'21)
     * HTTP GET API USING AXIOS - BY PASSING FULL URL
     * @param {string} url
     * @param {object | string} [params]
     * @param {string} [contentType]
     * @param {{ [key: string]: string }} [extraHeaders]
     * @param {HttpResponseTypes} [responseType = HttpResponseTypes.json]
     * @param {boolean} [withCredentials]
     */
    getFromUrl(url: string,
               params?: object | string,
               contentType?: string | null,
               extraHeaders?: { [key: string]: string } | null,
               responseType: HttpResponseTypes = HttpResponseTypes.json,
               withCredentials?: boolean) {
        return new Promise<any>((resolve, reject) => {
            let count = 0;
            let config = this.getRequestOptions(params, null, '/', contentType, extraHeaders, responseType, withCredentials);
            const takeCallback = async () => {
                try {
                    const response = await http.get(url, config);
                    resolve(response.data);
                } catch (httpError: any) {
                    count++;
                    this.handleCatchBlock(httpError, count, resolve, reject, takeCallback).then(r => {
                    });
                }
            };
            takeCallback();
        });
    }

    /**
     * @author Khushbu Poddar (Oct'21)
     * HTTP GET API USING AXIOS - BY PASSING FULL URL & HttpConstants.headers will not be sent in request
     * @param {string} url
     * @param {object | string} [params]
     * @param {string} [contentType]
     * @param {{ [key: string]: string }} [extraHeaders]
     * @param {HttpResponseTypes} [responseType = HttpResponseTypes.json]
     * @param {boolean} [withCredentials]
     */
    getFromUrlWithoutHeader(endPoint: string,
                            params?: object | string,
                            contentType?: string | null,
                            extraHeaders?: { [key: string]: string } | null,
                            responseType: HttpResponseTypes = HttpResponseTypes.json,
                            withCredentials?: boolean) {
        return new Promise<any>((resolve, reject) => {
            let count = 0;
            let config = this.getRequestOptionsForWithoutHeader(params, null, contentType, extraHeaders, responseType, withCredentials);
            const takeCallback = async () => {
                try {
                    const response = await http.get(endPoint, config);
                    resolve(response.data);
                } catch (httpError: any) {
                    count++;
                    this.handleCatchBlock(httpError, count, resolve, reject, takeCallback).then(r => {
                    });
                }
            };
            takeCallback();
        });
    }

    /**
     * @author Khushbu Poddar (Oct'21)
     * HTTP POST API USING AXIOS
     * @param {string} endPoint
     * @param {object} [requestBody]
     * @param {object | string} [params]
     * @param {object} [body]
     * @param {string} [contentType]
     * @param {string} [backendUrl]
     * @param {{ [key: string]: string }} [extraHeaders]
     * @param {HttpResponseTypes} [responseType = HttpResponseTypes.json]
     * @param {boolean} [withCredentials]
     */
    post(endPoint: string,
         requestBody: object | undefined,
         params?: object | string,
         body?: object,
         contentType?: string | null,
         backendUrl?: string | null,
         extraHeaders?: { [key: string]: string } | null,
         responseType: HttpResponseTypes = HttpResponseTypes.json,
         withCredentials?: boolean) {
        return new Promise<any>((resolve, reject) => {
            let count = 0;
            let config = this.getRequestOptions(params, body, backendUrl, contentType, extraHeaders, responseType, withCredentials);
            const takeCallback = async () => {
                try {
                    const response = await http.post(endPoint, requestBody, config);
                    resolve(response.data);
                } catch (httpError: any) {
                    count++;
                    this.handleCatchBlock(httpError, count, resolve, reject, takeCallback).then();
                }
            };
            takeCallback();
        });
    }

    /**
     * @author Khushbu Poddar (Oct'21)
     * HTTP POST API USING AXIOS - BY PASSING FULL URL
     * @param {string} url
     * @param {object} [requestBody]
     * @param {object | string} [params]
     * @param {object} [body]
     * @param {string} [contentType]
     * @param {{ [key: string]: string }} [extraHeaders]
     * @param {HttpResponseTypes} [responseType = HttpResponseTypes.json]
     * @param {boolean} [withCredentials]
     */
    postFromUrl(url: string,
                requestBody: object | undefined,
                params?: object | string,
                body?: object,
                contentType?: string | null,
                extraHeaders?: { [key: string]: string } | null,
                responseType: HttpResponseTypes = HttpResponseTypes.json,
                withCredentials?: boolean) {
        return new Promise<any>((resolve, reject) => {
            let count = 0;
            let config = this.getRequestOptions(params, body, '/', contentType, extraHeaders, responseType, withCredentials);
            const takeCallback = async () => {
                try {
                    const response = await http.post(url, requestBody, config);
                    resolve(response.data);
                } catch (httpError: any) {
                    count++;
                    this.handleCatchBlock(httpError, count, resolve, reject, takeCallback).then();
                }
            };
            takeCallback();
        });
    }

    /**
     * @author Khushbu Poddar (Oct'21)
     * HTTP POST API USING AXIOS - BY PASSING FULL URL & HttpConstants.headers will not be sent in request
     * @param {string} url
     * @param {object} [requestBody]
     * @param {object | string} [params]
     * @param {object} [body]
     * @param {string} [contentType]
     * @param {{ [key: string]: string }} [extraHeaders]
     * @param {HttpResponseTypes} [responseType = HttpResponseTypes.json]
     * @param {boolean} [withCredentials]
     */
    postFromUrlWithoutHeader(url: string,
                             requestBody: object | undefined,
                             params?: object | string,
                             body?: object,
                             contentType?: string | null,
                             extraHeaders?: { [key: string]: string } | null,
                             responseType: HttpResponseTypes = HttpResponseTypes.json,
                             withCredentials?: boolean) {
        return new Promise<any>((resolve, reject) => {
            let count = 0;
            let config = this.getRequestOptionsForWithoutHeader(params, null, contentType, extraHeaders, responseType, withCredentials);
            const takeCallback = async () => {
                try {
                    const response = await http.post(url, requestBody, config);
                    resolve(response.data);
                } catch (httpError: any) {
                    count++;
                    this.handleCatchBlock(httpError, count, resolve, reject, takeCallback).then();
                }
            };
            takeCallback();
        });
    }

    /**
     * @author Khushbu Poddar (Oct'21)
     * HTTP PUT API USING AXIOS
     * @param {string} endPoint
     * @param {object} [requestBody]
     * @param {object | string} [params]
     * @param {object} [body]
     * @param {string} [contentType]
     * @param {{ [key: string]: string }} [extraHeaders]
     * @param {HttpResponseTypes} [responseType = HttpResponseTypes.json]
     * @param {boolean} [withCredentials]
     */
    put(endPoint: string,
        requestBody: object | undefined,
        params?: object | string,
        body?: object,
        contentType?: string | null,
        backendUrl?: string | null,
        extraHeaders?: { [key: string]: string } | null,
        responseType: HttpResponseTypes = HttpResponseTypes.json,
        withCredentials?: boolean) {
        return new Promise<any>((resolve, reject) => {
            let count = 0;
            let config = this.getRequestOptions(params, body, backendUrl, contentType, extraHeaders, responseType, withCredentials);
            const takeCallback = async () => {
                try {
                    const response = await http.put(endPoint, requestBody, config);
                    resolve(response.data);
                } catch (httpError: any) {
                    count++;
                    this.handleCatchBlock(httpError, count, resolve, reject, takeCallback).then();
                }
            };
            takeCallback();
        });
    }

    /**
     * @author Khushbu Poddar (Oct'21)
     * HTTP PUT API USING AXIOS - BY PASSING FULL URL
     * @param {string} url
     * @param {object} [requestBody]
     * @param {object | string} [params]
     * @param {object} [body]
     * @param {string} [contentType]
     * @param {{ [key: string]: string }} [extraHeaders]
     * @param {HttpResponseTypes} [responseType = HttpResponseTypes.json]
     * @param {boolean} [withCredentials]
     */
    putFromUrl(url: string,
               requestBody: object | undefined,
               params?: object | string,
               body?: object,
               contentType?: string | null,
               extraHeaders?: { [key: string]: string } | null,
               responseType: HttpResponseTypes = HttpResponseTypes.json,
               withCredentials?: boolean) {
        return new Promise<any>((resolve, reject) => {
            let count = 0;
            let config = this.getRequestOptions(params, body, '/', contentType, extraHeaders, responseType, withCredentials);
            const takeCallback = async () => {
                try {
                    const response = await http.put(url, requestBody, config);
                    resolve(response.data);
                } catch (httpError: any) {
                    count++;
                    this.handleCatchBlock(httpError, count, resolve, reject, takeCallback).then();
                }
            };
            takeCallback();
        });
    }

    /**
     * @author Khushbu Poddar (Oct'21)
     * HTTP PUT API USING AXIOS - BY PASSING FULL URL & HttpConstants.headers will not be sent in request
     * @param {string} url
     * @param {object} [requestBody]
     * @param {object | string} [params]
     * @param {object} [body]
     * @param {string} [contentType]
     * @param {{ [key: string]: string }} [extraHeaders]
     * @param {HttpResponseTypes} [responseType = HttpResponseTypes.json]
     * @param {boolean} [withCredentials]
     */
    putFromUrlWithoutHeader(url: string,
                            requestBody: object | undefined,
                            params?: object | string,
                            body?: object,
                            contentType?: string | null,
                            extraHeaders?: { [key: string]: string } | null,
                            responseType: HttpResponseTypes = HttpResponseTypes.json,
                            withCredentials?: boolean) {
        return new Promise<any>((resolve, reject) => {
            let count = 0;
            let config = this.getRequestOptionsForWithoutHeader(params, null, contentType, extraHeaders, responseType, withCredentials);
            const takeCallback = async () => {
                try {
                    const response = await http.put(url, requestBody, config);
                    resolve(response.data);
                } catch (httpError: any) {
                    count++;
                    this.handleCatchBlock(httpError, count, resolve, reject, takeCallback).then();
                }
            };
            takeCallback();
        });
    }


    /**
     * @author Khushbu Poddar (Oct'21)
     * HTTP DELETE API USING AXIOS
     * @param {string} endPoint
     * @param {object | string} [params]
     * @param {object} [body]
     * @param {string} [contentType]
     * @param {string} [backendUrl]
     * @param {{ [key: string]: string }} [extraHeaders]
     * @param {HttpResponseTypes} [responseType = HttpResponseTypes.json]
     * @param {boolean} [withCredentials]
     */
    delete(endPoint: string,
           params?: object | string,
           body?: object,
           contentType?: string | null,
           backendUrl?: string | null,
           extraHeaders?: { [key: string]: string } | null,
           responseType: HttpResponseTypes = HttpResponseTypes.json,
           withCredentials?: boolean) {
        return new Promise<any>((resolve, reject) => {
            let count = 0;
            let config = this.getRequestOptions(params, body, backendUrl, contentType, extraHeaders, responseType, withCredentials);
            const takeCallback = async () => {
                try {
                    const response = await http.delete(endPoint, config);
                    resolve(response.data);
                } catch (httpError: any) {
                    count++;
                    this.handleCatchBlock(httpError, count, resolve, reject, takeCallback).then();
                }
            };
            takeCallback();
        });
    }

    /**
     * @author Khushbu Poddar (Oct'21)
     * HTTP DELETE API USING AXIOS - BY PASSING FULL URL
     * @param {string} url
     * @param {object | string} [params]
     * @param {object} [body]
     * @param {string} [contentType]
     * @param {{ [key: string]: string }} [extraHeaders]
     * @param {HttpResponseTypes} [responseType = HttpResponseTypes.json]
     * @param {boolean} [withCredentials]
     */
    deleteFromUrl(url: string,
                  params?: object | string,
                  body?: object,
                  contentType?: string | null,
                  extraHeaders?: { [key: string]: string } | null,
                  responseType: HttpResponseTypes = HttpResponseTypes.json,
                  withCredentials?: boolean) {
        return new Promise<any>((resolve, reject) => {
            let count = 0;
            let config = this.getRequestOptions(params, body, '/', contentType, extraHeaders, responseType, withCredentials);
            const takeCallback = async () => {
                try {
                    const response = await http.delete(url, config);
                    resolve(response.data);
                } catch (httpError: any) {
                    count++;
                    this.handleCatchBlock(httpError, count, resolve, reject, takeCallback).then();
                }
            };
            takeCallback();
        });
    }

    /**
     * @author Khushbu Poddar (Oct'21)
     * HTTP DELETE API USING AXIOS - BY PASSING FULL URL & HttpConstants.headers will not be sent in request
     * @param {string} url
     * @param {object | string} [params]
     * @param {object} [body]
     * @param {string} [contentType]
     * @param {{ [key: string]: string }} [extraHeaders]
     * @param {HttpResponseTypes} [responseType = HttpResponseTypes.json]
     * @param {boolean} [withCredentials]
     */
    deleteFromUrlWithoutHeader(url: string,
                               params?: object | string,
                               body?: object,
                               contentType?: string | null,
                               extraHeaders?: { [key: string]: string } | null,
                               responseType: HttpResponseTypes = HttpResponseTypes.json,
                               withCredentials?: boolean) {
        return new Promise<any>((resolve, reject) => {
            let count = 0;
            let config = this.getRequestOptionsForWithoutHeader(params, null, contentType, extraHeaders, responseType, withCredentials);
            const takeCallback = async () => {
                try {
                    const response = await http.delete(url, config);
                    resolve(response.data);
                } catch (httpError: any) {
                    count++;
                    this.handleCatchBlock(httpError, count, resolve, reject, takeCallback).then();
                }
            };
            takeCallback();
        });
    }


    private handleCatchBlock = async (httpError: AxiosError, count: number, resolve: any, reject: any, takeCallback: () => {}) => {
        try {
            const handleError = await this.processError(httpError.response);
            if (handleError === 'unAuthorizedError') {
                this.checkToken().then(() => {
                    if (count >= 3) {
                        reject(httpError.response);
                    } else {
                        takeCallback();
                    }
                }).catch((error: any) => {
                    reject(httpError.response);
                });
            } else if (handleError === 'success') {
                if (count >= 3) {
                    reject(httpError.response);
                } else {
                    takeCallback();
                }
            } else if (handleError === 'error') {
                reject(httpError.response);
            }
        } catch (error: any) {
            reject(error);
        }
    };


    private processError(error: any | any): Promise<string> {
        return new Promise<any>((resolve: any, reject: any) => {
            if (error.status === 401) {
                if (this.unAuthorizedError) {
                    resolve('unAuthorizedError');
                } else {
                    this.unAuthorizedError = true;
                    this.refreshToken()
                        .then((response: any) => {
                            this.storeAccessTokenResponse(response.data.access_token, response.data.expires_in, response.data.refresh_token);
                            this.unAuthorizedError = false;
                            resolve('success');
                        }).catch(tokenError => {
                        this.removeUsersDetailsAndRedirect();
                        this.unAuthorizedError = false;
                        resolve('error');
                    });
                }
            } else {
                HttpConstants.errorHandler(error);
                resolve('error');
            }
        });
    }

    storeAccessTokenResponse = (access_token: string, expires_in: string, refresh_token: string) => {
        cookies.set('access-token', access_token, {path: '/'});
        cookies.set('expires_in', expires_in, {path: '/'});
        cookies.set('refresh_token', refresh_token, {path: '/'});

    };


    private checkToken(): Promise<any> {
        return new Promise((resolve) => {
            let count = 0;
            const timerSub = timer(1000, 1000);
            const subscription = timerSub.subscribe((time: any) => {
                count++;
                if (count > 5) {
                    subscription.unsubscribe();
                    resolve(true);
                }
                if (this.getAccessToken()) {
                    subscription.unsubscribe();
                    resolve(true);
                }
            });
        });
    }

    getAccessToken(): string {
        return cookies.get('access-token');
    }

    removeUsersDetailsAndRedirect() {
        cookies.remove('access-token');
        cookies.remove('refresh_token');
        cookies.remove('expires_in');
        //   this.router.navigate([AuthServiceConstants.redirectPath]);
    }

    refreshToken(): Promise<any> {
        cookies.remove('access-token');
        /* const object = new OAuthRequestProto();
         delete object.username;
         delete object.password;
         delete object.realm;
         delete object.authType;*/
        let request = {
            scope: 'write',
            grant_type: 'refresh_token',
            refresh_token: cookies.get('refresh_token')
        };
        let requestString = new URLSearchParams(request);
        return this.post(
            HttpConstants.URL + '/oauth/token',
            requestString, undefined,
            undefined, 'application/x-www-form-urlencoded', undefined, {
                Authorization: 'Basic cmVzdDpyZXN0',
                domain: 'HP',
                app: 'artms',
                language: 'en'
            }
        );
    }

    private formatData(data: any): string {
        let returnData = '';
        let count = 0;
        for (const i in data) {
            if (count === 0) {
                returnData += i + '=' + data[i];
            } else {
                returnData += '&' + i + '=' + data[i];
            }
            count = count + 1;
        }
        return returnData;
    }


    /**
     * @author Khushbu Poddar (Oct'21)
     * MULTIPART REQUEST USING AXIOS
     * @param {string} endPoint
     * @param {FormData} formData
     * @param {HttpMethodTypes} [methodType = HttpMethodTypes.GET]
     * @param {string} [backendUrl]
     * @param {{ [key: string]: string }} [extraHeaders]
     * @param {HttpResponseTypes} [responseType = HttpResponseTypes.blob]
     * @param {string} [authKey = 'Authorization']
     * @param {object | string} [params]
     * @param {*} [uploadProgressEvent] - Function to get file upload progress event
     * Sample:
     * (progressEvent: any) => {
            var percentCompleted = Math.round((progressEvent.loaded * 100) / progressEvent.total);
            console.log(percentCompleted);
        }
     */
    multipart(
        endPoint: string,
        formData: FormData,
        methodType: HttpMethodTypes = HttpMethodTypes.GET,
        backendUrl?: string | null,
        extraHeaders?: { [key: string]: string } | null,
        responseType: HttpResponseTypes = HttpResponseTypes.blob,
        uploadProgressEvent?: any
    ): Promise<any> {
        return new Promise((resolve, reject) => {
            let count = 0;
            const takeCallback = async () => {
                try {
                    const response: AxiosResponse<any> =
                        await this.multipartApiCall(endPoint, formData, methodType, backendUrl, extraHeaders,
                            uploadProgressEvent, responseType);
                    resolve(response.data);
                } catch (httpError: any) {
                    count++;
                    this.handleCatchBlock(httpError, count, resolve, reject, takeCallback).then();
                }
            };
            takeCallback();
        });

    }

    /**
     * @author Khushbu Poddar (Oct'21)
     * MULTIPART REQUEST USING AXIOS - BY PASSING FULL URL
     * @param {string} url
     * @param {FormData} formData
     * @param {HttpMethodTypes} [methodType = HttpMethodTypes.GET]
     * @param {HttpResponseTypes} [responseType = HttpResponseTypes.blob]
     * @param {object | string} [params]
     * @param {*} [uploadProgressEvent] - Function to get file upload progress event
     * Sample:
     * (progressEvent: any) => {
            var percentCompleted = Math.round((progressEvent.loaded * 100) / progressEvent.total);
            console.log(percentCompleted);
        }
     */
    multipartFromUrl(
        url: string,
        formData: FormData,
        methodType: HttpMethodTypes = HttpMethodTypes.GET,
        extraHeaders?: { [key: string]: string } | null,
        responseType: HttpResponseTypes = HttpResponseTypes.blob,
        uploadProgressEvent = (progressEvent: any) => {
            var percentCompleted = Math.round((progressEvent.loaded * 100) / progressEvent.total);
            console.log(percentCompleted);
        }
    ): Promise<any> {
        console.log(methodType);
        return new Promise((resolve, reject) => {
            let count = 0;
            const takeCallback = async () => {
                try {
                    const response: AxiosResponse<any> = await this.multipartApiCall(url,
                        formData, methodType, '/', extraHeaders,
                        uploadProgressEvent, responseType);
                    resolve(response.data);
                } catch (httpError: any) {
                    count++;
                    this.handleCatchBlock(httpError, count, resolve, reject, takeCallback).then();
                }
            };
            takeCallback();
        });

    }

    multipartApiCall = (endPoint: string,
                        formData: FormData,
                        methodType: HttpMethodTypes = HttpMethodTypes.GET,
                        backendUrl?: string | null,
                        extraHeaders?: { [key: string]: string } | null,
                        uploadProgressEvent?: (progressEvent: any) => void | null,
                        responseType: HttpResponseTypes = HttpResponseTypes.blob): Promise<AxiosResponse<any>> => {
        return new Promise((resolve2: any, reject2: any): any => {

            let config: AxiosRequestConfig =
                this.getRequestOptions(null, null, backendUrl,
                    'multipart/form-data', extraHeaders, responseType,
                    false, methodType);
            config.onUploadProgress = uploadProgressEvent;
            config.method = methodType.toLowerCase() as Method;
            config.url = endPoint;
            config.data = formData;
            http.request(config)
                .then(res => resolve2(res))
                .catch(err => reject2(err));
        });
    };

    private getRequestOptions(params?: any | null,
                              body?: any | null,
                              backendUrl?: string | null,
                              contentType?: string | null,
                              extraHeaders?: { [key: string]: string } | null,
                              responseType?: HttpResponseTypes | null, withCredentials?: boolean, methodType?: Method): AxiosRequestConfig {

        let headers: { [key: string]: string } = {
            [HttpConstants.authorizationKey]: `${HttpConstants.securityToken} ${this.getAccessToken()}`,
        };

        if (contentType) {
            headers['Content-Type'] = contentType;
        }

        /*Set Extra Headers from HttpServiceConstants*/
        if (Object.keys(HttpConstants.headers).length > 0) {
            // tslint:disable-next-line:forin
            for (const headerDataKey in HttpConstants.headers) {
                headers[headerDataKey] = HttpConstants.headers[headerDataKey];
            }
        }

        if (extraHeaders && Object.keys(extraHeaders).length > 0) {
            for (const headerDataKey in extraHeaders) {
                if (extraHeaders[headerDataKey]) {
                    headers[headerDataKey] = extraHeaders[headerDataKey];
                }
            }
        }
        let config: AxiosRequestConfig = {};
        config.headers = {...headers};
        if (params) {
            config.params = params;
        }
        /*Set body section*/
        config.data = {};
        if (body) {
            config.data = body;
        }
        if (backendUrl) {
            config.baseURL = backendUrl;
        } else {
            config.baseURL = HttpConstants.URL;
        }
        if (responseType) {
            config.responseType = responseType;
        }
        if (withCredentials) {
            config.withCredentials = withCredentials;
        }
        if (methodType) {
            config.method = methodType;
        }

        return config;
    }

    private getRequestOptionsForWithoutHeader(
        params?: any | null,
        body?: any | null,
        contentType?: string | null,
        extraHeaders?: any | null,
        responseType?: HttpResponseTypes | null,
        withCredentials?: boolean): AxiosRequestConfig {

        let headers: { [key: string]: string } = {};
        if (contentType) {
            headers['Content-Type'] = contentType;
        }


        if (extraHeaders && Object.keys(extraHeaders).length > 0) {
            for (const headerDataKey in extraHeaders) {
                if (extraHeaders[headerDataKey]) {
                    headers[headerDataKey] = extraHeaders[headerDataKey];
                }
            }
        }
        let config: AxiosRequestConfig = {};
        config.headers = {...headers};
        if (params) {
            config.params = params;
        }
        /*Set body section*/
        config.data = {};
        if (body) {
            config.data = body;
        }
        if (responseType) {
            config.responseType = responseType;
        }
        if (withCredentials) {
            config.withCredentials = withCredentials;
        }

        return config;
    }
}


/**
 * HttpService Instance to call get, put, post, delete, multipart APIs
 * Example:
 *    httpService.get({...parameters})
 *       .then(res => console.log(res));
 *       .catch(error => console.log(error))
 */
const httpService = new HttpService();
export default httpService;

export const HttpContext = React.createContext(httpService);

