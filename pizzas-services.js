import config from './dbConfig.js';
import sql from 'mssql';

let pool = await sql.connect(config);
let result = await pool.request().query("SELECT * from pizza");