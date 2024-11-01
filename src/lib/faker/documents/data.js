"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.statuses = exports.types = exports.origin_offices = exports.categories = void 0;
// src\lib\faker\data\data.tsx
var react_icons_1 = require("@radix-ui/react-icons");
var lucide_react_1 = require("lucide-react");
exports.categories = [
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
];
exports.origin_offices = [
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
];
exports.types = [
    {
        label: "report",
        value: "Report",
        icon: react_icons_1.ArrowDownIcon,
    },
    {
        label: "meeting",
        value: "Meeting",
        icon: react_icons_1.ArrowRightIcon,
    },
    {
        label: "document",
        value: "Document",
        icon: react_icons_1.ArrowUpIcon,
    },
    {
        label: "email",
        value: "Email",
        icon: react_icons_1.ArrowUpIcon,
    },
];
exports.statuses = [
    {
        value: "for_dispatch",
        label: "For Dispatch",
        icon: react_icons_1.InfoCircledIcon,
    },
    {
        value: "incoming",
        label: "Incoming",
        icon: react_icons_1.InfoCircledIcon,
    },
    {
        value: "recieved",
        label: "Recieved",
        icon: lucide_react_1.RadioReceiverIcon,
    },
    {
        value: "outgoing",
        label: "Outgoing",
        icon: react_icons_1.CircleIcon,
    },
    {
        value: "completed",
        label: "Completed",
        icon: react_icons_1.StopwatchIcon,
    },
];
