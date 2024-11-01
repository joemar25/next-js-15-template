import React from "react";
import { QRCodeSVG } from "qrcode.react";
import Barcode from "react-barcode";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogClose
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

interface QRCodeDialogProps {
    selectedCode: { type: 'QR' | 'Barcode', value: string } | null;
    onClose: () => void;
}

export const QRCodeDialog: React.FC<QRCodeDialogProps> = ({ selectedCode, onClose }) => {
    return (
        <Dialog open={!!selectedCode} onOpenChange={(isOpen) => !isOpen && onClose()}>
            <DialogContent className="max-w-fit">
                <DialogHeader>
                    <DialogTitle className="text-center print-hidden">
                        {selectedCode?.type === 'QR' ? 'QR Code' : 'Barcode'}
                    </DialogTitle>
                </DialogHeader>
                {selectedCode && (
                    <div className="flex flex-col items-center print-container">
                        {selectedCode.type === 'QR' ? (
                            <QRCodeSVG
                                value={selectedCode.value}
                                className="print-code qr-code"
                                size={260}
                                level="Q"
                            />
                        ) : (
                            <div className="print-code barcode-container">
                                <Barcode
                                    value={selectedCode.value}
                                    width={4}
                                    height={200}
                                    fontSize={24}
                                    marginTop={20}
                                    marginBottom={20}
                                />
                            </div>
                        )}
                        <div className="print-hidden mt-4 space-x-4">
                            <Button
                                onClick={() => {
                                    setTimeout(() => {
                                        window.print();
                                    }, 100);
                                }}
                                className="px-4 py-2"
                            >
                                Print {selectedCode.type}
                            </Button>
                            <DialogClose asChild>
                                <Button onClick={onClose} className="px-4 py-2">
                                    Close
                                </Button>
                            </DialogClose>
                        </div>
                    </div>
                )}
            </DialogContent>
        </Dialog>
    );
};