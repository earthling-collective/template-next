import NextAuth from "next-auth";
import { DrizzleAdapter } from "@auth/drizzle-adapter";
import { SECRET } from "@/vars";
import { db } from "@/services/db";
import { Provider } from "@auth/core/providers";

const providers: Provider[] = [];

export const providerMap = providers.map((provider) => {
  if (typeof provider === "function") {
    const providerData = provider();
    return { id: providerData.id, name: providerData.name };
  } else {
    return { id: provider.id, name: provider.name };
  }
});

export const { handlers, auth, signIn, signOut } = NextAuth({
  secret: SECRET,
  adapter: DrizzleAdapter(db),
  providers,
  trustHost: true,
});
