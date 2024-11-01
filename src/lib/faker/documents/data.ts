// src\lib\faker\data\data.tsx
import {
    ArrowDownIcon,
    ArrowRightIcon,
    ArrowUpIcon,
    CircleIcon,
    InfoCircledIcon,
    StopwatchIcon,
} from "@radix-ui/react-icons"
import { RadioReceiverIcon } from "lucide-react"

export const categories = [
    {
        value: "confidential",
        label: "Confidential",
    },
    {
        value: "marketing",
        label: "Marketing",
    },
    {
        value: "legal",
        label: "Legal",
    },
    {
        value: "hr",
        label: "HR",
    },
    {
        value: "financial",
        label: "Financial",
    },
    {
        value: "internal",
        label: "Internal",
    },
    {
        value: "external",
        label: "External",
    },
]

export const origin_offices = [
    {
        value: "header_office",
        label: "Head Office",
    },
    {
        value: "branch_office",
        label: "Branch Office",
    },
    {
        value: "regional_office",
        label: "Regional Office",
    },
]

export const types = [
    {
        label: "report",
        value: "Report",
        icon: ArrowDownIcon,
    },
    {
        label: "meeting",
        value: "Meeting",
        icon: ArrowRightIcon,
    },
    {
        label: "document",
        value: "Document",
        icon: ArrowUpIcon,
    },
    {
        label: "email",
        value: "Email",
        icon: ArrowUpIcon,
    },
]

export const statuses = [
    {
        value: "for_dispatch",
        label: "For Dispatch",
        icon: InfoCircledIcon,
    },
    {
        value: "incoming",
        label: "Incoming",
        icon: InfoCircledIcon,
    },
    {
        value: "recieved",
        label: "Recieved",
        icon: RadioReceiverIcon,
    },
    {
        value: "outgoing",
        label: "Outgoing",
        icon: CircleIcon,
    },
    {
        value: "completed",
        label: "Completed",
        icon: StopwatchIcon,
    },
]