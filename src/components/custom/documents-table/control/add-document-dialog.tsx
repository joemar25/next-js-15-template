"use client";

import React from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogClose } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import { z } from "zod";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { createDocumentSchema } from "@/lib/validations/documents/create_documents";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

type DocumentFormData = z.infer<typeof createDocumentSchema>;

interface AddDocumentDialogProps {
    onCloseAction: () => void;
}

export const AddDocumentDialog: React.FC<AddDocumentDialogProps> = ({ onCloseAction }) => {
    const { register, handleSubmit, setValue, formState: { errors } } = useForm<DocumentFormData>({
        resolver: zodResolver(createDocumentSchema),
    });

    const onSubmit = (data: DocumentFormData) => {
        console.log(data)
        // Handle form submission logic here
        toast.success("Document Created", {
            description: "Your new document has been successfully created.",
            action: {
                label: "Undo",
                onClick: () => console.log("Undo"),
            },
        });
        onCloseAction();
    };

    return (
        <Dialog open onOpenChange={(isOpen) => !isOpen && onCloseAction()}>
            <DialogContent className="max-w-md">
                <DialogHeader>
                    <DialogTitle>Create New Document</DialogTitle>
                </DialogHeader>
                <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col space-y-4">
                    <div>
                        <label htmlFor="title" className="block mb-1">Subject/Title *</label>
                        <Input
                            id="title"
                            placeholder="Enter document title"
                            {...register("title")}
                            className="w-full"
                        />
                        {errors.title && <p className="text-red-500 text-sm">{errors.title.message}</p>}
                    </div>
                    <div>
                        <label htmlFor="classification" className="block mb-1">Classification *</label>
                        <Select onValueChange={(value) => setValue("classification", value)}>
                            <SelectTrigger className="w-full">
                                <SelectValue placeholder="Select a classification" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="confidential">Confidential</SelectItem>
                                <SelectItem value="marketing">Marketing</SelectItem>
                                <SelectItem value="legal">Legal</SelectItem>
                                <SelectItem value="hr">HR</SelectItem>
                                <SelectItem value="financial">Financial</SelectItem>
                            </SelectContent>
                        </Select>
                        {errors.classification && <p className="text-red-500 text-sm">{errors.classification.message}</p>}
                    </div>
                    <div>
                        <label htmlFor="type" className="block mb-1">Type *</label>
                        <Select onValueChange={(value) => setValue("type", value)}>
                            <SelectTrigger className="w-full">
                                <SelectValue placeholder="Select a type" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="report">Report</SelectItem>
                                <SelectItem value="meeting">Meeting</SelectItem>
                                <SelectItem value="document">Document</SelectItem>
                                <SelectItem value="email">Email</SelectItem>
                            </SelectContent>
                        </Select>
                        {errors.type && <p className="text-red-500 text-sm">{errors.type.message}</p>}
                    </div>
                    <div>
                        <label htmlFor="attachments" className="block mb-1">Attachments</label>
                        <Input type="file" {...register("attachments")} />
                    </div>

                    <Card>
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium">
                                <p className="text-sm text-gray-500">
                                    Note, the following will be automatically generated:
                                </p>
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <ul className="text-sm text-gray-500 list-disc list-inside">
                                <li>Document Code</li>
                                <li>Origin Office</li>
                                <li>Created By</li>
                                <li>Date Created</li>
                                <li>Empty Logbook</li>
                            </ul>
                        </CardContent>
                    </Card>

                    <div className="flex justify-end space-x-2">
                        <Button type="submit" variant={"default"}>Create</Button>
                        <DialogClose asChild>
                            <Button variant={"secondary"} onClick={onCloseAction}>
                                Cancel
                            </Button>
                        </DialogClose>
                    </div>
                </form>
            </DialogContent>
        </Dialog>
    );
};
