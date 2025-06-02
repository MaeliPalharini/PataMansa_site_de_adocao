"use client";

import {ReactNode, useEffect} from "react";
import {useRouter} from "next/navigation";
import {useAuth} from "@/hooks/api/useIsAuth";
import LoadingSpinner from "../layouts/Loading";

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

  if (isLoading || !user)
    return (
      <div className="min-h-screen w-full flex justify-center items-center bg-[var(--light-yellow)] text-[var(--brown)]">
        <LoadingSpinner />
      </div>
    );

  return <>{children}</>;
}
