import { z } from "zod";

export const documentsSchema = z.object({
    id: z.string(),
    code: z.string(),
    qr: z.array(z.string().regex(/^[a-zA-Z0-9]{10}$/)).length(2),
    title: z.string(),
    category: z.string(),
    type: z.string(),
    created_by: z.string(),
    date_created: z.string(),
    origin_office: z.string(),
    status: z.string(),
});

export type Task = z.infer<typeof documentsSchema>;
