const axios = require('axios');

module.exports.auth = async function ()
{
    const options =
    {
        url: 'http://ssi-uca.herokuapp.com/auth',
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

module.exports.getUsers = async function (authString = '', pattern = '')
{
    const options =
    {
        url: 'http://ssi-uca.herokuapp.com/api/getUsers/' + pattern,
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