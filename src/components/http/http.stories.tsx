import React, { useState } from 'react';
import { Meta } from '@storybook/react/types-6-0';
import { Story } from '@storybook/react';
import httpService, { HttpContext } from '../../provider/http/http';
import './button.css';
import { AxiosResponse } from 'axios';
import Button from '../Button/Button';
import { HttpMethodTypes, HttpResponseTypes } from '../../provider/http/server.constants';

export default {
    title: 'Http Provider',
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
    const [response, setResponse] = useState<AxiosResponse>();
    const [error, setError] = useState(null);
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
                setResponse(response);
                setError(null);
            } catch (e) {
                setResponse(undefined);
                setError(e as any);
                console.log('Http Error(from Storybook)', e);
            }
        },

        callGetApiFromUrl: async () => {
            try {
                let req: {
                    url: string,
                    params?: object,
                    contentType?: string,
                    extraHeaders?: { [key: string]: string },
                    responseType: HttpResponseTypes,
                    withCredentials?: boolean
                } = {...args} as const;
                const response = await httpService.getFromUrl(req.url, req.params, req.contentType, req.extraHeaders, req.responseType, req.withCredentials);
                setResponse(response);
                setError(null);
            } catch (e) {
                setResponse(undefined);
                setError(e as any);
                console.log('Http Error(from Storybook)', e);
            }
        },
        callGetApiFromUrlWithoutHeader: async () => {
            try {
                let req: {
                    url: string,
                    params?: object,
                    contentType?: string,
                    extraHeaders?: { [key: string]: string },
                    responseType: HttpResponseTypes,
                    withCredentials?: boolean
                } = {...args} as const;
                const response = await httpService.getFromUrlWithoutHeader(req.url, req.params, req.contentType, req.extraHeaders, req.responseType, req.withCredentials);
                setResponse(response);
                setError(null);
            } catch (e) {
                setResponse(undefined);
                setError(e as any);
                console.log('Http Error(from Storybook)', e);
            }
        },

        callPostApi: async () => {
            try {
                let req: {
                    endPoint: string,
                    params?: object,
                    requestBody: object,
                    body: object,
                    contentType?: string,
                    backendUrl?: string,
                    extraHeaders?: { [key: string]: string },
                    responseType: HttpResponseTypes,
                    withCredentials?: boolean
                } = {...args} as const;
                const response = await httpService.post(req.endPoint, req.requestBody, req.params, req.body, req.contentType, req.backendUrl, req.extraHeaders, req.responseType, req.withCredentials);
                console.log(response);
                setResponse(response);
                setError(null);
            } catch (e) {
                setResponse(undefined);
                setError(e as any);
                console.log('Http Error(from Storybook)', e);
            }
        },

        callPostApiFromUrl: async () => {
            try {
                let req: {
                    url: string,
                    params?: object,
                    requestBody: object,
                    body: object,
                    contentType?: string,
                    extraHeaders?: { [key: string]: string },
                    responseType: HttpResponseTypes,
                    withCredentials?: boolean
                } = {...args} as const;
                const response = await httpService.postFromUrl(req.url, req.requestBody, req.params, req.body, req.contentType, req.extraHeaders, req.responseType, req.withCredentials);
                setResponse(response);
                setError(null);
            } catch (e) {
                setResponse(undefined);
                setError(e as any);
                console.log('Http Error(from Storybook)', e);
            }
        },
        callPostApiFromUrlWithoutHeader: async () => {
            try {
                let req: {
                    url: string,
                    params?: object,
                    requestBody: object,
                    body: object,
                    contentType?: string,
                    extraHeaders?: { [key: string]: string },
                    responseType: HttpResponseTypes,
                    withCredentials?: boolean
                } = {...args} as const;
                const response = await httpService.postFromUrlWithoutHeader(req.url, req.requestBody, req.params, req.body, req.contentType, req.extraHeaders, req.responseType, req.withCredentials);
                setResponse(response);
                setError(null);
            } catch (e) {
                setResponse(undefined);
                setError(e as any);
                console.log('Http Error(from Storybook)', e);
            }
        },
        callPutApi: async () => {
            try {
                let req: {
                    endPoint: string,
                    params?: object,
                    requestBody: object,
                    body: object,
                    contentType?: string,
                    backendUrl?: string,
                    extraHeaders?: { [key: string]: string },
                    responseType: HttpResponseTypes,
                    withCredentials?: boolean
                } = {...args} as const;
                const response = await httpService.put(req.endPoint, req.requestBody, req.params, req.body, req.contentType, req.backendUrl, req.extraHeaders, req.responseType, req.withCredentials);
                console.log(response);
                setResponse(response);
                setError(null);
            } catch (e) {
                setResponse(undefined);
                setError(e as any);
                console.log('Http Error(from Storybook)', e);
            }
        },

        callPutApiFromUrl: async () => {
            try {
                let req: {
                    url: string,
                    params?: object,
                    requestBody: object,
                    body: object,
                    contentType?: string,
                    extraHeaders?: { [key: string]: string },
                    responseType: HttpResponseTypes,
                    withCredentials?: boolean
                } = {...args} as const;
                const response = await httpService.putFromUrl(req.url, req.requestBody, req.params, req.body, req.contentType, req.extraHeaders, req.responseType, req.withCredentials);
                setResponse(response);
                setError(null);
            } catch (e) {
                setResponse(undefined);
                setError(e as any);
                console.log('Http Error(from Storybook)', e);
            }
        },
        callPutApiFromUrlWithoutHeader: async () => {
            try {
                let req: {
                    url: string,
                    params?: object,
                    requestBody: object,
                    body: object,
                    contentType?: string,
                    extraHeaders?: { [key: string]: string },
                    responseType: HttpResponseTypes,
                    withCredentials?: boolean
                } = {...args} as const;
                const response = await httpService.putFromUrlWithoutHeader(req.url, req.requestBody, req.params, req.body, req.contentType, req.extraHeaders, req.responseType, req.withCredentials);
                setResponse(response);
                setError(null);
            } catch (e) {
                setResponse(undefined);
                setError(e as any);
                console.log('Http Error(from Storybook)', e);
            }
        },
        callDeleteApi: async () => {
            try {
                let req: {
                    endPoint: string,
                    params?: object,
                    body?: object,
                    contentType?: string,
                    backendUrl?: string,
                    extraHeaders?: { [key: string]: string },
                    responseType: HttpResponseTypes,
                    withCredentials?: boolean
                } = {...args} as const;
                const response = await httpService.delete(req.endPoint, req.params, req.body, req.contentType, req.backendUrl, req.extraHeaders, req.responseType, req.withCredentials);
                console.log(response);
                setResponse(response);
                setError(null);
            } catch (e) {
                setResponse(undefined);
                setError(e as any);
                console.log('Http Error(from Storybook)', e);
            }
        },

        callDeleteApiFromUrl: async () => {
            try {
                let req: {
                    url: string,
                    params?: object,
                    body?: object,
                    contentType?: string,
                    extraHeaders?: { [key: string]: string },
                    responseType: HttpResponseTypes,
                    withCredentials?: boolean
                } = {...args} as const;
                const response = await httpService.deleteFromUrl(req.url, req.params, req.body, req.contentType, req.extraHeaders, req.responseType, req.withCredentials);
                setResponse(response);
                setError(null);
            } catch (e) {
                setResponse(undefined);
                setError(e as any);
                console.log('Http Error(from Storybook)', e);
            }
        },
        callDeleteApiFromUrlWithoutHeader: async () => {
            try {
                let req: {
                    url: string,
                    params?: object,
                    body?: object,
                    contentType?: string,
                    extraHeaders?: { [key: string]: string },
                    responseType: HttpResponseTypes,
                    withCredentials?: boolean
                } = {...args} as const;
                const response = await httpService.deleteFromUrlWithoutHeader(req.url, req.params, req.body, req.contentType, req.extraHeaders, req.responseType, req.withCredentials);
                setResponse(response);
                setError(null);
            } catch (e) {
                setResponse(undefined);
                setError(e as any);
                console.log('Http Error(from Storybook)', e);
            }
        },

        callMultipartApi: async () => {
            try {
                let req: {
                    endPoint: string,
                    dataKeyFormData?: object,
                    backendUrl?: string,
                    extraHeaders?: { [key: string]: string },
                    methodType: HttpMethodTypes,
                    responseType: HttpResponseTypes,
                    authKey?: string,
                    uploadProgressEvent?: any,
                    files: any[]
                } = {...args} as const;
                let formData = new FormData();
                formData.append('data', new Blob([JSON.stringify(req.dataKeyFormData)], {
                    type: 'application/json'
                }));
                if (req.files.length > 0) {
                    console.log(req.files);
                    formData.append('file', req.files[0]);
                }
                const response = await httpService.multipart(req.endPoint, formData, req.methodType, req.backendUrl, req.responseType, req.authKey, req.uploadProgressEvent);
                console.log(response);
                setResponse(response as any);
                setError(null);
            } catch (e) {
                console.log('Http Error(from Storybook)', e);
                setResponse(undefined);
                setError(e as any);
            }
        },

        callMultipartApiFromUrl: async () => {
            try {
                let req: {
                    endPoint: string,
                    dataKeyFormData?: object,
                    extraHeaders?: { [key: string]: string },
                    methodType: HttpMethodTypes,
                    responseType: HttpResponseTypes,
                    authKey?: string,
                    uploadProgressEvent?: any,
                    files: any[]
                } = {...args} as const;
                let formData = new FormData();
                formData.append('data', new Blob([JSON.stringify(req.dataKeyFormData)], {
                    type: 'application/json'
                }));
                if (req.files.length > 0) {
                    console.log(req.files);
                    req.files.forEach((file) => {
                        formData.append('file', file);
                    });
                }
                const response = await httpService.multipartFromUrl(req.endPoint, formData, req.methodType, req.responseType, req.authKey, req.uploadProgressEvent);
                console.log(response);
                setResponse(response as any);
                setError(null);
            } catch (e) {
                console.log('Http Error(from Storybook)', e);
                setResponse(undefined);
                setError(e as any);
            }
        }
    };
    return (<>
        <a href={'https://axios-http.com/docs/req_config'}>Link to AxiosConfig Doc</a>
        <Button primary label={config?.parameters?.options?.buttonLabel} className="button"
                onClick={apiCalls[config?.parameters?.options?.method]}/>
        <br/>


        {response && <div className="response"><pre>
            {JSON.stringify(response, null, 2)} </pre>
        </div>}

        {error && <div className="error"><pre>
            {JSON.stringify(error, null, 2)} </pre>
        </div>}
        {/*<button className="button" onClick={callPostApi}> Post API</button>
        <br/>
        <button className="button" onClick={callMulitpartPostApi}>XHR POST</button>
        <br/>
        <button className="button" onClick={callGetApiFromUrl}> Get From Full URL</button>
        <br/>*/}
    </>);
};


