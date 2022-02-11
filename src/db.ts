import {Pool} from 'pg';
import 'dotenv/config';

const connectionString = process.env.DB_URL;

const db = new Pool({connectionString});

export default db;