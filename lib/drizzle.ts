import { drizzle } from 'drizzle-orm/node-postgres';
import { Pool } from 'pg';

const connectionString = process.env.DATABASE_URL;

if (!connectionString) throw new Error("DATABASE_URL not set");

const globalForDb = globalThis as unknown as  { _spotmePool?: Pool};
const pool = globalForDb._spotmePool ?? new Pool({ connectionString });

pool.on('error', (err) => {
    console.error('Unexpected error on idle Postgres client', err);
});

if (process.env.NODE_ENV !== "production") globalForDb._spotmePool = pool;

export const db = drizzle(pool);