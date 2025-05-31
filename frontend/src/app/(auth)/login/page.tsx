"use client";
import Input from "@/ui/input";
import React, {useState} from "react";
import AuthLayout from "../AuthLayout";
import {useLogin} from "@/hooks/api/useLogin";

const Login = () => {
  const {mutate, isPending, error} = useLogin();

  const [login, setLogin] = useState({
    email: "",
    senha: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
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
    <AuthLayout type="login" onSubmit={handleSubmit}>
      <Input
        intent={"second"}
        value={login.email}
        className="py-3"
        onChange={handleChange("email")}
        type="email"
        placeholder="Email"
      />
      <Input
        intent={"second"}
        value={login.senha}
        className="py-3"
        onChange={handleChange("senha")}
        type="password"
        placeholder="Senha"
      />
    </AuthLayout>
  );
};

export default Login;
