"use client";

import {useAuth} from "@/hooks/api/useIsAuth";

export default function AuthSwitch({
  children,
  fallback,
}: {
  children: React.ReactNode;
  fallback: React.ReactNode;
}) {
  const {data: user} = useAuth();
  return user ? <>{children}</> : <>{fallback}</>;
}
