import { Box, CssBaseline } from "@mui/material";
import { Header } from "../Header";
import { DrawerWrapper } from "@/components/DrawerWrapper";
import { useState } from "react";
import { DefaultLayoutProps } from "./typs";

export const DefaultLayout = ({ children }: DefaultLayoutProps) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Box height="100vh" display="flex" flexDirection="column">
      <Header onClickMenu={() => setIsOpen(true)} />
      <DrawerWrapper isOpen={isOpen} onClose={() => setIsOpen(false)} />
      <CssBaseline />
      <Box flexGrow={1}>{children}</Box>
    </Box>
  );
};
