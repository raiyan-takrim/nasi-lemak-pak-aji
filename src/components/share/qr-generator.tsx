'use client';
import QRCode from 'react-qr-code';
import { Button } from '../ui/button';


export default function QRCodeGenerator() {
    const downloadQRCode = () => {
        const svg = document.getElementById("QRCode");
        if (!svg) return;

        // Serialize SVG
        const svgData = new XMLSerializer().serializeToString(svg);
        const img = new Image();

        // Desired output size & padding (increase padding for white border)
        const qrSize = 256; // intrinsic QR size
        const padding = 40; // white margin around QR
        const outputSize = qrSize + padding * 2; // final canvas size

        img.onload = () => {
            const canvas = document.createElement('canvas');
            canvas.width = outputSize;
            canvas.height = outputSize;
            const ctx = canvas.getContext('2d');
            if (!ctx) return;

            // Fill background white (guarantees margin + solid background)
            ctx.fillStyle = '#FFFFFF';
            ctx.fillRect(0, 0, outputSize, outputSize);

            // Draw the SVG QR centered with padding
            ctx.drawImage(img, padding, padding, qrSize, qrSize);

            // Convert to PNG & trigger download
            canvas.toBlob((blob) => {
                if (!blob) return;
                const url = URL.createObjectURL(blob);
                const link = document.createElement('a');
                link.href = url;
                link.download = 'qr-code.png';
                link.click();
                URL.revokeObjectURL(url);
            }, 'image/png');
        };

        // Use proper UTF-8 encoding before base64
        const encoded = btoa(unescape(encodeURIComponent(svgData)));
        img.src = `data:image/svg+xml;base64,${encoded}`;
    };

    return (
        <div className="flex flex-col items-center gap-4">
            <div className="bg-white p-4 rounded-md shadow-md">
                <QRCode
                    id="QRCode"
                    value={typeof window !== 'undefined' ? window.location.href : ''}
                    size={256}
                    level="H"
                    bgColor="#FFFFFF"
                    fgColor="#000000"
                    style={{ display: 'block' }}
                />
            </div>
            <Button
                onClick={downloadQRCode}
                className="bg-primary text-primary-foreground font-bold p-4 rounded-md hover:bg-primary/90 transition-all shadow-lg shadow-primary/20 active:scale-[0.98]"
            >
                Download QR
            </Button>
        </div>
    );
}