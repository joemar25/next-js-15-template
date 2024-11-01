"use client";

import React from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogClose } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { scanDocumentSchema } from "@/lib/validations/documents/scan_documents";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Icons } from "@/components/ui/icons";

type DocumentFormData = z.infer<typeof scanDocumentSchema>;

interface AddDocumentDialogProps {
    onCloseAction: () => void;
}

export const AddDocumentDialog: React.FC<AddDocumentDialogProps> = ({ onCloseAction }) => {
    const { register, handleSubmit, setValue, formState: { errors } } = useForm<DocumentFormData>({
        resolver: zodResolver(scanDocumentSchema),
    });

    const onSubmit = (data: DocumentFormData) => {
        console.log(data)
        // Handle form submission logic here
        toast.success("Document Released", {
            description: "Your document has been successfully Released.",

            /**
             *  No undo for this action
             * 
             *  action: {
             *     label: "Undo",
             *     onClick: () => console.log("Undo"),
             *  },
             * 
             */

        });
        onCloseAction();
    };

    return (
        <Dialog open onOpenChange={(isOpen) => !isOpen && onCloseAction()}>
            <DialogContent className="max-w-md">
                <DialogHeader>
                    <DialogTitle>Recieve Document</DialogTitle>
                </DialogHeader>
                <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col space-y-4">
                    <div>
                        <label htmlFor="code" className="block mb-1">Document Code</label>
                        <Input
                            id="code"
                            placeholder="Enter document code"
                            {...register("code")}
                            className="w-full"
                        />
                        {errors.code && <p className="text-red-500 text-sm">{errors.code.message}</p>}
                    </div>

                    <div className="flex justify-end space-x-2">
                        <Button type="submit" variant={"default"}>Proceed</Button>
                        <DialogClose asChild>
                            <Button variant={"secondary"} onClick={onCloseAction}>
                                Cancel
                            </Button>
                        </DialogClose>
                    </div>

                    <Card>
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium">
                                Scanning Instructions
                            </CardTitle>
                        </CardHeader>
                        <CardContent>

                            {
                                /**
                                 * Note: 
                                 * 
                                 * Instead of ol it shoud be in list item with numbers.
                                 * type=1 is not working
                                 * 
                                 * */
                            }

                            <ol type="1" className="text-sm text-gray-500 list-disc list-inside">
                                <li>Click the QR button below or on the right.</li>
                                <li>Place the document's QR code or barcode under the scanner.</li>
                                <li>
                                    Wait for the scanner to automatically detect and fill the code in the
                                    input box. The preview of the document or document details will be
                                    seen on the preview panel if the scanning is successful.
                                </li>
                                <li>
                                    If the scanner fails to detect the code, manually input the code into
                                    the input box.
                                </li>
                            </ol>

                        </CardContent>
                    </Card>
                </form>
            </DialogContent>
        </Dialog >
    );
};
