import { Box, Button, Drawer, Typography } from "@mui/material";
import Link from "next/link";
import { useState } from "react";
import { DrawerWrapperProps } from "./types";

export const DrawerWrapper = ({ isOpen, onClose }: DrawerWrapperProps) => {
  return (
    <Drawer anchor="left" open={isOpen} onClose={onClose}>
      <Box
        sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
      >
        <Button
          size="large"
          variant="contained"
          style={{
            backgroundColor: "black",
          }}
          sx={{
            width: "261px",
            borderRadius: "4px",
            marginX: "10px",
            marginTop: "10px",
            fontSize: "24px",
          }}
        >
          登録する
        </Button>
        <Button
          size="large"
          variant="outlined"
          style={{
            borderColor: "black",
          }}
          sx={{
            color: "black",
            borderRadius: "4px",
            marginTop: "10px",
            marginX: "10px",
            width: "261px",
            fontSize: "24px",
          }}
        >
          ログイン
        </Button>

        <Typography
          variant="h6"
          noWrap
          sx={{ fontSize: "16px", marginTop: "10px" }}
        >
          <Link href={""}>代理人として登録する</Link>
        </Typography>
      </Box>
    </Drawer>
  );
};
