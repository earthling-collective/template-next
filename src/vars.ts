export const SECRET = process.env.SECRET || "njifrbf0ybrf10ugfr93tvg13";

export const DB_URL = (process.env.DB_URL || process.env.DATABASE_URL)!;

export const DB_TABLE_PREFIX =
  process.env.DB_TABLE_PREFIX || process.env.DATABASE_TABLE_PREFIX;
