import NextAuth from "next-auth";
import { DrizzleAdapter } from "@auth/drizzle-adapter";
import { db } from "./db";
import { SECRET } from "@/vars";

export const auth = NextAuth({
  adapter: DrizzleAdapter(db),
  secret: SECRET,
  trustHost: true,
  providers: [],
});
