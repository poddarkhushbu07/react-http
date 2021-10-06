import React from 'react';
import { Meta } from '@storybook/react/types-6-0';
import { Story } from '@storybook/react';
import httpService, { HttpContext, HttpMethodTypes, HttpResponseTypes } from '../../provider/http/http';
import "./button.css";

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
const Template: Story<any> = (args) => {
    const callGetApi = () => {
        let req: {
            endPoint: string,
            params?: object,
            contentType?: string,
            backendUrl?: string,
            extraHeaders?: object,
            responseType: HttpResponseTypes,
            withCredentials?: boolean
        } = {...args} as const;
        console.log(args);
        httpService.get(req.endPoint, req.params, req.contentType, req.backendUrl, req.extraHeaders, req.responseType, req.withCredentials)
            .then(res => console.log(res));
    };

    const callPostApi = () => {
        httpService.getApiCall('https://reqres.in/api/register', {
            'email': 'sydney@fife'
        }, {baseURL: ''})
            .then(res => console.log(res));
    };


    const callMulitpartPostApi = () => {
        let formData = new FormData();
        formData.append('data', JSON.stringify({
            'organisationId': '60c99ebabfb45d4b7308b534',
            'orgName': 'ST',
            'orgSite': 'https://ST.test.com',
            'removeImage': false
        }));
        httpService.multipart('/organisation/v1/pta/update/name', formData, HttpMethodTypes.POST)
            .then(res => console.log(res));
    };
    return(<>
        <button className="button" onClick={callGetApi}> Get API</button>
        <br/>
        <button  className="button" onClick={callPostApi}> Post API</button>
        <br/>
        <button  className="button" onClick={callMulitpartPostApi}>XHR POST</button>
    </>);
}
// Reuse that template for creating different stories
export const Primary1 = Template.bind(undefined);
Primary1.args = {
    endPoint: 'users',
    params: {page: 2},
    'backendUrl': 'https://reqres.in/api/',
    'extraHeaders': null,
    responseType: null,
    withCredentials: false
};






