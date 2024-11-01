import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { PlusIcon } from "@radix-ui/react-icons";
import { AddDocumentDialog } from "./add-document-dialog";

interface AddButtonProps {
    onAdd?: () => void;
}

export const AddButton: React.FC<AddButtonProps> = ({ onAdd }) => {
    const [isDialogOpen, setIsDialogOpen] = useState(false);

    const handleOpenDialog = () => setIsDialogOpen(true);
    const handleCloseDialog = () => setIsDialogOpen(false);

    return (
        <>
            <Button
                variant="default"
                onClick={handleOpenDialog}
                className="h-8 px-2 lg:px-3"
            >
                <PlusIcon className="h-4 w-4" />
                Add
            </Button>
            {isDialogOpen && <AddDocumentDialog onClose={handleCloseDialog} />}
        </>
    );
};
