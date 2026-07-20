import { z } from "zod";

export const notifySchema = z.object({
    name: z
        .string()
        .min(2, "O nome deve ter pelo menos 2 caracteres."),

    email: z
        .string()
        .email("Digite um e-mail válido."),
});

export type NotifyFormData = z.infer<typeof notifySchema>