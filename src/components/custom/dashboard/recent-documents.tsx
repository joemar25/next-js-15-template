import {
    Avatar,
    AvatarFallback,
    AvatarImage,
} from "@/components/ui/avatar";
import { Card } from "@/components/ui/card";

const documentsData = [
    {
        filename: "Jeremiah's Payroll",
        classification: "Payroll Document",
        currentOffice: "Daraga, Albay",
        avatarSrc: "images/doc-icon-1.jpg",
        fallback: "JP",
    },
    {
        filename: "Annual Report 2023",
        classification: "Report",
        currentOffice: "Legazpi, Albay",
        avatarSrc: "images/doc-icon-2.jpg",
        fallback: "AR",
    },
    {
        filename: "Employee Records",
        classification: "Confidential",
        currentOffice: "Guinobatan, Albay",
        avatarSrc: "images/doc-icon-3.jpg",
        fallback: "ER",
    },
    {
        filename: "Budget Plan Q4",
        classification: "Financial",
        currentOffice: "Tabaco, Albay",
        avatarSrc: "images/doc-icon-4.jpg",
        fallback: "BP",
    },
    {
        filename: "Project Timeline",
        classification: "Planning Document",
        currentOffice: "Camalig, Albay",
        avatarSrc: "images/doc-icon-5.jpg",
        fallback: "PT",
    },
];

export function RecentDocuments() {
    return (
        <div className="space-y-4">
            {documentsData.map((doc, index) => (
                <Card
                    key={index}
                    className="flex items-center p-4 borderrounded-lg"
                >
                    <Avatar className="h-12 w-12">
                        <AvatarImage src={doc.avatarSrc} alt="Document Icon" />
                        <AvatarFallback>{doc.fallback}</AvatarFallback>
                    </Avatar>
                    <div className="ml-4 flex flex-col space-y-1 flex-grow">
                        <p className="text-sm font-medium">{doc.filename}</p>
                        <p className="text-xs text-muted-foreground">{doc.classification}</p>
                    </div>
                    <p className="text-xs text-muted-foreground ml-auto">{doc.currentOffice}</p>
                </Card>
            ))}
        </div>
    );
}
