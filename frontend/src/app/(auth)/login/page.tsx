"use client";
import Input from "@/ui/input";
import React, {useEffect} from "react";
import AuthLayout from "../AuthLayout";
import {useLogin} from "@/hooks/api/auth/useLogin";
import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {toast} from "@/ui/CustomToaster";
import {LoginSchema, loginSchema} from "@/schemas/auth";
import {createHandleSubmit} from "@/hooks/forms/handleUseFormSubmit";

const Login = () => {
  const {mutate, isPending, isError} = useLogin();

  const {register, handleSubmit} = useForm<LoginSchema>({
    resolver: zodResolver(loginSchema),
  });

  const submit = createHandleSubmit<LoginSchema>((data) => {
    mutate(data);
  });

  useEffect(() => {
    if (isError) {
      toast.error("Credenciais inválidas");
    }
  }, [isError]);

  return (
    <AuthLayout
      type="login"
      onSubmit={handleSubmit(submit)}
      isLoading={isPending}
      isError={isError}
    >
      <Input
        intent="auth"
        className="py-3"
        type="email"
        placeholder="Email"
        {...register("userEmail")}
      />
      <Input
        intent="auth"
        className="py-3"
        type="password"
        placeholder="Senha"
        {...register("password")}
      />
    </AuthLayout>
  );
};

export default Login;
