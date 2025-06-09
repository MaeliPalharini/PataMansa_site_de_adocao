"use client";
import React, {useState} from "react";
import AuthLayout from "../AuthLayout";
import Input from "@/ui/input";
import {useSignup} from "@/hooks/api/useRegister";
import Button from "@/ui/button";
import {toast} from "@/ui/CustomToaster";
import {createHandleChange} from "@/hooks/forms/handleChange";
import {createHandleSubmit} from "@/hooks/forms/handleSubmit";

const SignUp = () => {
  const {mutate, isPending, error} = useSignup();

  const [signUp, setSignUp] = useState({
    name: "",
    userEmail: "",
    password: "",
    role: "",
  });

  const handleSubmit = createHandleSubmit(signUp, mutate, (signUp) => {
    if (
      !signUp.name.trim() ||
      !signUp.userEmail.trim() ||
      !signUp.password.trim() ||
      !signUp.role
    ) {
      toast.error("Credenciais inválidas");
      return false;
    }

    return true;
  });

  const handleChange = createHandleChange(setSignUp);

  const handleSelectRole = (role: "adotante" | "anunciante") => {
    setSignUp((prev) => ({
      ...prev,
      role,
    }));
  };

  return (
    <AuthLayout
      type="signup"
      onSubmit={handleSubmit}
      isLoading={isPending}
      isError={error}
    >
      <div className="flex gap-5 justify-center items-center">
        <Button
          intent={signUp.role === "adotante" ? "first" : "second"}
          type="button"
          onClick={() => handleSelectRole("adotante")}
          className="text-sm font-bold"
        >
          Adotar um pet
        </Button>
        <Button
          intent={signUp.role === "anunciante" ? "first" : "second"}
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
        value={signUp.name}
        onChange={handleChange("name")}
        type="text"
        placeholder="Nome"
      />
      <Input
        intent={"auth"}
        className="py-3"
        value={signUp.userEmail}
        onChange={handleChange("userEmail")}
        type="email"
        placeholder="Email"
      />
      <Input
        intent={"auth"}
        className="py-3"
        value={signUp.password}
        onChange={handleChange("password")}
        type="password"
        placeholder="Senha"
      />
    </AuthLayout>
  );
};

export default SignUp;
