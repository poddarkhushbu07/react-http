import * as React from 'react';
import Cookie from 'universal-cookie';
export declare const cookies: Cookie;
declare class HttpService {
    unAuthorizedError: boolean | undefined;
    constructor();
    apiCall: (url: string, request: any, extraHeaders: {
        [key: string]: string;
    } | null) => Promise<any>;
    handleError(error: any | any): Promise<string>;
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
    multipart(endPoint: string, formData: FormData, methodType?: HttpMethodTypes, backendUrl?: string, responseType?: HttpResponseTypes, authKey?: string, uploadProgressEvent?: (progressEvent: any) => void): Promise<any>;
    multipartApiCall: (endPoint: string, formData: FormData, methodType?: HttpMethodTypes, backendUrl?: string | undefined, uploadProgressEvent?: ((progressEvent: any) => void) | undefined, responseType?: HttpResponseTypes, authKey?: string) => Promise<unknown>;
}
export declare class OAuthRequestProto {
    username: string | undefined;
    password: string | undefined;
    scope: string;
    grant_type: string;
    realm: string | undefined;
    authType: string | undefined;
    refresh_token: string | undefined;
}
export declare enum HttpMethodTypes {
    'GET' = "GET",
    'POST' = "POST",
    'PUT' = "PUT"
}
export declare enum HttpResponseTypes {
    'blob' = "blob",
    'json' = "json",
    'arraybuffer' = "arraybuffer"
}
declare const httpService: HttpService;
export default httpService;
export declare const HttpContext: React.Context<HttpService>;
