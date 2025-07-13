import { z } from "zod";

export const paraguaySchema = z.object({
  email: z
    .string()
    .email("Correo inválido")
    .refine((email) => email.endsWith(".py"), "Debe ser dominio .py"),
  password: z
    .string()
    .min(8, "La contraseña debe tener al menos 8 caracteres")
    .regex(/[A-Z]/, "La contraseña debe tener al menos una mayúscula")
    .regex(/\d/, "La contraseña debe tener al menos un número"),
  cedula: z
    .string()
    .regex(/^\d{6,8}$/, "La cédula debe tener solo números (6-8 dígitos)"),
  telefono: z.string().regex(/^(098|097|096|099)\d{6,7}$/, "Ej: 098123456"),
  nombre: z.string().min(2, "Mínimo 2 caracteres"),
});

export type ParaguayFormData = z.infer<typeof paraguaySchema>;
