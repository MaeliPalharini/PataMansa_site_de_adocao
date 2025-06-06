"use client";
import Input from "@/ui/input";
import React, {useState} from "react";
import AuthLayout from "../AuthLayout";
import {useLogin} from "@/hooks/api/useLogin";
import {createHandleSubmit} from "@/hooks/forms/handleSubmit";
import {createHandleChange} from "@/hooks/forms/handleChange";

const Login = () => {
  const {mutate, isPending, error} = useLogin();

  const [login, setLogin] = useState({
    userEmail: "",
    password: "",
  });

  const handleSubmit = createHandleSubmit(login, mutate);

  const handleChange = createHandleChange(setLogin);

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
