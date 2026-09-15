import { auth } from "@/lib/auth";
import { toNextJsHandler } from "better-auth/next-js";

export const GET = toNextJsHandler(auth);
export const POST = toNextJsHandler(auth);
export const PUT = toNextJsHandler(auth);
export const DELETE = toNextJsHandler(auth);