import Link from "next/link";

import { Box, Button, IconButton, Toolbar, Typography } from "@mui/material";
import { HeaderProps } from "./types";
import MenuIcon from "@mui/icons-material/Menu";
import AppBar from "@mui/material/AppBar";

export const Header = ({ onClickMenu }: HeaderProps) => {
  return (
    <AppBar
      position="static"
      sx={{ background: "white", color: "black" }}
      elevation={0}
    >
      <Toolbar>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="open drawer"
          onClick={onClickMenu}
        >
          <MenuIcon />
        </IconButton>
        <Typography
          variant="h6"
          noWrap
          component="div"
          sx={{ fontSize: { xs: "20px", sm: "24px" } }}
        >
          DeLiDev
        </Typography>
        <Box sx={{ flexGrow: 1 }} />
        <Button
          size="large"
          variant="contained"
          sx={{
            color: "black",
            backgroundColor: "white",
            borderRadius: "9999px",
            fontSize: {
              xs: "12px",
              sm: "15px",
            },
          }}
        >
          <Link href={"/buyer/signin"}>ログイン</Link>
        </Button>
        <Button
          size="large"
          variant="contained"
          sx={{
            color: "black",
            backgroundColor: "white",
            borderRadius: "9999px",
            marginLeft: "10px",
            fontSize: {
              xs: "12px",
              sm: "15px",
            },
          }}
        >
          <Link href={"/buyer/signup"}>新規登録</Link>
        </Button>
        <Box sx={{ display: { xs: "flex", md: "none" } }}></Box>
      </Toolbar>
    </AppBar>
  );
};
