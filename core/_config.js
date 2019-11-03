const server = {
  port: 8080,
  sslPort: 8443,
  baseUrl: 'http://127.0.0.1:8080/',
};
const mysql = {
  connectionLimit: 10,
  host: '127.0.0.1',
  user: 'root',
  password: '',
  database: 'portal3sections',
  port: 3306,
  connectTimeout: 15000,
};

export {
  server,
  mysql,
}