export const Get = Template.bind(undefined);
Get.args = {
    endPoint: 'users',
    params: {page: 2},
    'backendUrl': 'https://reqres.in/api/',
    'extraHeaders': null,
    responseType: null,
    withCredentials: false
};
Get.parameters = {
    options: {
        method: 'callGetApi',
        buttonLabel: 'Get API'
    }
};

Get.argTypes = {
    endPoint: {control: {type: 'text'}, type: {required: true}},
    responseType: {
        control: {type: 'select'},
        options: [HttpResponseTypes.blob, HttpResponseTypes.json, HttpResponseTypes.arraybuffer, HttpResponseTypes.document, HttpResponseTypes.text, HttpResponseTypes.stream],
    },
};

export const GetFromURL = Template.bind(undefined);
GetFromURL.args = {
    url: 'https://reqres.in/api/users',
    params: {page: 2},
    'extraHeaders': null,
    responseType: null,
    withCredentials: false,

};
GetFromURL.parameters = {
    options: {
        method: 'callGetApiFromUrl',
        buttonLabel: 'Get API From Full URL'
    }
};

GetFromURL.argTypes = {
    url: {control: {type: 'text'}, type: {required: true}, description: 'Full API URL'},
    responseType: {
        control: {type: 'select'},
        options: [HttpResponseTypes.blob, HttpResponseTypes.json, HttpResponseTypes.arraybuffer, HttpResponseTypes.document, HttpResponseTypes.text, HttpResponseTypes.stream],
    },
};

