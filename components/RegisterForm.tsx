"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { paraguaySchema, ParaguayFormData } from "@/lib/validations";
import { useAccessibility } from "@/contexts/AccessibilityContext";

export const RegisterForm = () => {
  const { settings } = useAccessibility();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ParaguayFormData>({
    resolver: zodResolver(paraguaySchema),
  });

  const onSubmit = (data: ParaguayFormData) => {
    alert(JSON.stringify(data, null, 2));
  };

  const inputClasses = `w-full p-2 border rounded ${
    settings.contrast === "high"
      ? "border-yellow-400 bg-black text-white"
      : "border-gray-300"
  }`;

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="max-w-md mx-auto space-y-4"
    >
      <div>
        <label className="block mb-1">Nombre</label>
        <input {...register("nombre")} className={inputClasses} />
        {errors.nombre && (
          <p className="text-red-500">{errors.nombre.message}</p>
        )}
      </div>

      {/* Repetir para email, password, cédula, teléfono */}

      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-2 rounded"
      >
        Registrarse
      </button>
    </form>
  );
};
