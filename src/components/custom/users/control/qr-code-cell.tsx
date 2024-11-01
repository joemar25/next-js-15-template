"use client";

import React from "react";
import { QRCodeSVG } from "qrcode.react";
import Barcode from "react-barcode";
import { QRCodeDialog } from "./qr-code-dialog";

interface QRCodeCellProps {
    codes: { type: 'QR' | 'Barcode', value: string }[];
}

export const QRCodeCell: React.FC<QRCodeCellProps> = ({ codes }) => {
    const [selectedCode, setSelectedCode] = React.useState<{ type: 'QR' | 'Barcode', value: string } | null>(null);

    return (
        <>
            <div className="flex space-x-2">
                {codes.map((code, index) => (
                    <div
                        key={`code-${index}`}
                        className="cursor-pointer"
                        title={`${code.type} Code: ${code.value}`}
                        onClick={() => setSelectedCode(code)}
                    >
                        {code.type === 'QR' ? (
                            <QRCodeSVG value={code.value} size={24} />
                        ) : (
                            <Barcode
                                value={code.value}
                                width={0.5}
                                height={5}
                                fontSize={0}
                            />
                        )}
                    </div>
                ))}
            </div>
            <QRCodeDialog selectedCode={selectedCode} onClose={() => setSelectedCode(null)} />
        </>
    );
};
