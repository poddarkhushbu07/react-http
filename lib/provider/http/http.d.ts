import { AxiosResponse } from 'axios';
import * as React from 'react';
import { HttpMethodTypes, HttpResponseTypes } from './server.constants';
import Cookie from 'universal-cookie';
export declare const cookies: Cookie;
declare class HttpService {
    unAuthorizedError: boolean | undefined;
    constructor();
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
    get(endPoint: string, params?: object | string, contentType?: string, backendUrl?: string, extraHeaders?: {
        [key: string]: string;
    }, responseType?: HttpResponseTypes, withCredentials?: boolean): Promise<any>;
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
    getFromUrl(url: string, params?: object | string, contentType?: string, extraHeaders?: {
        [key: string]: string;
    }, responseType?: HttpResponseTypes, withCredentials?: boolean): Promise<any>;
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
    getFromUrlWithoutHeader(endPoint: string, params?: object | string, contentType?: string, extraHeaders?: {
        [key: string]: string;
    }, responseType?: HttpResponseTypes, withCredentials?: boolean): Promise<any>;
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
    post(endPoint: string, requestBody: object, params?: object | string, body?: object, contentType?: string, backendUrl?: string, extraHeaders?: {
        [key: string]: string;
    }, responseType?: HttpResponseTypes, withCredentials?: boolean): Promise<any>;
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
    postFromUrl(url: string, requestBody: object, params?: object | string, body?: object, contentType?: string, extraHeaders?: {
        [key: string]: string;
    }, responseType?: HttpResponseTypes, withCredentials?: boolean): Promise<any>;
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
    postFromUrlWithoutHeader(url: string, requestBody: object, params?: object | string, body?: object, contentType?: string, extraHeaders?: {
        [key: string]: string;
    }, responseType?: HttpResponseTypes, withCredentials?: boolean): Promise<any>;
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
    put(endPoint: string, requestBody: object, params?: object | string, body?: object, contentType?: string, backendUrl?: string, extraHeaders?: {
        [key: string]: string;
    }, responseType?: HttpResponseTypes, withCredentials?: boolean): Promise<any>;
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
    putFromUrl(url: string, requestBody: object, params?: object | string, body?: object, contentType?: string, extraHeaders?: {
        [key: string]: string;
    }, responseType?: HttpResponseTypes, withCredentials?: boolean): Promise<any>;
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
    putFromUrlWithoutHeader(url: string, requestBody: object, params?: object | string, body?: object, contentType?: string, extraHeaders?: {
        [key: string]: string;
    }, responseType?: HttpResponseTypes, withCredentials?: boolean): Promise<any>;
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
    delete(endPoint: string, params?: object | string, body?: object, contentType?: string, backendUrl?: string, extraHeaders?: {
        [key: string]: string;
    }, responseType?: HttpResponseTypes, withCredentials?: boolean): Promise<any>;
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
    deleteFromUrl(url: string, params?: object | string, body?: object, contentType?: string, extraHeaders?: {
        [key: string]: string;
    }, responseType?: HttpResponseTypes, withCredentials?: boolean): Promise<any>;
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
    deleteFromUrlWithoutHeader(url: string, params?: object | string, body?: object, contentType?: string, extraHeaders?: {
        [key: string]: string;
    }, responseType?: HttpResponseTypes, withCredentials?: boolean): Promise<any>;
    private handleCatchBlock;
    private processError;
    storeAccessTokenResponse: (access_token: string, expires_in: string, refresh_token: string) => void;
    private checkToken;
    getAccessToken(): string;
    removeUsersDetailsAndRedirect(): void;
    refreshToken(): Promise<any>;
    private formatData;
    /**
     * @author Khushbu Poddar (Oct'21)
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
     * @author Khushbu Poddar (Oct'21)
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
/**
 * HttpService Instance to call get, put, post, delete, multipart APIs
 * Example:
 *    httpService.get({...parameters})
 *       .then(res => console.log(res));
 *       .catch(error => console.log(error))
 */
declare const httpService: HttpService;
export default httpService;
export declare const HttpContext: React.Context<HttpService>;
