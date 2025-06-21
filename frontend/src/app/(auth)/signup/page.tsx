"use client";
import React, {useEffect} from "react";
import AuthLayout from "../AuthLayout";
import Input from "@/ui/input";
import {useSignup} from "@/hooks/api/auth/useRegister";
import Button from "@/ui/button";
import {toast} from "@/ui/CustomToaster";
import {useForm} from "react-hook-form";

import {zodResolver} from "@hookform/resolvers/zod";
import {registerSchema, RegisterSchema} from "@/schemas/auth";
import {createHandleSubmit} from "@/hooks/forms/handleUseFormSubmit";

const SignUp = () => {
  const {mutate, isPending, isError} = useSignup();

  const {register, handleSubmit, setValue, watch} = useForm<RegisterSchema>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      role: "adotante",
    },
  });

  const role = watch("role");

  const submit = createHandleSubmit<RegisterSchema>((data) => {
    mutate(data);
  });

  useEffect(() => {
    if (isError) {
      toast.error("Credenciais inválidas");
    }
  }, [isError]);

  const handleSelectRole = (role: "adotante" | "anunciante") => {
    setValue("role", role, {shouldValidate: true});
  };

  return (
    <AuthLayout
      type="signup"
      onSubmit={handleSubmit(submit)}
      isLoading={isPending}
      isError={isError}
    >
      <div className="flex gap-5 justify-center items-center">
        <Button
          intent={role === "adotante" ? "first" : "second"}
          type="button"
          onClick={() => handleSelectRole("adotante")}
          className="text-sm font-bold"
        >
          Adotar um pet
        </Button>
        <Button
          intent={role === "anunciante" ? "first" : "second"}
          type="button"
          onClick={() => handleSelectRole("anunciante")}
          className="text-sm font-bold"
        >
          Doar um pet
        </Button>
      </div>

      <Input
        intent={"auth"}
        className="py-3"
        {...register("name")}
        type="text"
        placeholder="Nome"
      />
      <Input
        intent={"auth"}
        className="py-3"
        {...register("userEmail")}
        type="email"
        placeholder="Email"
      />
      <Input
        intent={"auth"}
        className="py-3"
        {...register("password")}
        type="password"
        placeholder="Senha"
      />
    </AuthLayout>
  );
};

export default SignUp;
