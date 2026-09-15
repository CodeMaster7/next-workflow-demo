import { auth } from '@/lib/auth'
import { headers } from 'next/headers'
import Link from 'next/link'
import { redirect } from 'next/navigation'

export default async function SignInPage() {
	const session = await auth.api.getSession({ headers: await headers() })

	if (session) {
		redirect('/')
	}

	return (
		<div className='flex min-h-screen flex-col items-center justify-center bg-zinc-50 dark:bg-black p-4'>
			<div className='w-full max-w-md bg-white dark:bg-gray-900 rounded-lg shadow-md p-8'>
				<h1 className='text-2xl font-bold text-center mb-6 text-gray-800 dark:text-white'>
					Sign in to your account
				</h1>
				<div className='mt-6'>
					<Link
						href='/api/auth/sign-in/github'
						className='flex items-center justify-center w-full bg-gray-900 text-white py-2 px-4 rounded-md hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 transition-colors'>
						<svg
							className='w-5 h-5 mr-2'
							fill='currentColor'
							viewBox='0 0 24 24'>
							<path d='M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.6.113.82-.268.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.09-.745.083-.729.083-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.807 1.305 3.492.998.107-.775.418-1.305.762-1.605-2.665-.3-5.466-1.335-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.123-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.873.118 3.176.77.84 1.235 1.91 1.235 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.3 24 12c0-6.627-5.373-12-12-12z' />
						</svg>
						Sign in with GitHub
					</Link>
				</div>
				<div className='mt-4 text-center'>
					<p className='text-gray-600 dark:text-gray-400 text-sm'>
						This demo uses GitHub authentication. You&apos;ll be
						redirected to GitHub to sign in.
					</p>
				</div>
			</div>
		</div>
	)
}
