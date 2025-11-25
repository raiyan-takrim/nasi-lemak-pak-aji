import { MetadataRoute } from 'next';
import menuItems from '@/data/menu-items';

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';

    // Static pages
    const routes = [
        {
            url: baseUrl,
            lastModified: new Date(),
            changeFrequency: 'weekly' as const,
            priority: 1,
        },
    ];

    // Dynamic menu item pages
    const menuItemRoutes = menuItems.map((item) => ({
        url: `${baseUrl}/menu-item/${item.id}`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: 0.8,
    }));

    return [...routes, ...menuItemRoutes];
}
