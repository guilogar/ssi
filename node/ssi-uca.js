const axios = require('axios');

module.exports.auth = async function (url = '')
{
    const options =
    {
        url: url,
        data: {
            client_id: "dfgbsahkbkhdf2alsjkdhf",
        },
        headers: {
            'content-type': 'application/json'
        },
        method: 'post',
        responseType: 'json'
    };
    
    return new Promise((resolve, reject) =>
    {
        axios(
            options
        ).then((response) => {
            resolve(response.data);
        }).catch((err) => {
            reject(false);
        });
    });
}

module.exports.getUsers = async function (url = '', authString = '', pattern = '')
{
    const options =
    {
        url: url + pattern,
        headers: {
            authorization: authString
        },
        method: 'get',
        responseType: 'json'
    };
    
    return new Promise((resolve, reject) =>
    {
        axios(
            options
        ).then((response) => {
            resolve(response.data);
        }).catch((err) => {
            reject(false);
        });
    });
}