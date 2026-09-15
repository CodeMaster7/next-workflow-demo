import { auth } from "@/lib/auth";
import { toNextJsHandler } from "better-auth/next-js";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

export default async function SignOutPage() {
  const session = await auth.api.getSession({ headers: await headers() });
  
  if (!session) {
    redirect("/sign-in");
  }

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-zinc-50 dark:bg-black p-4">
      <div className="w-full max-w-md bg-white dark:bg-gray-900 rounded-lg shadow-md p-8">
        <h1 className="text-2xl font-bold text-center mb-6 text-gray-800 dark:text-white">
          Sign Out
        </h1>
        <p className="text-center text-gray-600 dark:text-gray-300 mb-6">
          Are you sure you want to sign out?
        </p>
        <form action="/api/auth/sign-out" method="post" className="space-y-4">
          <button
            type="submit"
            className="w-full bg-red-600 text-white py-2 px-4 rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 transition-colors"
          >
            Sign Out
          </button>
        </form>
        <div className="mt-4 text-center">
          <a 
            href="/" 
            className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 transition-colors"
          >
            Back to Home
          </a>
        </div>
      </div>
    </div>
  );
}