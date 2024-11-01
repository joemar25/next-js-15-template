"use client"

import React from "react"
import { addDays, format, parseISO } from "date-fns"
import { Calendar as CalendarIcon } from "lucide-react"
import type { DateRange } from "react-day-picker"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Calendar } from "@/components/ui/calendar"
import { Separator } from "@/components/ui/separator"
import { ScrollArea } from "@/components/ui/scroll-area"
import type { Task } from "@/lib/faker/documents/schema"
import { categories, types } from "@/lib/faker/documents/data"

interface ReportGeneratorProps {
    data: Task[]
}

const ReportGenerator = ({ data }: ReportGeneratorProps) => {
    const [date, setDate] = React.useState<DateRange | undefined>({
        from: new Date(),
        to: addDays(new Date(), 7),
    })
    const [classification, setClassification] = React.useState("")
    const [type, setType] = React.useState("")

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        console.log({
            classification,
            type,
            dateFrom: date?.from,
            dateTo: date?.to,
        })
    }

    const handleDateSelect = (newDate: DateRange | undefined) => {
        setDate(newDate)
    }

    const filteredData = React.useMemo(() => {
        return data.filter((item) => {
            const dateMatch = date?.from && date?.to
                ? new Date(item.date_created) >= date.from && new Date(item.date_created) <= date.to
                : true
            const classificationMatch = classification
                ? item.classification === classification
                : true
            const typeMatch = type
                ? item.type === type
                : true

            return dateMatch && classificationMatch && typeMatch
        })
    }, [data, date, classification, type])

    return (
        <div className="grid grid-cols-2 gap-6">
            <form onSubmit={handleSubmit}>
                <Card className="w-full">
                    <CardHeader>
                        <CardTitle>Generate Reports</CardTitle>
                        <CardDescription>
                            Create a custom report by selecting filters and date range
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="grid gap-6">
                            <div className="grid grid-cols-2 gap-4">
                                <div className="grid gap-2">
                                    <Label htmlFor="classification">Classification</Label>
                                    <Select value={classification} onValueChange={setClassification}>
                                        <SelectTrigger id="classification">
                                            <SelectValue placeholder="Select classification" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            {categories.map((c) => (
                                                <SelectItem key={c.value} value={c.value}>
                                                    {c.label}
                                                </SelectItem>
                                            ))}
                                        </SelectContent>
                                    </Select>
                                </div>

                                <div className="grid gap-2">
                                    <Label htmlFor="type">Type</Label>
                                    <Select value={type} onValueChange={setType}>
                                        <SelectTrigger id="type">
                                            <SelectValue placeholder="Select type" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            {types.map((t) => (
                                                <SelectItem key={t.value} value={t.value}>
                                                    {t.label}
                                                </SelectItem>
                                            ))}
                                        </SelectContent>
                                    </Select>
                                </div>
                            </div>

                            <Separator />

                            <div className="grid gap-2">
                                <Label>Date Range</Label>
                                <Popover>
                                    <PopoverTrigger asChild>
                                        <Button
                                            id="date"
                                            variant="outline"
                                            className={cn(
                                                "w-full justify-start text-left font-normal",
                                                !date && "text-muted-foreground"
                                            )}
                                        >
                                            <CalendarIcon className="mr-2 h-4 w-4" />
                                            {date?.from ? (
                                                date.to ? (
                                                    <>
                                                        {format(date.from, "LLL dd, y")} -{" "}
                                                        {format(date.to, "LLL dd, y")}
                                                    </>
                                                ) : (
                                                    format(date.from, "LLL dd, y")
                                                )
                                            ) : (
                                                <span>Pick a date range</span>
                                            )}
                                        </Button>
                                    </PopoverTrigger>
                                    <PopoverContent className="w-auto p-0" align="start">
                                        <Calendar
                                            initialFocus
                                            mode="range"
                                            defaultMonth={date?.from}
                                            selected={date}
                                            onSelect={handleDateSelect}
                                            numberOfMonths={2}
                                        />
                                    </PopoverContent>
                                </Popover>
                            </div>
                        </div>
                    </CardContent>
                    <CardFooter>
                        <Button type="submit" className="w-full">
                            Generate Report
                        </Button>
                    </CardFooter>
                </Card>
            </form>

            <Card className="w-full">
                <CardHeader>
                    <CardTitle>Preview Data</CardTitle>
                    <CardDescription>
                        Showing {filteredData.length} results based on your selections
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="space-y-4">
                        <div className="rounded-lg border p-4">
                            <div className="space-y-2">
                                <h3 className="font-semibold">Selected Filters</h3>
                                <dl className="grid grid-cols-3 gap-2 text-sm">
                                    <div>
                                        <dt className="font-medium">Classification:</dt>
                                        <dd className="text-muted-foreground">
                                            {classification ? categories.find(c => c.value === classification)?.label : 'All'}
                                        </dd>
                                    </div>
                                    <div>
                                        <dt className="font-medium">Type:</dt>
                                        <dd className="text-muted-foreground">
                                            {type ? types.find(t => t.value === type)?.label : 'All'}
                                        </dd>
                                    </div>
                                    <div>
                                        <dt className="font-medium">Date Range:</dt>
                                        <dd className="text-muted-foreground">
                                            {date?.from && date?.to
                                                ? `${format(date.from, "MMM dd")} - ${format(date.to, "MMM dd")}`
                                                : 'All dates'}
                                        </dd>
                                    </div>
                                </dl>
                            </div>
                        </div>

                        <ScrollArea className="h-[400px] rounded-md border">
                            <div className="space-y-4 p-4">
                                {filteredData.length > 0 ? (
                                    filteredData.map((item, index) => (
                                        <div
                                            key={item.id}
                                            className={cn(
                                                "rounded-lg border p-3",
                                                index !== filteredData.length - 1 && "border-b"
                                            )}
                                        >
                                            <div className="grid gap-1">
                                                <div className="flex items-center justify-between">
                                                    <div className="flex items-center gap-2">
                                                        <span className="font-medium">{item.title}</span>
                                                        <span className="text-xs text-muted-foreground">#{item.code}</span>
                                                    </div>
                                                    <span className="text-sm text-muted-foreground">
                                                        {format(parseISO(item.date_created), "MMM dd, yyyy")}
                                                    </span>
                                                </div>
                                                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                                    <span>Created by: {item.created_by}</span>
                                                    <span>•</span>
                                                    <span>Office: {item.origin_office}</span>
                                                </div>
                                                <div className="flex gap-2 text-xs">
                                                    <span className="rounded-full bg-blue-100 px-2 py-1 text-blue-800">
                                                        {item.classification}
                                                    </span>
                                                    <span className="rounded-full bg-green-100 px-2 py-1 text-green-800">
                                                        {item.type}
                                                    </span>
                                                    <span className="rounded-full bg-yellow-100 px-2 py-1 text-yellow-800">
                                                        {item.status}
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    ))
                                ) : (
                                    <div className="flex h-[300px] items-center justify-center text-muted-foreground">
                                        No matching records found
                                    </div>
                                )}
                            </div>
                        </ScrollArea>
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}

export default ReportGenerator