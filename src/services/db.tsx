import postgres from "postgres";
import { drizzle } from "drizzle-orm/postgres-js";
import * as schema from "@/schema";
import { DATABASE_URL } from "@/vars";

const pool = postgres(DATABASE_URL!, { max: 1 });

export const db = drizzle(pool, { schema });
