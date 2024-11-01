import { z } from "zod";

export const documentSchema = z.object({
    title: z.string().min(1, "Title is required"),
    category: z.string().min(1, "Category is required"),
    type: z.string().min(1, "Type is required"),
    attachments: z.any().optional(),
});