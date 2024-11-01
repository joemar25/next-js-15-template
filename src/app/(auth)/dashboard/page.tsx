"use client"

import { DashboardHeader } from "@/components/custom/dashboard/header"
import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Overview } from "@/components/custom/dashboard/overview"
import { RecentDocuments } from "@/components/custom/dashboard/recent-documents"
import { Icons } from "@/components/ui/icons";
import { useRouter } from "next/navigation";
import { AddButton } from "@/components/custom/documents-table/control/add-document-button"

/**
 * not allowed in use client:
 * 
 * import type { Metadata } from "next";
 *  
 * export const metadata: Metadata = {
 *    title: "DMS | Dashboard",
 *    description: "IPOPHIL Dashboard Page",
 * };
 */

export default function Page() {

    const router = useRouter()

    return (
        <>
            <DashboardHeader
                breadcrumbs={[
                    { label: "Dashboard", href: "/dashboard", active: true },
                ]}
            />
            <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
                <div className="hidden flex-col md:flex">
                    <div className="flex-1 space-y-4">
                        <div className="flex items-center justify-between space-y-2">
                            <h2 className="text-3xl font-bold tracking-tight">Overview</h2>
                            <div className="flex items-center space-x-2">
                                <Button
                                    variant={'outline'}
                                    onClick={() => { router.push('/documents/recieved') }}>
                                    <Icons.recieved className="h-4 w-4" />
                                    Recieve
                                </Button>
                                <Button
                                    variant={'secondary'}
                                    onClick={() => { router.push('/documents/outgoing') }}>
                                    <Icons.completed className="h-4 w-4" />
                                    Release
                                </Button>
                                <AddButton title={"Add Document"} />
                            </div>
                        </div>
                        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                            <Card>
                                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                    <CardTitle className="text-sm font-medium">
                                        Total Incoming
                                    </CardTitle>
                                    <Icons.incoming className="h-4 w-4 text-muted-foreground" />
                                </CardHeader>
                                <CardContent>
                                    <div className="text-2xl font-bold">15</div>
                                    <p className="text-xs text-muted-foreground">
                                        +20.1% from last month
                                    </p>
                                </CardContent>
                            </Card>
                            <Card>
                                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                    <CardTitle className="text-sm font-medium">
                                        Total Recieved
                                    </CardTitle>
                                    <Icons.recieved className="h-4 w-4 text-muted-foreground" />
                                </CardHeader>
                                <CardContent>
                                    <div className="text-2xl font-bold">21</div>
                                    <p className="text-xs text-muted-foreground">
                                        +180.1% from last month
                                    </p>
                                </CardContent>
                            </Card>
                            <Card>
                                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                    <CardTitle className="text-sm font-medium">Total Outgoing</CardTitle>
                                    <Icons.outgoing className="h-4 w-4 text-muted-foreground" />
                                </CardHeader>
                                <CardContent>
                                    <div className="text-2xl font-bold">8</div>
                                    <p className="text-xs text-muted-foreground">
                                        +19% from last month
                                    </p>
                                </CardContent>
                            </Card>
                            <Card>
                                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                    <CardTitle className="text-sm font-medium">
                                        Total Completed
                                    </CardTitle>
                                    <Icons.completed className="h-4 w-4 text-muted-foreground" />
                                </CardHeader>
                                <CardContent>
                                    <div className="text-2xl font-bold">9</div>
                                    <p className="text-xs text-muted-foreground">
                                        +201 since last hour
                                    </p>
                                </CardContent>
                            </Card>
                        </div>
                        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
                            <Card className="col-span-4">
                                <CardHeader>
                                    <CardTitle>Document Status</CardTitle>
                                </CardHeader>
                                <CardContent className="pl-2">
                                    <Overview />
                                </CardContent>
                            </Card>
                            <Card className="col-span-3">
                                <CardHeader>
                                    <CardTitle>My Recent Documents</CardTitle>
                                    <CardDescription>
                                        You made 265 documents this month.
                                    </CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <RecentDocuments />
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
