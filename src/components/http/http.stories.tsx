import React, { Fragment } from "react";
import { Meta } from "@storybook/react/types-6-0";
import { Story } from "@storybook/react";
import httpService, { HttpContext, HttpMethodTypes } from "../../provider/http/http";

export default {
    title: 'Http',
    decorators: [
        (Story) => (
            <HttpContext.Provider value={httpService}>
                <Story />
            </HttpContext.Provider>
        ),
    ],
} as Meta;

// Create a master template for mapping args to render the Button component
const Template: Story<any> = (args) =>
    <>
        <button onClick={callGetApi}> Get API </button>
        <br />
        <button onClick={callPostApi}> Post API </button>
        <button onClick={callMulitpartPostApi}>XHR POST</button>
    </>;

// Reuse that template for creating different stories
export const Primary1 = Template.bind({});
Primary1.args = { label: "Primary 😃", size: "large" };

export const Secondary1 = Template.bind({});
Secondary1.args = { ...Primary1.args, primary: false, label: "Secondary 😇" };


const callGetApi = () => {
    httpService.getApiCall('https://reqres.in/api/users?page=2', null, { baseURL: '' })
        .then(res => console.log(res));
}


const callPostApi = () => {
    httpService.getApiCall('https://reqres.in/api/register', {
        "email": "sydney@fife"
    }, { baseURL: '' })
        .then(res => console.log(res));
}


const callMulitpartPostApi = () => {
    let formData = new FormData();
    formData.append('data', JSON.stringify({ "organisationId": "60c99ebabfb45d4b7308b534", "orgName": "ST", "orgSite": "https://ST.test.com", "removeImage": false }));
    httpService.multipart('/organisation/v1/pta/update/name', formData, HttpMethodTypes.POST)
        .then(res => console.log(res));
}