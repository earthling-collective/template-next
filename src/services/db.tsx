import postgres from "postgres";
import { drizzle } from "drizzle-orm/postgres-js";
import * as schema from "@/schema";
import { DB_URL } from "@/vars";

const pool = postgres(DB_URL, { max: 1 });

export const db = drizzle(pool, { schema });
