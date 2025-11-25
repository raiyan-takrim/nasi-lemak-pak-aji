'use client'
import { useState } from 'react';

interface UseShareOptions {
    url?: string;
    title?: string;
    text?: string;
    fileName?: string;
    blob?: Blob;
}

export function useShare() {
    const [shareStatus, setShareStatus] = useState<string>('');

    const share = async ({ url, title, text, fileName, blob }: UseShareOptions) => {
        try {
            if (navigator.share) {
                const shareData: ShareData = {};

                if (blob && fileName) {
                    const file = new File([blob], fileName, { type: blob.type || 'image/png' });
                    shareData.files = [file];
                }

                if (title) shareData.title = title;
                if (text) shareData.text = text;
                if (url && !blob) shareData.url = url;

                if (navigator.canShare && navigator.canShare(shareData)) {
                    await navigator.share(shareData);
                    setShareStatus('Shared successfully!');
                } else {
                    // Fallback: copy to clipboard
                    await navigator.clipboard.writeText(url || text || '');
                    setShareStatus('Link copied to clipboard!');
                }
            } else {
                // Fallback for browsers without Web Share API
                await navigator.clipboard.writeText(url || text || '');
                setShareStatus('Link copied to clipboard!');
            }
            setTimeout(() => setShareStatus(''), 3000);
        } catch (error) {
            console.error('Error sharing:', error);
            setShareStatus('Failed to share');
            setTimeout(() => setShareStatus(''), 3000);
        }
    };

    return { share, shareStatus };
}
