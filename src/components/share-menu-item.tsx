'use client'
import { Button } from "@/components/ui/button";
import { Share2 } from "lucide-react";
import { useShare } from "@/hooks/use-share";

interface ShareMenuItemProps {
    itemName: string;
    itemDescription: string;
    itemId: number;
}

export function ShareMenuItem({ itemName, itemDescription, itemId }: ShareMenuItemProps) {
    const { share, shareStatus } = useShare();

    const handleShare = async () => {
        await share({
            title: itemName,
            text: itemDescription,
            url: `${window.location.origin}/menu-item/${itemId}`
        });
    };

    return (
        <div className="w-full">
            <Button onClick={handleShare} variant="outline" className="w-full">
                <Share2 className="mr-2 h-4 w-4" />
                Share Menu Item
            </Button>
            {shareStatus && (
                <p className="text-sm text-muted-foreground mt-2 text-center">{shareStatus}</p>
            )}
        </div>
    );
}
