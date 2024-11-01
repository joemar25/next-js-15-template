import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { AddDocumentDialog } from "./add-document-dialog";
import { Receipt } from "lucide-react";

interface AddButtonProps {
    title?: string;
    onAdd?: () => void;
}

export const AddButton: React.FC<AddButtonProps> = ({ title = "Add", onAdd }) => {
    const [isDialogOpen, setIsDialogOpen] = useState(false);

    const handleOpenDialog = () => {
        if (onAdd) onAdd();
        setIsDialogOpen(true);
    };
    const handleCloseDialog = () => setIsDialogOpen(false);

    return (
        <>
            <Button
                variant="default"
                onClick={handleOpenDialog}
                className="h-8 px-2 lg:px-3"
            >
                <Receipt className="h-4 w-4" />
                {title}
            </Button>
            {isDialogOpen && <AddDocumentDialog onCloseAction={handleCloseDialog} />}
        </>
    );
};
