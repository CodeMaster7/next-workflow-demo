'use client';

import { clientAuth } from "@/lib/auth-client";
import { useRouter } from "next/navigation";

export function NavBar() {
  const { data: session, isPending } = clientAuth.useSession();
  const router = useRouter();

  if (isPending) {
    return <div className="p-4">Loading...</div>;
  }

  return (
    <nav className="border-b border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <span className="text-xl font-bold text-gray-800 dark:text-white">Better Auth Demo</span>
          </div>
          {session ? (
            <div className="flex items-center space-x-4">
              <span className="text-gray-700 dark:text-gray-300">
                Welcome, {session.user?.name}!
              </span>
              <img 
                src={session.user?.image || "https://via.placeholder.com/40"}
                alt="Profile"
                className="rounded-full w-10 h-10"
              />
              <form action="/api/auth/sign-out" method="post">
                <button 
                  type="submit"
                  className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600 transition-colors text-sm"
                >
                  Sign Out
                </button>
              </form>
            </div>
          ) : (
            <div className="flex items-center">
              <a 
                href="/sign-in" 
                className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors text-sm"
              >
                Sign In
              </a>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}