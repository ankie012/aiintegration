import {z} from 'zod'

export const usernameValidation = z
.string()
.min(2, "USername must be atleast 2 characters")
.max(20,"Username must be no more than 20 charcters")
.regex(/^[a-zA-Z0-9_]+$/,"Username must not contain special charchter")


export const signUpSchema = z.object({
    username: usernameValidation,
    email: z.string().email({message: 'Invalid email adress'}),
    password: z.string().min(6,{message: "password must be at least 6 characters"})
})