'use client'

export default function Loading() {
    return (
        <div className="min-h-screen bg-background text-foreground">
            <main className="pt-24 pb-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-12 animate-pulse">
                    {/* Left Column Skeleton */}
                    <div className="space-y-6">
                        <div className="relative rounded-2xl overflow-hidden aspect-4/3 bg-muted" />
                        <div className="bg-muted rounded-xl p-8 h-48" />
                    </div>

                    {/* Right Column Skeleton */}
                    <div className="flex flex-col space-y-6">
                        <div className="space-y-4">
                            <div className="h-6 bg-muted rounded w-32" />
                            <div className="h-12 bg-muted rounded w-3/4" />
                            <div className="h-10 bg-muted rounded w-24" />
                            <div className="h-24 bg-muted rounded" />
                        </div>

                        <div className="space-y-4">
                            <div className="h-8 bg-muted rounded w-48" />
                            <div className="grid sm:grid-cols-2 gap-4">
                                <div className="h-20 bg-muted rounded" />
                                <div className="h-20 bg-muted rounded" />
                                <div className="h-20 bg-muted rounded" />
                                <div className="h-20 bg-muted rounded" />
                            </div>
                        </div>

                        <div className="flex gap-4 pt-8 border-t border-border">
                            <div className="h-14 bg-muted rounded flex-1" />
                            <div className="h-14 bg-muted rounded flex-1" />
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}
