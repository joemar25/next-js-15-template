"use client";

import { Cross2Icon } from "@radix-ui/react-icons";
import { Table } from "@tanstack/react-table";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { DataTableViewOptions } from "@/components/custom/table/data-table-view-options";
import { types, statuses, categories } from "@/lib/faker/documents/data";
import { DataTableFacetedFilter } from "@/components/custom/table/data-table-faceted-filter";
import { AddButton } from "./control/add-document-button";

interface DataTableToolbarProps<TData> {
    table: Table<TData>;
    onAdd?: () => void;
}

export function DataTableToolbar<TData>({ table, onAdd }: DataTableToolbarProps<TData>) {
    const isFiltered = table.getState().columnFilters.length > 0;

    const formatLabel = (label: string) => label.replace(/[_-]/g, " ");

    return (
        <div className="flex items-center justify-between">
            <div className="flex flex-1 items-center space-x-2">
                <Input
                    placeholder="Filter documents..."
                    value={(table.getColumn("title")?.getFilterValue() as string) ?? ""}
                    onChange={(event) =>
                        table.getColumn("title")?.setFilterValue(event.target.value)
                    }
                    className="h-8 w-[150px] lg:w-[250px]"
                />
                {table.getColumn("status") && (
                    <DataTableFacetedFilter
                        column={table.getColumn("status")}
                        title="Status"
                        options={statuses.map((status) => ({
                            label: formatLabel(status.label),
                            value: status.value,
                            icon: status.icon,
                        }))}
                    />
                )}
                {table.getColumn("type") && (
                    <DataTableFacetedFilter
                        column={table.getColumn("type")}
                        title="Types"
                        options={types.map((type) => ({
                            value: type.value,
                            label: formatLabel(type.label),
                            icon: type.icon,
                        }))}
                    />
                )}
                {table.getColumn("classification") && (
                    <DataTableFacetedFilter
                        column={table.getColumn("classification")}
                        title="Classifications"
                        options={categories.map((type) => ({
                            value: type.value,
                            label: formatLabel(type.label),
                        }))}
                    />
                )}
                {isFiltered && (
                    <Button
                        variant="ghost"
                        onClick={() => table.resetColumnFilters()}
                        className="h-8 px-2 lg:px-3"
                    >
                        Reset
                        <Cross2Icon className="ml-2 h-4 w-4" />
                    </Button>
                )}
            </div>
            <div className="flex items-center space-x-2">
                <AddButton onAdd={onAdd} />
                <DataTableViewOptions table={table} />
            </div>
        </div>
    );
}
