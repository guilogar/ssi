(async function()
{
    console.log('Framework externo OAuth');
    console.log('=============================================================');

    await (async function()
    {
        const { auth, getUsers } = require('./auth0');
        const result = await auth();
        console.log(result);

        if(result)
        {
            const users = await getUsers(result.token_type + ' ' + result.access_token, '*');
            console.log(users);
        }
    }) ();
    
    console.log('=============================================================');
    console.log('Implementación propia OAuth');
    console.log('=============================================================');

    await (async function()
    {
        const remoteUrls = [
            'https://ssi-uca.herokuapp.com/auth',
            'https://ssi-uca.herokuapp.com/api/getUsers/',
        ];
        const localUrls = [
            'http://oauth.local/auth',
            'http://oauth.local/api/getUsers/',
        ];

        let urls = remoteUrls;

        let args = process.argv.slice(2);
  
        args.forEach(function (param, index, array) {
            switch(param)
            {
                case '--local': urls = localUrls; break;
                default: break;
            }
        });

        const { auth, getUsers } = require('./ssi-uca');
        const result = await auth(urls[0]);
        console.log(result);

        if(result)
        {
            const users = await getUsers(urls[1], result.token_type + ' ' + result.access_token, '');
            console.log(users);
        }
    }) ();
    
    console.log('=============================================================');
}) ();