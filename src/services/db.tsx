import { drizzle } from "drizzle-orm/node-postgres";
import { Pool } from "pg";
import * as schema from "@/schema";
import { DB_URL } from "@/vars";

const pool = new Pool({
  connectionString: DB_URL,
});

export const db = drizzle(pool, { schema });
