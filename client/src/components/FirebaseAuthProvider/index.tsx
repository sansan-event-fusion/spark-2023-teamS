import { useEffect, useState } from "react";
import { FirebaseAuthProviderProps } from "./types";
import { User, getAuth, onAuthStateChanged } from "firebase/auth";
import { app } from "../../lib/firebase";
import { useRouter } from "next/router";

export function FirebaseAuthProvider({ children }: FirebaseAuthProviderProps) {
  const auth = getAuth(app);
  const router = useRouter();
  const [user, setUser] = useState<User | null>(auth.currentUser);
  const noAuthPages = ["/signup", "/signin", "/buyer/start", "/buyer/select"];
  // 未認証状態で, 要認証ページにアクセスしたときはサインインページにリダイレクト
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (!user && !noAuthPages.includes(router.pathname)) {
        router.replace("/signin");
      }
    });
    return () => unsubscribe();
  });

  return <>{children}</>;
}
