"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { paraguaySchema, ParaguayFormData } from "@/lib/validations";
import { useAccessibility } from "@/contexts/AccessibilityContext";
import { useState, useEffect } from "react";

export const RegisterForm = () => {
  const { settings } = useAccessibility();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ParaguayFormData>({
    resolver: zodResolver(paraguaySchema),
  });

  const [success, setSuccess] = useState("");
  const [showToast, setShowToast] = useState(false);

  const onSubmit = (data: ParaguayFormData) => {
    localStorage.setItem("registroUsuario", JSON.stringify(data));
    setSuccess("¡Registro exitoso! Tus datos han sido guardados.");
    setShowToast(true);
  };

  useEffect(() => {
    if (showToast) {
      const timer = setTimeout(() => setShowToast(false), 3000);
      return () => clearTimeout(timer);
    }
  }, [showToast]);

  const inputClasses = `w-full p-2 border rounded transition-colors duration-200 ${
    settings.contrast === "high"
      ? "border-yellow-400 bg-black text-yellow-400 placeholder-yellow-300"
      : "border-blue-200 bg-white text-blue-900 placeholder-blue-300 focus:border-blue-500"
  }`;

  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className={`max-w-md mx-auto space-y-4 p-6 rounded-lg shadow-lg border transition-colors duration-200 ${
          settings.contrast === "high"
            ? "bg-black border-yellow-400"
            : "bg-white border-blue-100"
        }`}
        aria-label="Formulario de registro"
        style={{ fontSize: settings.fontSize }}
      >
        <h2
          className={`text-2xl font-bold mb-4 text-center ${
            settings.contrast === "high" ? "text-yellow-400" : "text-blue-800"
          }`}
        >
          Formulario de registro
        </h2>
        {success && (
          <div
            className={`p-2 rounded mb-2 text-center font-semibold ${
              settings.contrast === "high"
                ? "bg-yellow-400 text-black"
                : "bg-green-100 text-green-800"
            }`}
            role="alert"
          >
            {success}
          </div>
        )}
        <div>
          <label
            className={`block mb-1 font-semibold ${
              settings.contrast === "high" ? "text-yellow-400" : "text-blue-900"
            }`}
          >
            Cédula
          </label>
          <input
            {...register("cedula")}
            className={inputClasses}
            aria-invalid={!!errors.cedula}
            aria-describedby="cedula-error"
            type="tel"
            inputMode="numeric"
            pattern="[0-9]*"
            maxLength={8}
          />
          {errors.cedula && (
            <p id="cedula-error" className="text-red-500 text-sm">
              {errors.cedula.message}
            </p>
          )}
        </div>
        <div>
          <label
            className={`block mb-1 font-semibold ${
              settings.contrast === "high" ? "text-yellow-400" : "text-blue-900"
            }`}
          >
            Nombre y Apellido
          </label>
          <input
            {...register("nombre")}
            className={inputClasses}
            aria-invalid={!!errors.nombre}
            aria-describedby="nombre-error"
          />
          {errors.nombre && (
            <p id="nombre-error" className="text-red-500 text-sm">
              {errors.nombre.message}
            </p>
          )}
        </div>
        <div>
          <label
            className={`block mb-1 font-semibold ${
              settings.contrast === "high" ? "text-yellow-400" : "text-blue-900"
            }`}
          >
            Correo electrónico
          </label>
          <input
            {...register("email")}
            className={inputClasses}
            aria-invalid={!!errors.email}
            aria-describedby="email-error"
          />
          {errors.email && (
            <p id="email-error" className="text-red-500 text-sm">
              {errors.email.message}
            </p>
          )}
        </div>
        <div>
          <label
            className={`block mb-1 font-semibold ${
              settings.contrast === "high" ? "text-yellow-400" : "text-blue-900"
            }`}
          >
            Teléfono
          </label>
          <input
            {...register("telefono")}
            className={inputClasses}
            aria-invalid={!!errors.telefono}
            aria-describedby="telefono-error"
          />
          {errors.telefono && (
            <p id="telefono-error" className="text-red-500 text-sm">
              {errors.telefono.message}
            </p>
          )}
        </div>
        <div>
          <label
            className={`block mb-1 font-semibold ${
              settings.contrast === "high" ? "text-yellow-400" : "text-blue-900"
            }`}
          >
            Contraseña
          </label>
          <input
            {...register("password")}
            type="password"
            className={inputClasses}
            aria-invalid={!!errors.password}
            aria-describedby="password-error"
          />
          {errors.password && (
            <p id="password-error" className="text-red-500 text-sm">
              {errors.password.message}
            </p>
          )}
        </div>
        <button
          type="submit"
          className={`w-full py-2 rounded font-semibold transition-colors duration-200 ${
            settings.contrast === "high"
              ? "bg-yellow-400 text-black hover:bg-yellow-300"
              : "bg-blue-600 hover:bg-blue-700 text-white"
          }`}
        >
          Registrarse
        </button>
      </form>

      {showToast && (
        <div
          className={`fixed top-6 right-6 z-50 px-6 py-3 rounded shadow-lg font-semibold text-lg transition-all ${
            settings.contrast === "high"
              ? "bg-yellow-400 text-black"
              : "bg-green-600 text-white"
          }`}
        >
          Registrado con éxito, ¡muchas gracias!
        </div>
      )}
    </>
  );
};
