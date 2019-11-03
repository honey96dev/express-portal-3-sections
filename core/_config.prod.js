const server = {
  port: 80,
  sslPort: 443,
  baseUrl: 'http://108.160.135.63/',
};
const mysql = {
  connectionLimit: 10,
  host: '127.0.0.1',
  user: 'root',
  password: 'mohammed@123456',
  database: 'portal3sections',
  port: 3306,
  connectTimeout: 15000,
};

export {
  server,
  mysql,
}
