import NextAuth from "next-auth";
import { DrizzleAdapter } from "@auth/drizzle-adapter";
import { SECRET } from "@/vars";
import { db } from "@/services/db";

export const { handlers, auth, signIn, signOut } = NextAuth({
  adapter: DrizzleAdapter(db),
  providers: [],
  secret: SECRET,
  trustHost: true,
});
