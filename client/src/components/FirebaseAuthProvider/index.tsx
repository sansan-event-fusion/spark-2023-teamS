import { useEffect, useState } from "react";
import { FirebaseAuthProviderProps } from "./types";
import { User, getAuth, onAuthStateChanged } from "firebase/auth";
import { app } from "../../lib/firebase";
import { useRouter } from "next/router";

export function FirebaseAuthProvider({ children }: FirebaseAuthProviderProps) {
  const auth = getAuth(app);
  const router = useRouter();

  const noAuthPages = [
    "/buyer/signup",
    "/buyer/signup/detail",
    "/buyer/signin",
    "/buyer/start",
    "/buyer/select",
  ];

  // 未認証状態で, 要認証ページにアクセスしたときはサインインページにリダイレクト
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (!user && !noAuthPages.includes(router.pathname)) {
        // router.replace("buyer/signin");
      }
    });
    return () => unsubscribe();
  }, []);

  return <>{children}</>;
}
