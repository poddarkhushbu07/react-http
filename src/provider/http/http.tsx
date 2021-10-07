import axios, { AxiosError, AxiosRequestConfig, AxiosResponse, Method } from 'axios';
import { timer } from 'rxjs';
import * as React from 'react';
import { HttpConstants } from './server.constants';
import Cookie from 'universal-cookie';

export const cookies = new Cookie();
const http = axios.create({
    baseURL: 'https://api-dev.hivepro.in:10443/artms-dev-v2-1-api',
    headers: {
        domain: 'HP',
        app: 'artms',
        language: 'en',
    }
});

class HttpService {
    public unAuthorizedError: boolean | undefined;

    constructor() {
        this.unAuthorizedError = false;
    }

    get(endPoint: string,
        params?: object | string,
        contentType?: string,
        backendUrl?: string,
        extraHeaders?: { [key: string]: string },
        responseType: HttpResponseTypes = HttpResponseTypes.json,
        withCredentials?: boolean) {
        return new Promise<any>((resolve, reject) => {
            let count = 0;
            let config = this.getRequestOptions(params, null, backendUrl, contentType, extraHeaders, responseType, withCredentials);
            const takeCallback = async () => {
                try {
                    const response = await http.get(endPoint, config);
                    resolve(response);
                } catch (httpError: any) {
                    count++;
                    this.handleCatchBlock(httpError, count, resolve, reject, takeCallback).then(r => {
                    });
                }
            };
            takeCallback();
        });
    }

    getFromUrl(endPoint: string,
               params?: object | string,
               contentType?: string,
               extraHeaders?: { [key: string]: string },
               responseType: HttpResponseTypes = HttpResponseTypes.json,
               withCredentials?: boolean) {
        return new Promise<any>((resolve, reject) => {
            let count = 0;
            let config = this.getRequestOptions(params, null, '/', contentType, extraHeaders, responseType, withCredentials);
            const takeCallback = async () => {
                try {
                    const response = await http.get(endPoint, config);
                    resolve(response);
                } catch (httpError: any) {
                    count++;
                    this.handleCatchBlock(httpError, count, resolve, reject, takeCallback).then(r => {
                    });
                }
            };
            takeCallback();
        });
    }

    post(endPoint: string,
         requestBody: object,
         params?: object | string,
         body?: object,
         contentType?: string,
         backendUrl?: string,
         extraHeaders?: { [key: string]: string },
         responseType: HttpResponseTypes = HttpResponseTypes.json,
         withCredentials?: boolean) {
        return new Promise<any>((resolve, reject) => {
            let count = 0;
            let config = this.getRequestOptions(params, body, backendUrl, contentType, extraHeaders, responseType, withCredentials);
            const takeCallback = async () => {
                try {
                    const response = await http.get(endPoint, config);
                    resolve(response);
                } catch (httpError: any) {
                    count++;
                    this.handleCatchBlock(httpError, count, resolve, reject, takeCallback).then();
                }
            };
            takeCallback();
        });
    }


