import { Box, CssBaseline } from "@mui/material";
import { Header } from "../Header";
import { DrawerWrapper } from "@/components/DrawerWrapper";
import { useEffect, useState } from "react";
import { DefaultLayoutProps } from "./typs";
import { User, getAuth, getIdToken, onAuthStateChanged } from "firebase/auth";
import { useRouter } from "next/router";
export const DefaultLayout = ({ children }: DefaultLayoutProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const auth = getAuth();
  const user = auth.currentUser;
  const router = useRouter();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (!user) {
        router.replace("/signin");
        // ユーザ情報が取得できなければサインインページに遷移
      }
    });
    return () => unsubscribe();
  }, []);

  return (
    <Box height="100vh" display="flex" flexDirection="column">
      <Header onClickMenu={() => setIsOpen(true)} />
      <DrawerWrapper isOpen={isOpen} onClose={() => setIsOpen(false)} />
      <CssBaseline />
      <Box flexGrow={1}>{children}</Box>
    </Box>
  );
};
