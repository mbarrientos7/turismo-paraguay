import { z } from 'zod';

export const paraguaySchema = z.object({
  email: z.string()
    .email("Correo inválido")
    .refine(email => email.endsWith('.py'), "Debe ser dominio .py"),
  password: z.string()
    .min(8, "Mínimo 8 caracteres")
    .regex(/[A-Z]/, "Al menos 1 mayúscula")
    .regex(/\d/, "Al menos 1 número"),
  cedula: z.string()
    .regex(/^\d{6,8}$/, "Cédula invaguaya (6-8 dígitos)"),
  telefono: z.string()
    .regex(/^(098|097|096|099)\d{6,7}$/, "Ej: 098123456"),
  nombre: z.string().min(2, "Mínimo 2 caracteres")
});

export type ParaguayFormData = z.infer<typeof paraguaySchema>;