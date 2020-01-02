<?php

/*
 * Modified: prepend directory path of current file, because of this file own different ENV under between Apache and command line.
 * NOTE: please remove this comment.
 */
defined('BASE_PATH') || define('BASE_PATH', getenv('BASE_PATH') ?: realpath(dirname(__FILE__) . '/../..'));
defined('APP_PATH') || define('APP_PATH', BASE_PATH . '/app');

putenv('DATABASE_ADAPTER=Postgresql');
putenv('DATABASE_HOST=ec2-54-247-178-166.eu-west-1.compute.amazonaws.com');
putenv('DATABASE_NAME=d11odhi30f8dsa');
putenv('DATABASE_PASSWORD=cbddadbf8088ddca7a8baeb280e61afca38b50409de00d8715ea2a24968b3533');
putenv('DATABASE_USERNAME=iahfcazxlltdpy');

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
