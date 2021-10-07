export const URL = 'https://api-dev.hivepro.in:10443/artms-dev-v2-1-api';
export const HttpConstants: { authorizationKey: string, securityToken: string; headers: { [key: string]: string } } = {
    authorizationKey: 'Authorization',
    securityToken: 'Bearer',
    headers: {}
};

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
