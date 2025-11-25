'use client'

import { useEffect } from 'react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function Error({
    error,
    reset,
}: {
    error: Error & { digest?: string }
    reset: () => void
}) {
    useEffect(() => {
        console.error(error)
    }, [error])

    return (
        <div className="min-h-screen flex items-center justify-center bg-background text-foreground px-4">
            <div className="text-center space-y-6 max-w-md">
                <div className="space-y-2">
                    <h1 className="text-6xl font-bold text-primary">Oops!</h1>
                    <h2 className="text-2xl font-semibold">Something went wrong</h2>
                    <p className="text-muted-foreground">
                        We encountered an unexpected error while loading this page.
                    </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button onClick={reset} size="lg">
                        Try Again
                    </Button>
                    <Button asChild variant="outline" size="lg">
                        <Link href="/">Return Home</Link>
                    </Button>
                </div>

                {error.digest && (
                    <p className="text-xs text-muted-foreground">
                        Error ID: {error.digest}
                    </p>
                )}
            </div>
        </div>
    )
}
