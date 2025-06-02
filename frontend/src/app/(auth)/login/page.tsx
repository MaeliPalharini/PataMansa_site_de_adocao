"use client";
import Input from "@/ui/input";
import React, {useState} from "react";
import AuthLayout from "../AuthLayout";
import {useLogin} from "@/hooks/api/useLogin";
import {toast} from "@/ui/CustomToaster";

const Login = () => {
  const {mutate, isPending, error} = useLogin();

  const [login, setLogin] = useState({
    userEmail: "",
    password: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!login.userEmail.trim() || !login.password.trim()) {
      toast.error("Credenciais inválidas");
      return;
    }
    mutate(login);
  };

  const handleChange =
    (field: keyof typeof login) => (e: React.ChangeEvent<HTMLInputElement>) => {
      setLogin((prev) => ({
        ...prev,
        [field]: e.target.value,
      }));
    };

  return (
    <AuthLayout
      type="login"
      onSubmit={handleSubmit}
      isLoading={isPending}
      isError={error}
    >
      <Input
        intent={"auth"}
        value={login.userEmail}
        className="py-3"
        onChange={handleChange("userEmail")}
        type="email"
        placeholder="Email"
      />
      <Input
        intent={"auth"}
        value={login.password}
        className="py-3"
        onChange={handleChange("password")}
        type="password"
        placeholder="Senha"
      />
    </AuthLayout>
  );
};

export default Login;
