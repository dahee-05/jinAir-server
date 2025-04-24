import mysql from 'mysql2';

const pool = mysql.createPool({
    host: 'shoppy-redux-db.cjesyyk6c1ln.ap-northeast-2.rds.amazonaws.com', 
    port: 3306,
    user: 'admin',
    password: 'shoppy-admin-1234',
    database: 'jinairdb',
});

const getConnection = () => pool.promise().getConnection();

export { getConnection };

export const db = pool.promise();
