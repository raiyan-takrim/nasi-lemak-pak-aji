'use client'
import QRGenerator from "./qr-generator";

interface QRWrapperProps {
    fileName: string;
    itemId: number;
    className?: string;
}

export function QRWrapper({ fileName, itemId, className }: QRWrapperProps) {
    const qrLink = `${window.location.origin}/menu-item/${itemId}`;
    
    return <QRGenerator fileName={fileName} qrLink={qrLink} className={className} />;
}
