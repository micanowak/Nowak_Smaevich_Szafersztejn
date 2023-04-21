/*const config = {
    user: 'Pizzas',
    password: 'Pizzas',
    server: 'A-PHZ2-AMI-014',
    database: 'dai-pizza',
    options: {
        trustServerCertificate: true,
        trustedConnection: true
    }
}

export default config;
*/
import 'dotenv/config'

const config = {
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    server: process.env.DB_SERVER,
    database: process.env.DB_NAME,
    options: {
        trustServerCertificate: true,
        trustedConnection: true
    }
}

export default config;