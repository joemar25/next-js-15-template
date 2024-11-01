
import { promises as fs } from "fs"
import path from "path"
import { Metadata } from "next"
import { z } from "zod"
import { DashboardHeader } from "@/components/custom/dashboard/header"
import { columns } from "@/components/custom/documents-table/columns"
import { DataTable } from "@/components/custom/documents-table/data-table"
import { documentsSchema } from "@/lib/faker/data/schema"

export const metadata: Metadata = {
    title: "DMS | Documents",
    description: "IPOPHIL Documents",
};

async function getTasks() {
    const data = await fs.readFile(
        path.join(process.cwd(), "src/lib/faker/data/documents.json")
    )

    const tasks = JSON.parse(data.toString())

    return z.array(documentsSchema).parse(tasks)
}

export default async function TaskPage() {
    const tasks = await getTasks()

    return (
        <>
            <DashboardHeader
                breadcrumbs={[
                    { label: "Documents", href: "/documents", active: true },
                ]}
            />

            <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
                <DataTable
                    data={tasks}
                    columns={columns}
                    selection={false}
                />
            </div>
        </>
    )
}