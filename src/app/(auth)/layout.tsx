"use client";

import React, { useEffect, useState } from "react";
import { useAppContext } from "@/lib/AppContext";
import { useRouter } from "next/navigation";
import { Loader } from "@/components/Loader";

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const { user } = useAppContext();
  
  useEffect(() => {
    if (user != undefined) {
      router.push("/");
    } else {
      setLoading(false);
    }
  }, [user, router]);

  return loading ? <Loader /> : children;
}
