<?php

/*
 * Modified: prepend directory path of current file, because of this file own different ENV under between Apache and command line.
 * NOTE: please remove this comment.
 */
defined('BASE_PATH') || define('BASE_PATH', getenv('BASE_PATH') ?: realpath(dirname(__FILE__) . '/../..'));
defined('APP_PATH') || define('APP_PATH', BASE_PATH . '/app');

if(!getenv('PRODUCTION'))
{
    putenv('DATABASE_ADAPTER=Postgresql');
    putenv('DATABASE_HOST=localhost');
    putenv('DATABASE_NAME=oauth');
    putenv('DATABASE_PASSWORD=root');
    putenv('DATABASE_USERNAME=root');
}

return new \Phalcon\Config([
    'database' => [
        'adapter'     => getenv('DATABASE_ADAPTER'),
        'host'        => getenv('DATABASE_HOST'),
        'username'    => getenv('DATABASE_USERNAME'),
        'password'    => getenv('DATABASE_PASSWORD'),
        'dbname'      => getenv('DATABASE_NAME'),
        'charset'     => 'utf8',
    ],
    'application' => [
        'appDir'         => APP_PATH . '/',
        'controllersDir' => APP_PATH . '/controllers/',
        'modelsDir'      => APP_PATH . '/models/',
        'migrationsDir'  => APP_PATH . '/migrations/',
        'viewsDir'       => APP_PATH . '/views/',
        'pluginsDir'     => APP_PATH . '/plugins/',
        'libraryDir'     => APP_PATH . '/library/',
        'cacheDir'       => BASE_PATH . '/cache/',
        'baseUri'        => '/',
    ]
]);
