"use client"

import { DotsHorizontalIcon } from "@radix-ui/react-icons"
import { Row } from "@tanstack/react-table"

import { Button } from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuSeparator,
    DropdownMenuShortcut,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

import { documentsSchema } from "@/lib/faker/documents/schema"

interface DataTableRowActionsProps<TData> {
    row: Row<TData>
}

export function DataTableRowActions<TData>({
    row,
}: DataTableRowActionsProps<TData>) {
    const document = documentsSchema.parse(row.original)

    return (
        <DropdownMenu>

            <DropdownMenuTrigger asChild>
                <Button
                    variant="ghost"
                    className="flex h-8 w-8 p-0 data-[state=open]:bg-muted"
                >
                    <DotsHorizontalIcon className="h-4 w-4" />
                    <span className="sr-only">Open menu</span>
                </Button>
            </DropdownMenuTrigger>

            <DropdownMenuContent align="end" className="w-[160px]">

                <DropdownMenuItem
                    onClick={() => navigator.clipboard.writeText(document.id)}>
                    Copy Document ID
                </DropdownMenuItem>

                <DropdownMenuItem>View</DropdownMenuItem>

                <DropdownMenuItem>Edit</DropdownMenuItem>

                <DropdownMenuItem>Release</DropdownMenuItem>

                <DropdownMenuSeparator />

                <DropdownMenuItem>
                    Delete
                    <DropdownMenuShortcut>⌘⌫</DropdownMenuShortcut>
                </DropdownMenuItem>

            </DropdownMenuContent>

        </DropdownMenu>
    )
}