const axios = require('axios');

const signUp = 'https://guilogar.eu.auth0.com/login?state=g6Fo2SBaemc2OHpUbTdDY2p3OHZjamtfU2ZJS2hUaHl0OHNBY6N0aWTZIEZtZWNPeEtPYjI2a3ZjSlVKQ1NQa3NIdk5vcW0zcWVpo2NpZNkgc1VicFlBQ2FBYkFtZXZBTTEzanR0VW8zYUtZbTd1bnc&client=sUbpYACaAbAmevAM13jttUo3aKYm7unw&protocol=oauth2&prompt=login&response_type=code&connection=Username-Password-Authentication&scope=openid%20profile&redirect_uri=https%3A%2F%2Fmanage.auth0.com%2Ftester%2Fcallback%3Fconnection%3DUsername-Password-Authentication';

module.exports.auth = async function ()
{
    const options =
    {
        url: 'https://guilogar.eu.auth0.com/oauth/token',
        data: {
            client_id:     "CgtRAsTd3ABdu09QXDS40CI08764RG7w",
            client_secret: "Prb0JzTogTCkMexTdLygV3xWWFx9sj1rNR6MAvcJaouGnxH13wWTC_jNARm7UMVU",
            audience:      "https://guilogar.eu.auth0.com/api/v2/",
            grant_type:    "client_credentials"
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
        url: 'https://guilogar.eu.auth0.com/api/v2/users',
        params: {
            q: 'name:' + pattern, search_engine: 'v3'
        },
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