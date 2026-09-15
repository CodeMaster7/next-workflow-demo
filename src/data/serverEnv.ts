import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const serverEnv = createEnv({
  runtimeEnv: process.env,
  schema: z.object({
    DATABASE_URL: z.string().url(),
    GITHUB_CLIENT_ID: z.string(),
    GITHUB_CLIENT_SECRET: z.string(),
    BETTER_AUTH_SECRET: z.string(),
    NEXT_PUBLIC_BASE_URL: z.string().url(),
  }),
});