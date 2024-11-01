import React from "react";
import { QRCodeSVG } from "qrcode.react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogClose } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

interface QRCodeDialogProps {
    selectedQR: string | null;
    onClose: () => void;
}

export const QRCodeDialog: React.FC<QRCodeDialogProps> = ({ selectedQR, onClose }) => {
    return (
        <Dialog open={!!selectedQR} onOpenChange={(isOpen) => !isOpen && onClose()}>
            <DialogContent className="max-w-lg">
                <DialogHeader>
                    <DialogTitle className="text-center">QR Code</DialogTitle>
                </DialogHeader>
                {selectedQR && (
                    <div className="flex flex-col items-center">
                        <QRCodeSVG value={selectedQR} size={256} />
                        <Button
                            onClick={() => window.print()}
                            className="mt-4 px-4 py-2"
                        >
                            Print QR Code
                        </Button>
                        <DialogClose asChild>
                            <Button onClick={onClose} className="mt-2 px-4 py-2 bg-gray-600 text-white rounded">
                                Close
                            </Button>
                        </DialogClose>
                    </div>
                )}
            </DialogContent>
        </Dialog>
    );
};
