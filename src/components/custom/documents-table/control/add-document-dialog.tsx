import React, { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogClose } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import { z } from "zod";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

// Zod schema for form validation
const documentSchema = z.object({
    title: z.string().min(1, "Title is required"),
    category: z.string().min(1, "Category is required"),
    type: z.string().min(1, "Type is required"),
    attachments: z.any().optional(),
});

type DocumentFormData = z.infer<typeof documentSchema>;

interface AddDocumentDialogProps {
    onClose: () => void;
}

export const AddDocumentDialog: React.FC<AddDocumentDialogProps> = ({ onClose }) => {
    const { register, handleSubmit, setValue, watch, formState: { errors } } = useForm<DocumentFormData>({
        resolver: zodResolver(documentSchema),
    });

    const onSubmit = (data: DocumentFormData) => {
        // Handle form submission logic here
        toast.success("Document Created", {
            description: "Your new document has been successfully created.",
            action: {
                label: "Undo",
                onClick: () => console.log("Undo"),
            },
        });
        onClose();
    };

    return (
        <Dialog open onOpenChange={(isOpen) => !isOpen && onClose()}>
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
                        <label htmlFor="category" className="block mb-1">Category *</label>
                        <Select onValueChange={(value) => setValue("category", value)}>
                            <SelectTrigger className="w-full">
                                <SelectValue placeholder="Select a category" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="confidential">Confidential</SelectItem>
                                <SelectItem value="marketing">Marketing</SelectItem>
                                <SelectItem value="legal">Legal</SelectItem>
                                <SelectItem value="hr">HR</SelectItem>
                                <SelectItem value="financial">Financial</SelectItem>
                            </SelectContent>
                        </Select>
                        {errors.category && <p className="text-red-500 text-sm">{errors.category.message}</p>}
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
                    <p className="text-sm text-gray-500">
                        Note: The following will be automatically generated:
                    </p>
                    <ul className="text-sm text-gray-500 list-disc list-inside">
                        <li>Document Code</li>
                        <li>Origin Office</li>
                        <li>Created By</li>
                        <li>Date Created</li>
                        <li>Empty Logbook</li>
                    </ul>
                    <div className="flex justify-end space-x-2">
                        <Button variant={"default"}>Create</Button>
                        <DialogClose asChild>
                            <Button variant={"secondary"} onClick={onClose}>
                                Cancel
                            </Button>
                        </DialogClose>
                    </div>
                </form>
            </DialogContent>
        </Dialog>
    );
};