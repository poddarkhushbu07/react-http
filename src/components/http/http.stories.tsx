import React from 'react';
import { Meta } from '@storybook/react/types-6-0';
import { Story } from '@storybook/react';
import httpService, { HttpContext, HttpMethodTypes, HttpResponseTypes } from '../../provider/http/http';
import './button.css';

export default {
    title: 'Http',
    decorators: [
        (Story) => (
            <HttpContext.Provider value={httpService}>
                <Story/>
            </HttpContext.Provider>
        ),
    ],
} as Meta;

// Create a master template for mapping args to render the Button component
const Template: Story<any> = (args, config) => {
    let apiCalls: any = {
        callGetApi: async () => {
            try {
                let req: {
                    endPoint: string,
                    params?: object,
                    contentType?: string,
                    backendUrl?: string,
                    extraHeaders?: { [key: string]: string },
                    responseType: HttpResponseTypes,
                    withCredentials?: boolean
                } = {...args} as const;
                const response = await httpService.get(req.endPoint, req.params, req.contentType, req.backendUrl, req.extraHeaders, req.responseType, req.withCredentials);
                console.log(response);
            } catch (e) {
                console.log('Http Error(from Storybook)', e);
            }
        },

        callGetApiFromUrl: async () => {
            try {
                let req: {
                    endPoint: string,
                    params?: object,
                    contentType?: string,
                    extraHeaders?: { [key: string]: string },
                    responseType: HttpResponseTypes,
                    withCredentials?: boolean
                } = {...args} as const;
                const response = await httpService.getFromUrl(req.endPoint, req.params, req.contentType, req.extraHeaders, req.responseType, req.withCredentials);
                console.log(response);
            } catch (e) {
                console.log('Http Error(from Storybook)', e);
            }
        },

        callPostApi: async () => {
            try {
                let req: {
                    endPoint: string,
                    params?: object,
                    requestBody: object,
                    contentType?: string,
                    backendUrl?: string,
                    extraHeaders?: { [key: string]: string },
                    responseType: HttpResponseTypes,
                    withCredentials?: boolean
                } = {...args} as const;
                const response = await httpService.post(req.endPoint, req.requestBody, req.params, undefined, req.contentType, req.backendUrl, req.extraHeaders, req.responseType, req.withCredentials);
                console.log(response);
            } catch (e) {
                console.log('Http Error(from Storybook)', e);
            }
        },


        callMultipartPostApi: async () => {

            try {
                let req: {
                    endPoint: string,
                    dataKeyFormData?: object,
                    backendUrl?: string,
                    extraHeaders?: { [key: string]: string },
                    methodType: HttpMethodTypes,
                    responseType: HttpResponseTypes,
                    authKey?: string,
                    uploadProgressEvent?: any
                } = {...args} as const;
                let formData = new FormData();
                formData.append('data', new Blob([JSON.stringify(req.dataKeyFormData)], {
                    type: 'application/json'
                }));
                const response = await httpService.multipart(req.endPoint, formData, req.methodType, req.backendUrl, req.responseType, req.authKey, req.uploadProgressEvent);
                console.log(response);
            } catch (e) {
                console.log('Http Error(from Storybook)', e);
            }
        }
    };
    return (<>
        <a href={'https://axios-http.com/docs/req_config'}>Link to AxiosConfig Doc</a>
        <button className="button"
                onClick={apiCalls[config?.parameters?.options?.method]}> {config?.parameters?.options?.buttonLabel}</button>
        <br/>
        {/*<button className="button" onClick={callPostApi}> Post API</button>
        <br/>
        <button className="button" onClick={callMulitpartPostApi}>XHR POST</button>
        <br/>
        <button className="button" onClick={callGetApiFromUrl}> Get From Full URL</button>
        <br/>*/}
    </>);
};


export const GET = Template.bind(undefined);
GET.args = {
    endPoint: 'users',
    params: {page: 2},
    'backendUrl': 'https://reqres.in/api/',
    'extraHeaders': null,
    responseType: null,
    withCredentials: false
};
GET.parameters = {
    options: {
        method: 'callGetApi',
        buttonLabel: 'Get API'
    }
};

export const GETFROMURL = Template.bind(undefined);
GETFROMURL.args = {
    endPoint: 'https://reqres.in/api/users',
    params: {page: 2},
    'extraHeaders': null,
    responseType: null,
    withCredentials: false
};
GETFROMURL.parameters = {
    options: {
        method: 'callGetApiFromUrl',
        buttonLabel: 'Get API From Full URL'
    }
};

export const POST = Template.bind(undefined);
POST.args = {
    endPoint: 'register',
    params: undefined,
    requestBody: {
        'email': 'sydney@fife'
    },
    'backendUrl': 'https://reqres.in/api/',
    'extraHeaders': null,
    responseType: null,
    withCredentials: false
};
POST.parameters = {
    options: {
        method: 'callPostApi',
        buttonLabel: 'Post API'
    }
};

export const MULTIPART = Template.bind(undefined);
MULTIPART.args = {
    endPoint: '/organisation/v1/pta/update/name',
    dataKeyFormData: {
        'organisationId': '60c99ebabfb45d4b7308b534',
        'orgName': 'ST',
        'orgSite': 'https://ST.test.com',
        'removeImage': false
    },
    'extraHeaders': null,
    responseType: HttpResponseTypes.blob,
    methodType: 'POST',
    uploadProgressEvent: (progressEvent: any) => {
        var percentCompleted = Math.round((progressEvent.loaded * 100) / progressEvent.total);
        console.log(percentCompleted);
    }
};
MULTIPART.parameters = {
    options: {
        method: 'callMultipartPostApi',
        buttonLabel: 'Multipart Post API'
    }
};