    handleCatchBlock = async (httpError: AxiosError, count: number, resolve: any, reject: any, takeCallback: () => {}) => {
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


    processError(error: any | any): Promise<string> {
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
                resolve('error');
            }
        });
    }

    getApiCall = (url: string, request: any, extraHeaders: { [key: string]: string }) => {
        return new Promise<any>((resolve, reject) => {
            let count = 0;

            let headers: { [key: string]: string } | null = {
                Authorization: `Bearer ${this.getAccessToken()}`,
            };
            if (!extraHeaders || !extraHeaders['Content-Type']) {

                headers['Content-type'] = 'application/json';
            }
            const takeCallback = () => {
                http.get(url, {
                    headers: {...headers, ...extraHeaders, ...(request ? {params: request} : {})}
                }).then((response) => {
                    resolve(response);
                }).catch((httpError) => {
                    console.log('service');
                    console.log(httpError);
                    count++;
                    reject(httpError);
                    this.processError(httpError).then((handleError) => {
                        if (handleError === 'unAuthorizedError') {
                            this.checkToken().then(() => {
                                if (count >= 3) {
                                    reject(httpError);
                                } else {
                                    takeCallback();
                                }
                            }).catch((error: any) => {
                                reject(httpError);
                            });
                        } else if (handleError === 'success') {
                            if (count >= 3) {
                                reject(httpError);
                            } else {
                                takeCallback();
                            }
                        } else if (handleError === 'error') {
                            reject(httpError);
                        }
                    }).catch((error: any) => {
                        reject(error);
                    });
                });
            };
            takeCallback();
        });
    };

    storeAccessTokenResponse = (access_token: string, expires_in: string, refresh_token: string) => {
        cookies.set('access-token', access_token, {path: '/'});
        cookies.set('expires_in', expires_in, {path: '/'});
        cookies.set('refresh_token', refresh_token, {path: '/'});

    };


    checkToken(): Promise<any> {
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
        /* object.grant_type = 'refresh_token';
         object.refresh_token = cookies.get('refresh_token');*/
        return this.get(
            '/oauth/token',
            this.formatData(request), 'application/x-www-form-urlencoded', undefined, {
                Authorization: 'Basic cmVzdDpyZXN0',
                domain: 'HP',
                app: 'artms',
                language: 'en'
            }
        );
    }

    formatData(data: any): string {
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

    fileUploadProgress: any;

    multipart(
        endPoint: string,
        formData: FormData,
        methodType: HttpMethodTypes = HttpMethodTypes.GET,
        backendUrl?: string,
        responseType: HttpResponseTypes = HttpResponseTypes.blob,
        authKey: string = 'Authorization',
        uploadProgressEvent = (progressEvent: any) => {
            var percentCompleted = Math.round((progressEvent.loaded * 100) / progressEvent.total);
            console.log(percentCompleted);
        }
    ): Promise<AxiosResponse<any>> {
        return new Promise((resolve, reject) => {
            let count = 0;
            const takeCallback = async () => {
                try {
                    const response: AxiosResponse<any> = await this.multipartApiCall(endPoint, formData, methodType, backendUrl, uploadProgressEvent, responseType, authKey);
                    resolve(response);
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
                        backendUrl?: string,
                        uploadProgressEvent?: (progressEvent: any) => void,
                        responseType: HttpResponseTypes = HttpResponseTypes.blob,
                        authKey: string = 'Authorization'): Promise<AxiosResponse<any>> => {
        return new Promise((resolve2: any, reject2: any): any => {
            let headers: { [key: string]: string } | null = {
                Authorization: `Bearer ${this.getAccessToken()}`,
            };

            let config: AxiosRequestConfig = this.getRequestOptions(null, null, backendUrl, undefined, undefined, responseType, false, methodType);

            config.onUploadProgress = uploadProgressEvent;


            http.post(endPoint, formData, config)
                .then(res => resolve2(res))
                .catch(err => reject2(err));
        });
    };

    private getRequestOptions(params?: any,
                              body?: any,
                              backendUrl?: string,
                              contentType?: string,
                              extraHeaders?: { [key: string]: string },
                              responseType?: HttpResponseTypes, withCredentials?: boolean, methodType?: Method): AxiosRequestConfig {


        let headers: { [key: string]: string } = {
            [HttpConstants.authorizationKey]: `${HttpConstants.securityToken} ${this.getAccessToken()}`,
        };

        if (contentType) {
            headers['Content-Type'] = contentType;
        } else {
            headers['Content-Type'] = 'application/json';
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
}


export class OAuthRequestProto {
    username: string | undefined;
    password: string | undefined;
    scope: string = 'write';
    grant_type: string = 'password';
    realm: string | undefined;
    authType: string | undefined;
    refresh_token: string | undefined;
}

export enum HttpMethodTypes {
    'GET' = 'GET',
    'POST' = 'POST',
    'PUT' = 'PUT'
}


export enum HttpResponseTypes {
    'blob' = 'blob',
    'json' = 'json',
    'arraybuffer' = 'arraybuffer',
    'document' = 'document',
    'text' = 'text',
    'stream' = 'stream'
}


const httpService = new HttpService();
export default httpService;

export const HttpContext = React.createContext(httpService);

