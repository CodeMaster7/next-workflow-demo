import { clientEnv } from "@/data/clientEnv";
import { createAuthClient } from "better-auth/react";

export const clientAuth = createAuthClient({
  baseURL: clientEnv.NEXT_PUBLIC_BETTER_AUTH_URL,
});
