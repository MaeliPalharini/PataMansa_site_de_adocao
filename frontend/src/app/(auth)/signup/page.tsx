"use client";
import React, {useState} from "react";
import AuthLayout from "../AuthLayout";
import Input from "@/ui/input";
import {useSignup} from "@/hooks/api/useRegister";
import Button from "@/ui/button";

const SignUp = () => {
  const {mutate, isPending, error} = useSignup();

  const [signUp, setSignUp] = useState({
    nome: "",
    email: "",
    senha: "",
    role: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    mutate(signUp);
    console.log(signUp);
  };

  const handleChange =
    (field: keyof typeof signUp) =>
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setSignUp((prev) => ({
        ...prev,
        [field]: e.target.value,
      }));
    };

  const handleSelectRole = (role: "adotante" | "anunciante") => {
    setSignUp((prev) => ({
      ...prev,
      role,
    }));
  };

  return (
    <AuthLayout type="signup" onSubmit={handleSubmit}>
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
        value={signUp.nome}
        onChange={handleChange("nome")}
        type="text"
        placeholder="Nome"
      />
      <Input
        intent={"auth"}
        className="py-3"
        value={signUp.email}
        onChange={handleChange("email")}
        type="email"
        placeholder="Email"
      />
      <Input
        intent={"auth"}
        className="py-3"
        value={signUp.senha}
        onChange={handleChange("senha")}
        type="password"
        placeholder="Senha"
      />
    </AuthLayout>
  );
};

export default SignUp;
