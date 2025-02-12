import {z} from "zod"

export const messageSchema = z.object({
    content: z.string()
    .min(10,{message: 'Content must be bigger then 10 char'})
    .max(300,{message: "message should be less than 300 char"})
})