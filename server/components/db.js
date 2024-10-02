import mysql from 'mysql2/promise';

const config = {
    host: 'localhost',
    user: 'root',
    port: 3306,
    password: '',
    database: 'chatlive'
}

const conectiondb = await mysql.createConnection(config);

export {conectiondb}