'use client';
import QRCode from 'react-qr-code';
import { Button } from '../ui/button';


export default function QRCodeGenerator() {
    const downloadQRCode = () => {
        const svg = document.getElementById("QRCode");
        if (!svg) return;

        const svgData = new XMLSerializer().serializeToString(svg);
        const canvas = document.createElement("canvas");
        const ctx = canvas.getContext("2d");
        const img = new Image();

        img.onload = () => {
            canvas.width = img.width;
            canvas.height = img.height;
            if (ctx) {
                ctx.drawImage(img, 0, 0);
                const pngFile = canvas.toDataURL("image/png");
                const downloadLink = document.createElement("a");
                downloadLink.download = 'qr-code.png';
                downloadLink.href = `${pngFile}`;
                downloadLink.click();
            }
        };

        img.src = `data:image/svg+xml;base64,${btoa(svgData)}`;
    };

    return (
        <div className="flex flex-col items-center gap-4">
            <div className="bg-white p-4 rounded-md shadow-md">
                <QRCode
                    id="QRCode"
                    value={window.location.href}
                    size={256}
                    level="H"
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