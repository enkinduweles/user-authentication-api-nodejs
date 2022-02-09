import {Pool} from 'pg';

const connectionString = 'postgres://edgjketu:YQ5NqpVtx5eiz0riRqRAVT1kjX42ddY9@kesavan.db.elephantsql.com/edgjketu';

const db = new Pool({connectionString});

export default db;