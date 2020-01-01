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
        const { auth, getUsers } = require('./ssi-uca');
        const result = await auth();
        console.log(result);

        if(result)
        {
            const users = await getUsers(result.token_type + ' ' + result.access_token, '');
            console.log(users);
        }
    }) ();
    
    console.log('=============================================================');
}) ();