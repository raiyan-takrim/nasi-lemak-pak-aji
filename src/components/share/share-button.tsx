"use client";
import { useState } from 'react';
import { Share2, Check, Copy } from 'lucide-react';

export default function ShareButton() {
    const [copied, setCopied] = useState(false);

    const handleShare = async () => {
        const url = window.location.href;
        const title = document.title;

        // 1. Try Native Web Share API (Mobile/supported browsers)
        if (navigator.share) {
            try {
                await navigator.share({
                    title: title,
                    text: 'Check this out!',
                    url: url,
                });
                return;
            } catch (error) {
                // User cancelled or share failed, fall through to copy
                console.log('Error sharing:', error);
            }
        }

        // 2. Fallback: Copy to Clipboard
        try {
            await navigator.clipboard.writeText(url);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        } catch (err) {
            console.error('Failed to copy:', err);
        }
    };

    return (
        <button
            onClick={handleShare}
            className="flex justify-center items-center space-x-2 px-4 py-4 border border-accent rounded-md hover:bg-accent/10 transition"
        >
            {copied ? (
                <>
                    <Check size={18} />
                    <span>Link Copied!</span>
                </>
            ) : (
                <>
                    <Share2 size={18} />
                    <span>Share Link</span>
                </>
            )}
        </button>
    );
}