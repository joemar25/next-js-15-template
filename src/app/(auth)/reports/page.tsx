import type { Metadata } from "next";
import { DashboardHeader } from "@/components/custom/dashboard/header"

export const metadata: Metadata = {
    title: "DMS | Reports",
    description: "IPOPHIL Dashboard Page",
};

export default function Page() {
    return (
        <>
            <DashboardHeader
                breadcrumbs={[
                    { label: "Reports", href: "/reports", active: true },
                ]}
            />
            <div className="flex flex-1 flex-col gap-4 p-4 pt-6">
                Generate Reports
                <div className="">
                    <ol>
                        <li>classifications</li>
                        <li>type</li>
                        <li>date from</li>
                        <li>date to</li>
                    </ol>
                </div>
            </div>
        </>
    )
}