import { DATABASE_URL } from "@/vars";
import type { Config } from "drizzle-kit";

export default {
  schema: "./src/schema.ts",
  out: "./drizzle",
  driver: "pg",
  dbCredentials: {
    connectionString: DATABASE_URL,
  },
} satisfies Config;
