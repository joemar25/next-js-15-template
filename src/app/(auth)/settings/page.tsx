import type { Metadata } from "next";
import { DashboardHeader } from "@/components/custom/dashboard/header"

export const metadata: Metadata = {
    title: "DMS | Settings",
    description: "User Settings",
};

export default function Page() {
    return (
        <>
            <DashboardHeader
                breadcrumbs={[
                    { label: "Settings", href: "/settings", active: true },
                ]}
            />
            <div className="flex flex-1 flex-col gap-4 p-4 pt-6">
                Settings
                <div className="grid auto-rows-min gap-4 md:grid-cols-3">
                    <div className="aspect-video rounded-xl bg-muted/50" />
                    <div className="aspect-video rounded-xl bg-muted/50" />
                    <div className="aspect-video rounded-xl bg-muted/50" />
                </div>
            </div>
        </>
    )
}