import {server, mysql} from './_config';
module.exports = {
    server: {
        isDev: false,
        port: server.port,
        baseUrl: server.baseUrl,
        name: 'Express Project',
        description: 'Express Project',
        author: 'Zhenlong J.',
        secret: 'portal3sections@@',
        // sslKey: './sslcert/localhost.key',
        // sslCert: './sslcert/localhost.cert',
        // sslCA: './sslcert/alphasslrootcabundle.crt',
        environment: 'development',
    },
    mysql: mysql,
    session: {
        name: 'portal3sections',
        key: 'portal3sections',
        secret: 'portal3sections@@',
    },
    dbTblName: {
        users: 'users',
    },
};
