export class HttpConstants {
    static URL = 'https://api-dev.hivepro.in:10443/artms-dev-v2-1-api';
    static authorizationKey: string = 'Authorization';
    static securityToken: string = 'Bearer';
    static headers: { [key: string]: string } = {};

    static setURL(val: string) {
        HttpConstants.URL = val;
    }

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
