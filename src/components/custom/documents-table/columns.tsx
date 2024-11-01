"use client"

import { ColumnDef } from "@tanstack/react-table";
import { QRCodeSVG } from "qrcode.react";
import { DataTableColumnHeader } from "@/components/custom/table/data-table-column-header";
import { DataTableRowActions } from "./data-table-row-actions";
import { Task } from "@/lib/faker/data/schema";
import { Badge } from "@/components/ui/badge";
import { categories, statuses } from "@/lib/faker/data/data";

export const columns: ColumnDef<Task>[] = [

    /**
     * enable this is the table you want can be selected
     * 
     * import { Checkbox } from "@/components/ui/checkbox"
     * {
     *     id: "select",
     *     header: ({ table }) => (
     *         <Checkbox
     *         checked={
     *             table.getIsAllPageRowsSelected() ||
     *             (table.getIsSomePageRowsSelected() && "indeterminate")
     *         }
     *         onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
     *         aria-label="Select all"
     *         className="translate-y-[2px]"
     *         />
     *     ),
     *     cell: ({ row }) => (
     *         <Checkbox
     *         checked={row.getIsSelected()}
     *         onCheckedChange={(value) => row.toggleSelected(!!value)}
     *         aria-label="Select row"
     *         className="translate-y-[2px]"
     *         />
     *     ),
     *     enableSorting: false,
     *     enableHiding: false,
     * },
     */

    {
        accessorKey: "qr",
        header: ({ column }) => (
            <DataTableColumnHeader column={column} title="QR" />
        ),
        cell: ({ row }) => {
            const qrCodes = row.getValue("qr") as string[];
            return (
                <div className="flex space-x-2">
                    {qrCodes.map((qrCode, index) => (
                        <div
                            key={index}
                            className="cursor-pointer"
                            title={`QR Code: ${qrCode}`}
                        >
                            <QRCodeSVG value={qrCode} size={24} />
                        </div>
                    ))}
                </div>
            );
        },
        enableSorting: false,
    },
    {
        accessorKey: "code",
        header: ({ column }) => (
            <DataTableColumnHeader column={column} title="Code" />
        ),
        cell: ({ row }) => {
            const code = row.getValue("code") as string;
            return <span title={`Code: ${code}`}>{code}</span>;
        },
    },
    {
        accessorKey: "origin_office",
        header: ({ column }) => (
            <DataTableColumnHeader column={column} title="Origin Office" />
        ),
        cell: ({ row }) => {
            const originOffice = row.getValue("origin_office") as string;
            return <span title={`Origin Office: ${originOffice}`}>{originOffice}</span>;
        },
    },
    {
        accessorKey: "title",
        header: ({ column }) => (
            <DataTableColumnHeader column={column} title="Subject/Title" />
        ),
        cell: ({ row }) => {
            const title = row.getValue("title") as string;
            return <span className="font-medium" title={`Title: ${title}`}>{title}</span>;
        },
    },
    {
        accessorKey: "category",
        header: ({ column }) => (
            <DataTableColumnHeader column={column} title="Category" />
        ),
        cell: ({ row }) => {
            const categoryValue = row.getValue("category") as string;
            const category = categories.find((cat) => cat.value === categoryValue);
            return category ? <Badge variant="outline">{category.label}</Badge> : null;
        },
    },
    {
        accessorKey: "type",
        header: ({ column }) => (
            <DataTableColumnHeader column={column} title="Type" />
        ),
        cell: ({ row }) => {
            const type = row.getValue("type") as string;
            return <span title={`Type: ${type}`}>{type}</span>;
        },
    },
    {
        accessorKey: "created_by",
        header: ({ column }) => (
            <DataTableColumnHeader column={column} title="Created By" />
        ),
        cell: ({ row }) => {
            const createdBy = row.getValue("created_by") as string;
            return <span title={`Created By: ${createdBy}`}>{createdBy}</span>;
        },
    },
    {
        accessorKey: "date_created",
        header: ({ column }) => (
            <DataTableColumnHeader column={column} title="Date Created" />
        ),
        cell: ({ row }) => {
            const dateCreated = row.getValue("date_created") as string;
            const date = new Date(dateCreated);
            return <span title={`Date Created: ${date.toDateString()}`}>{date.toDateString()}</span>;
        },
    },
    {
        accessorKey: "status",
        header: ({ column }) => (
            <DataTableColumnHeader column={column} title="Status" />
        ),
        cell: ({ row }) => {
            const status = statuses.find((stat) => stat.value === row.getValue("status"));
            return status ? (
                <div className="flex items-center" title={`Status: ${status.label}`}>
                    {status.icon && <status.icon className="mr-2 h-4 w-4 text-muted-foreground" />}
                    <span>{status.label}</span>
                </div>
            ) : null;
        },
        filterFn: (row, id, value) => value.includes(row.getValue(id)),
    },
    {
        id: "actions",
        header: "Actions",
        cell: ({ row }) => (
            <div title="Row Actions">
                <DataTableRowActions row={row} />
            </div>
        ),
    },
];