export const GetFromURLWithoutHeader = Template.bind(undefined);
GetFromURLWithoutHeader.args = {
    url: 'https://reqres.in/api/users',
    params: {page: 2},
    'extraHeaders': null,
    responseType: null,
    withCredentials: false,

};
GetFromURLWithoutHeader.parameters = {
    options: {
        method: 'callGetApiFromUrlWithoutHeader',
        buttonLabel: 'Get API From Full URL Without Header'
    }
};

GetFromURLWithoutHeader.argTypes = {
    url: {control: {type: 'text'}, type: {required: true}, description: 'Full API URL'},
    responseType: {
        control: {type: 'select'},
        options: [HttpResponseTypes.blob, HttpResponseTypes.json, HttpResponseTypes.arraybuffer, HttpResponseTypes.document, HttpResponseTypes.text, HttpResponseTypes.stream],
    },
};
export const Post = Template.bind(undefined);
Post.args = {
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
Post.argTypes = {
    endPoint: {control: {type: 'text'}, type: {required: true}},
    responseType: {
        control: {type: 'select'},
        options: [HttpResponseTypes.blob, HttpResponseTypes.json, HttpResponseTypes.arraybuffer, HttpResponseTypes.document, HttpResponseTypes.text, HttpResponseTypes.stream],
    },
};
Post.parameters = {
    options: {
        method: 'callPostApi',
        buttonLabel: 'Post API'
    }
};

export const PostFromURL = Template.bind(undefined);
PostFromURL.args = {
    url: 'register',
    params: undefined,
    requestBody: {
        'email': 'sydney@fife'
    },
    'extraHeaders': null,
    responseType: null,
    withCredentials: false
};
PostFromURL.argTypes = {
    url: {control: {type: 'text'}, type: {required: true}},
    responseType: {
        control: {type: 'select'},
        options: [HttpResponseTypes.blob, HttpResponseTypes.json, HttpResponseTypes.arraybuffer, HttpResponseTypes.document, HttpResponseTypes.text, HttpResponseTypes.stream],
    },
};

PostFromURL.parameters = {
    options: {
        method: 'callPostApiFromUrl',
        buttonLabel: 'Post API From Full URL'
    }
};

export const PostFromURLWithoutHeader = Template.bind(undefined);
PostFromURLWithoutHeader.args = {
    url: 'register',
    params: undefined,
    requestBody: {
        'email': 'sydney@fife'
    },
    'extraHeaders': null,
    responseType: null,
    withCredentials: false
};
PostFromURLWithoutHeader.argTypes = {
    url: {control: {type: 'text'}, type: {required: true}},
    responseType: {
        control: {type: 'select'},
        options: [HttpResponseTypes.blob, HttpResponseTypes.json, HttpResponseTypes.arraybuffer, HttpResponseTypes.document, HttpResponseTypes.text, HttpResponseTypes.stream],
    },
};

PostFromURLWithoutHeader.parameters = {
    options: {
        method: 'callPostApiFromUrlWithoutHeader',
        buttonLabel: 'Post API From Full URL Without Header'
    }
};

export const Put = Template.bind(undefined);
Put.args = {
    endPoint: 'users/2',
    params: undefined,
    requestBody: {
        "name": "morpheus",
        "job": "zion resident"
    },
    'backendUrl': 'https://reqres.in/api/',
    'extraHeaders': null,
    responseType: null,
    withCredentials: false
};
Put.argTypes = {
    endPoint: {control: {type: 'text'}, type: {required: true}},
    responseType: {
        control: {type: 'select'},
        options: [HttpResponseTypes.blob, HttpResponseTypes.json, HttpResponseTypes.arraybuffer, HttpResponseTypes.document, HttpResponseTypes.text, HttpResponseTypes.stream],
    },
};
Put.parameters = {
    options: {
        method: 'callPutApi',
        buttonLabel: 'PUT API'
    }
};

export const PutFromURL = Template.bind(undefined);
PutFromURL.args = {
    url: 'users/2',
    params: undefined,
    requestBody: {
        "name": "morpheus",
        "job": "zion resident"
    },
    'extraHeaders': null,
    responseType: null,
    withCredentials: false
};
PutFromURL.argTypes = {
    url: {control: {type: 'text'}, type: {required: true}},
    responseType: {
        control: {type: 'select'},
        options: [HttpResponseTypes.blob, HttpResponseTypes.json, HttpResponseTypes.arraybuffer, HttpResponseTypes.document, HttpResponseTypes.text, HttpResponseTypes.stream],
    },
};

PutFromURL.parameters = {
    options: {
        method: 'callPutApiFromUrl',
        buttonLabel: 'PUT API From Full URL'
    }
};

export const PutFromURLWithoutHeader = Template.bind(undefined);
PutFromURLWithoutHeader.args = {
    url: 'users/2',
    params: undefined,
    requestBody: {
        "name": "morpheus",
        "job": "zion resident"
    },
    'extraHeaders': null,
    responseType: null,
    withCredentials: false
};
PutFromURLWithoutHeader.argTypes = {
    url: {control: {type: 'text'}, type: {required: true}},
    responseType: {
        control: {type: 'select'},
        options: [HttpResponseTypes.blob, HttpResponseTypes.json, HttpResponseTypes.arraybuffer, HttpResponseTypes.document, HttpResponseTypes.text, HttpResponseTypes.stream],
    },
};

PutFromURLWithoutHeader.parameters = {
    options: {
        method: 'callPutApiFromUrlWithoutHeader',
        buttonLabel: 'PUT API From Full URL Without Header'
    }
};

export const Delete = Template.bind(undefined);
Delete.args = {
    endPoint: 'users/2',
    params: undefined,
    requestBody: undefined,
    'backendUrl': 'https://reqres.in/api/',
    'extraHeaders': null,
    responseType: null,
    withCredentials: false
};
Delete.argTypes = {
    endPoint: {control: {type: 'text'}, type: {required: true}},
    responseType: {
        control: {type: 'select'},
        options: [HttpResponseTypes.blob, HttpResponseTypes.json, HttpResponseTypes.arraybuffer, HttpResponseTypes.document, HttpResponseTypes.text, HttpResponseTypes.stream],
    },
};
Delete.parameters = {
    options: {
        method: 'callDeleteApi',
        buttonLabel: 'Delete API'
    }
};

export const DeleteFromURL = Template.bind(undefined);
DeleteFromURL.args = {
    url: 'users/2',
    params: undefined,
    requestBody: undefined,
    'extraHeaders': null,
    responseType: null,
    withCredentials: false
};
DeleteFromURL.argTypes = {
    url: {control: {type: 'text'}, type: {required: true}},
    responseType: {
        control: {type: 'select'},
        options: [HttpResponseTypes.blob, HttpResponseTypes.json, HttpResponseTypes.arraybuffer, HttpResponseTypes.document, HttpResponseTypes.text, HttpResponseTypes.stream],
    },
};

DeleteFromURL.parameters = {
    options: {
        method: 'users/2',
        buttonLabel: 'Delete API From Full URL'
    }
};

export const DeleteFromURLWithoutHeader = Template.bind(undefined);
DeleteFromURLWithoutHeader.args = {
    url: 'register',
    params: undefined,
    requestBody: undefined,
    'extraHeaders': null,
    responseType: null,
    withCredentials: false
};
DeleteFromURLWithoutHeader.argTypes = {
    url: {control: {type: 'text'}, type: {required: true}},
    responseType: {
        control: {type: 'select'},
        options: [HttpResponseTypes.blob, HttpResponseTypes.json, HttpResponseTypes.arraybuffer, HttpResponseTypes.document, HttpResponseTypes.text, HttpResponseTypes.stream],
    },
};

DeleteFromURLWithoutHeader.parameters = {
    options: {
        method: 'callDeleteApiFromUrlWithoutHeader',
        buttonLabel: 'Delete API From Full URL Without Header'
    }
};


export const Multipart = Template.bind(undefined);
Multipart.args = {
    endPoint: '/organisation/v1/pta/update/name',
    dataKeyFormData: {
        'organisationId': '60c99ebabfb45d4b7308b534',
        'orgName': 'ST',
        'orgSite': 'https://ST.test.com',
        'removeImage': false
    },
    'extraHeaders': null,
    backendUrl: '/',
    responseType: HttpResponseTypes.blob,
    methodType: 'POST',
    uploadProgressEvent: (progressEvent: any) => {
        var percentCompleted = Math.round((progressEvent.loaded * 100) / progressEvent.total);
        console.log(percentCompleted);
    },
    files: []

};
Multipart.argTypes = {
    endPoint: {control: {type: 'text'}, type: {required: true}},
    files: {control: {type: 'file'}},
    responseType: {
        control: {type: 'select'},
        options: [HttpResponseTypes.blob, HttpResponseTypes.json, HttpResponseTypes.arraybuffer, HttpResponseTypes.document, HttpResponseTypes.text, HttpResponseTypes.stream],
    },
    methodType: {
        control: {type: 'select'},
        options: [HttpMethodTypes.GET, HttpMethodTypes.POST, HttpMethodTypes.PUT],
    }
};
Multipart.parameters = {
    options: {
        method: 'callMultipartApi',
        buttonLabel: 'Multipart Post API'
    },
    controls: {sort: 'requiredFirst'}
};


export const MultipartFromURL = Template.bind(undefined);
MultipartFromURL.args = {
    url: '/organisation/v1/pta/update/name',
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
    },
    files: []

};
MultipartFromURL.argTypes = {
    url: {control: {type: 'text'}, type: {required: true}},
    files: {control: {type: 'file'}},
    responseType: {
        control: {type: 'select'},
        options: [HttpResponseTypes.blob, HttpResponseTypes.json, HttpResponseTypes.arraybuffer, HttpResponseTypes.document, HttpResponseTypes.text, HttpResponseTypes.stream],
    },
    methodType: {
        control: {type: 'select'},
        options: [HttpMethodTypes.GET, HttpMethodTypes.POST, HttpMethodTypes.PUT],
    }
};
MultipartFromURL.parameters = {
    options: {
        method: 'callMultipartApiFromUrl',
        buttonLabel: 'Multipart API From Full URL'
    },
    controls: {sort: 'requiredFirst'}
};




