import { AxiosError, AxiosResponse } from 'axios';
import * as React from 'react';
import { HttpMethodTypes, HttpResponseTypes } from './server.constants';
import Cookie from 'universal-cookie';
export declare const cookies: Cookie;
declare class HttpService {
    unAuthorizedError: boolean | undefined;
    constructor();
    /**
     * HTTP GET API USING AXIOS
     * @param {string} endPoint
     * @param {object | string} [params]
     * @param {string} [contentType]
     * @param {string} [backendUrl]
     * @param {{ [key: string]: string }} [extraHeaders]
     * @param {HttpResponseTypes} [responseType = HttpResponseTypes.json]
     * @param {boolean} [withCredentials]
     */
    get(endPoint: string, params?: object | string, contentType?: string, backendUrl?: string, extraHeaders?: {
        [key: string]: string;
    }, responseType?: HttpResponseTypes, withCredentials?: boolean): Promise<any>;
    /**
     * HTTP GET API USING AXIOS - BY PASSING FULL URL
     * @param {string} url
     * @param {object | string} [params]
     * @param {string} [contentType]
     * @param {{ [key: string]: string }} [extraHeaders]
     * @param {HttpResponseTypes} [responseType = HttpResponseTypes.json]
     * @param {boolean} [withCredentials]
     */
    getFromUrl(url: string, params?: object | string, contentType?: string, extraHeaders?: {
        [key: string]: string;
    }, responseType?: HttpResponseTypes, withCredentials?: boolean): Promise<any>;
    /**
     * HTTP GET API USING AXIOS - BY PASSING FULL URL & HttpConstants.headers will not be sent in request
     * @param {string} url
     * @param {object | string} [params]
     * @param {string} [contentType]
     * @param {{ [key: string]: string }} [extraHeaders]
     * @param {HttpResponseTypes} [responseType = HttpResponseTypes.json]
     * @param {boolean} [withCredentials]
     */
    getFromUrlWithoutHeader(endPoint: string, params?: object | string, contentType?: string, extraHeaders?: {
        [key: string]: string;
    }, responseType?: HttpResponseTypes, withCredentials?: boolean): Promise<any>;
    /**
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
    post(endPoint: string, requestBody: object, params?: object | string, body?: object, contentType?: string, backendUrl?: string, extraHeaders?: {
        [key: string]: string;
    }, responseType?: HttpResponseTypes, withCredentials?: boolean): Promise<any>;
    /**
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
    postFromUrl(url: string, requestBody: object, params?: object | string, body?: object, contentType?: string, extraHeaders?: {
        [key: string]: string;
    }, responseType?: HttpResponseTypes, withCredentials?: boolean): Promise<any>;
    /**
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
    postFromUrlWithoutHeader(url: string, requestBody: object, params?: object | string, body?: object, contentType?: string, extraHeaders?: {
        [key: string]: string;
    }, responseType?: HttpResponseTypes, withCredentials?: boolean): Promise<any>;
    /**
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
    put(endPoint: string, requestBody: object, params?: object | string, body?: object, contentType?: string, backendUrl?: string, extraHeaders?: {
        [key: string]: string;
    }, responseType?: HttpResponseTypes, withCredentials?: boolean): Promise<any>;
    /**
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
    putFromUrl(url: string, requestBody: object, params?: object | string, body?: object, contentType?: string, extraHeaders?: {
        [key: string]: string;
    }, responseType?: HttpResponseTypes, withCredentials?: boolean): Promise<any>;
    /**
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
    putFromUrlWithoutHeader(url: string, requestBody: object, params?: object | string, body?: object, contentType?: string, extraHeaders?: {
        [key: string]: string;
    }, responseType?: HttpResponseTypes, withCredentials?: boolean): Promise<any>;
    /**
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
    delete(endPoint: string, params?: object | string, body?: object, contentType?: string, backendUrl?: string, extraHeaders?: {
        [key: string]: string;
    }, responseType?: HttpResponseTypes, withCredentials?: boolean): Promise<any>;
    /**
     * HTTP DELETE API USING AXIOS - BY PASSING FULL URL
     * @param {string} url
     * @param {object | string} [params]
     * @param {object} [body]
     * @param {string} [contentType]
     * @param {{ [key: string]: string }} [extraHeaders]
     * @param {HttpResponseTypes} [responseType = HttpResponseTypes.json]
     * @param {boolean} [withCredentials]
     */
    deleteFromUrl(url: string, params?: object | string, body?: object, contentType?: string, extraHeaders?: {
        [key: string]: string;
    }, responseType?: HttpResponseTypes, withCredentials?: boolean): Promise<any>;
    /**
     * HTTP DELETE API USING AXIOS - BY PASSING FULL URL & HttpConstants.headers will not be sent in request
     * @param {string} url
     * @param {object | string} [params]
     * @param {object} [body]
     * @param {string} [contentType]
     * @param {{ [key: string]: string }} [extraHeaders]
     * @param {HttpResponseTypes} [responseType = HttpResponseTypes.json]
     * @param {boolean} [withCredentials]
     */
    deleteFromUrlWithoutHeader(url: string, params?: object | string, body?: object, contentType?: string, extraHeaders?: {
        [key: string]: string;
    }, responseType?: HttpResponseTypes, withCredentials?: boolean): Promise<any>;
    handleCatchBlock: (httpError: AxiosError, count: number, resolve: any, reject: any, takeCallback: () => {}) => Promise<void>;
    processError(error: any | any): Promise<string>;
    getApiCall: (url: string, request: any, extraHeaders: {
        [key: string]: string;
    }) => Promise<any>;
    storeAccessTokenResponse: (access_token: string, expires_in: string, refresh_token: string) => void;
    checkToken(): Promise<any>;
    getAccessToken(): string;
    removeUsersDetailsAndRedirect(): void;
    refreshToken(): Promise<any>;
    formatData(data: any): string;
    fileUploadProgress: any;
    /**
     * MULTIPART REQUEST USING AXIOS
     * @param {string} endPoint
     * @param {FormData} formData
     * @param {HttpMethodTypes} [methodType = HttpMethodTypes.GET]
     * @param {string} [backendUrl]
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
    multipart(endPoint: string, formData: FormData, methodType?: HttpMethodTypes, backendUrl?: string, responseType?: HttpResponseTypes, authKey?: string, uploadProgressEvent?: any): Promise<AxiosResponse<any>>;
    /**
     * MULTIPART REQUEST USING AXIOS - BY PASSING FULL URL
     * @param {string} url
     * @param {FormData} formData
     * @param {HttpMethodTypes} [methodType = HttpMethodTypes.GET]
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
    multipartFromUrl(url: string, formData: FormData, methodType?: HttpMethodTypes, responseType?: HttpResponseTypes, authKey?: string, uploadProgressEvent?: (progressEvent: any) => void): Promise<AxiosResponse<any>>;
    multipartApiCall: (endPoint: string, formData: FormData, methodType?: HttpMethodTypes, backendUrl?: string | undefined, uploadProgressEvent?: ((progressEvent: any) => void) | undefined, responseType?: HttpResponseTypes, authKey?: string) => Promise<AxiosResponse<any>>;
    private getRequestOptions;
    private getRequestOptionsForWithoutHeader;
}
declare const httpService: HttpService;
export default httpService;
export declare const HttpContext: React.Context<HttpService>;
