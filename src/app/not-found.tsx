import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Home, Search } from 'lucide-react'

export default function NotFound() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-background text-foreground px-4">
            <div className="text-center space-y-6 max-w-md">
                <div className="space-y-2">
                    <h1 className="text-8xl font-bold text-primary">404</h1>
                    <h2 className="text-3xl font-semibold">Page Not Found</h2>
                    <p className="text-lg text-muted-foreground">
                        Sorry, the page you're looking for doesn't exist or has been moved.
                    </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button asChild size="lg">
                        <Link href="/">
                            <Home className="mr-2 h-4 w-4" />
                            Go Home
                        </Link>
                    </Button>
                    <Button asChild variant="outline" size="lg">
                        <Link href="/#menu">
                            <Search className="mr-2 h-4 w-4" />
                            Browse Menu
                        </Link>
                    </Button>
                </div>
            </div>
        </div>
    )
}
