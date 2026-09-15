import { auth } from "../lib/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

export default async function Home() {
  const session = await auth.api.getSession({ headers: await headers() });

  if (!session) {
    redirect("/sign-in");
  }

  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
          <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
            Welcome, {session.user?.name}!
          </h1>
          <div className="flex items-center gap-4">
            <img
              src={session.user?.image || "https://via.placeholder.com/100"}
              alt="Profile"
              className="rounded-full w-24 h-24"
            />
            <div>
              <p className="text-lg font-medium">{session.user?.name}</p>
              <p className="text-gray-600 dark:text-gray-400">{session.user?.email}</p>
            </div>
          </div>
          <form action="/api/auth/sign-out" method="post" className="mt-6">
            <button
              type="submit"
              className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition-colors"
            >
              Sign Out
            </button>
          </form>
        </div>
      </main>
    </div>
  );
}