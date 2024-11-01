"use client";

import React from "react";
import { QRCodeSVG } from "qrcode.react";
import { QRCodeDialog } from "./control/qr-code-dialog";

interface QRCodeCellProps {
    qrCodes: string[];
}

export const QRCodeCell: React.FC<QRCodeCellProps> = ({ qrCodes }) => {
    const [selectedQR, setSelectedQR] = React.useState<string | null>(null);

    return (
        <>
            <div className="flex space-x-2">
                {qrCodes.map((qrCode, index) => (
                    <div
                        key={index}
                        className="cursor-pointer"
                        title={`QR Code: ${qrCode}`}
                        onClick={() => setSelectedQR(qrCode)}
                    >
                        <QRCodeSVG value={qrCode} size={24} />
                    </div>
                ))}
            </div>
            <QRCodeDialog selectedQR={selectedQR} onClose={() => setSelectedQR(null)} />
        </>
    );
};
