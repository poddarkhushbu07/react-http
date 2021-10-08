export declare const URL = "https://api-dev.hivepro.in:10443/artms-dev-v2-1-api";
export declare const HttpConstants: {
    authorizationKey: string;
    securityToken: string;
    headers: {
        [key: string]: string;
    };
};
export declare enum HttpMethodTypes {
    'GET' = "GET",
    'POST' = "POST",
    'PUT' = "PUT"
}
export declare enum HttpResponseTypes {
    'blob' = "blob",
    'json' = "json",
    'arraybuffer' = "arraybuffer",
    'document' = "document",
    'text' = "text",
    'stream' = "stream"
}
