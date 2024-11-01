"use client";

import * as React from "react";
import { ColumnDef } from "@tanstack/react-table";
import { DataTableColumnHeader } from "@/components/custom/table/data-table-column-header";
import { DataTableRowActions } from "./data-table-row-actions";
import { Task } from "@/lib/faker/users/schema";
import { Badge } from "@/components/ui/badge";
import { status_types, user_types } from "@/lib/faker/users/data";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip";
import { Icons } from "@/components/ui/icons";

export const columns: ColumnDef<Task>[] = [
    {
        id: "profile",
        accessorFn: (row) => row,
        header: ({ column }) => (
            <DataTableColumnHeader column={column} title="User" />
        ),
        cell: ({ row }) => {
            const data = row.original;
            const initials = `${data.first_name?.[0] || ''}${data.last_name?.[0] || ''}`.toUpperCase();

            return (
                <div className="flex items-center gap-3">
                    <Avatar className="h-9 w-9">
                        <AvatarImage
                            src={data.profile_url}
                            alt={`${data.first_name} ${data.last_name}`}
                        />
                        <AvatarFallback className="font-medium">
                            {initials || 'U'}
                        </AvatarFallback>
                    </Avatar>
                    <div className="flex flex-col">
                        <div className="font-semibold">
                            {`${data.first_name} ${data.last_name}`}
                        </div>
                        <div className="text-sm text-muted-foreground">
                            @{data.username}
                        </div>
                    </div>
                </div>
            );
        },
    },
    {
        id: "contact",
        accessorFn: (row) => row.email,
        header: ({ column }) => (
            <DataTableColumnHeader column={column} title="Contact" />
        ),
        cell: ({ row }) => {
            const data = row.original;
            return (
                <TooltipProvider>
                    <Tooltip>
                        <TooltipTrigger className="flex items-center gap-2">
                            <div className="w-4 h-4 text-muted-foreground">
                                <Icons.mail className="w-4 h-4" />
                            </div>
                            <span className="text-sm truncate max-w-[200px]">
                                {data.email}
                            </span>
                        </TooltipTrigger>
                        <TooltipContent>
                            <p>{data.email}</p>
                        </TooltipContent>
                    </Tooltip>
                </TooltipProvider>
            );
        },
    },
    {
        id: "position",
        accessorFn: (row) => row,
        header: ({ column }) => (
            <DataTableColumnHeader column={column} title="Position" />
        ),
        cell: ({ row }) => {
            const data = row.original;
            return (
                <div className="flex flex-col gap-1">
                    <div className="font-medium text-sm">
                        {data.title}
                    </div>
                    <Badge variant="outline" className="w-fit text-xs">
                        Department {data.department_id}
                    </Badge>
                </div>
            );
        },
    },
    {
        id: "role",
        accessorKey: "role",
        header: ({ column }) => (
            <DataTableColumnHeader column={column} title="Role" />
        ),
        cell: ({ row }) => {
            const role = row.original.role;
            const roleType = user_types.find((r) => r.value === role);
            return (
                <Badge variant={role === "admin" ? "default" : "secondary"} className="w-fit">
                    {roleType?.label || role}
                </Badge>
            );
        },
        filterFn: (row, id, filterValue) => {
            return filterValue.includes(row.getValue(id));
        },
    },
    {
        id: "status",
        accessorKey: "status",
        header: ({ column }) => (
            <DataTableColumnHeader column={column} title="Status" />
        ),
        cell: ({ row }) => {
            const status = row.original.status;
            const statusType = status_types.find((s) => s.value === status);
            return (
                <div className="flex items-center gap-2">
                    <div
                        className={
                            status === "active"
                                ? "h-2.5 w-2.5 rounded-full bg-emerald-500"
                                : "h-2.5 w-2.5 rounded-full bg-gray-300"
                        }
                    />
                    <span className={
                        status === "active"
                            ? "text-sm font-medium text-emerald-600"
                            : "text-sm font-medium text-gray-600"
                    }>
                        {statusType?.label || status}
                    </span>
                </div>
            );
        },
        filterFn: (row, id, filterValue) => {
            return filterValue.includes(row.getValue(id));
        },
    },
    {
        id: "location",
        accessorKey: "address",
        header: ({ column }) => (
            <DataTableColumnHeader column={column} title="Location" />
        ),
        cell: ({ row }) => {
            const address = row.original.address;
            return (
                <TooltipProvider>
                    <Tooltip>
                        <TooltipTrigger className="flex items-center gap-2">
                            <div className="w-4 h-4 text-muted-foreground">
                                <Icons.mapPin className="w-4 h-4" />
                            </div>
                            <span className="text-sm truncate max-w-[200px]">
                                {address}
                            </span>
                        </TooltipTrigger>
                        <TooltipContent>
                            <p>{address}</p>
                        </TooltipContent>
                    </Tooltip>
                </TooltipProvider>
            );
        },
    },
    {
        id: "dates",
        accessorFn: (row) => row,
        header: ({ column }) => (
            <DataTableColumnHeader column={column} title="Activity" />
        ),
        cell: ({ row }) => {
            const data = row.original;
            return (
                <div className="flex flex-col gap-1">
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                        <Icons.calendar className="w-3 h-3" />
                        <span>Created: {new Intl.DateTimeFormat('en-US', {
                            dateStyle: 'medium'
                        }).format(new Date(data.created_at))}</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                        <Icons.refresh className="w-3 h-3" />
                        <span>Updated: {new Intl.DateTimeFormat('en-US', {
                            dateStyle: 'medium'
                        }).format(new Date(data.updated_at))}</span>
                    </div>
                </div>
            );
        },
    },
    {
        id: "actions",
        enableSorting: false,
        enableHiding: false,
        cell: ({ row }) => <DataTableRowActions row={row} />,
    },
];