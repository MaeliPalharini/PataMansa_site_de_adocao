"use client";

import {ReactNode, useEffect} from "react";
import {useRouter} from "next/navigation";
import {useAuth} from "@/hooks/api/useIsAuth";

type ProtectedRouteProps = {
  children: ReactNode;
};

export default function ProtectedRoute({children}: ProtectedRouteProps) {
  const {data: user, isLoading} = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!isLoading && !user) {
      router.replace("/login");
    }
  }, [isLoading, user, router]);

  if (isLoading) return <p>Carregando...</p>;

  if (!user) return <p>Redirecionando para login...</p>;

  return <>{children}</>;
}
