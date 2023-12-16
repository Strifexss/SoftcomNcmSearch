import {z} from "zod"

export const SearchSchema = z.object({
    Ncm: z.string().min(8,"Necessário possuir 8 digitos").max(8, "Necessário possuir 8 digitos"),
})

export type SearchSchemaType = z.infer<typeof SearchSchema>