import NextAuth from "next-auth";
import { DrizzleAdapter } from "@auth/drizzle-adapter";
import { db } from "./db";
import { SECRET } from "@/vars";

export const { handlers, auth, signIn, signOut } = NextAuth({
  adapter: DrizzleAdapter(db),
  theme: {
    logo: "/favicon/android-chrome-512x512.png",
  },
  secret: SECRET,
  trustHost: true,
  providers: [],
});
