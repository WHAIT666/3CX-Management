import { Link } from "react-router-dom"

export default function Component() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-background px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-md text-center">
        <h1 className="text-9xl font-extrabold tracking-tighter text-foreground sm:text-[15rem]">404</h1>
        <p className="mt-4 text-xl font-medium text-muted-foreground sm:text-2xl">Page not found.</p>
        <p className="mt-6 text-muted-foreground">The page you're looking for does not exist.</p>
        <div className="mt-8">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow-sm transition-colors hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
          >
            Go to Homepage
          </Link>
        </div>
      </div>
    </div>
  )
}
