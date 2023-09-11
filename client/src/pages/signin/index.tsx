import Link from "next/link";

import { Box, Button, TextField, Typography } from "@mui/material";

export default function signin() {
  return (
    <main>
      <Box
        sx={{
          width: "100%",
        }}
      >
        <Box
          sx={{
            height: "80vh",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <TextField
            defaultValue=""
            id="email"
            label="メールアドレス"
            variant="outlined"
            sx={{ width: { xs: "200px", sm: "360px" }, marginBottom: "20px" }}
          />
          <TextField
            defaultValue=""
            id="password"
            label="パスワード"
            variant="outlined"
            sx={{ width: { xs: "200px", sm: "360px" }, marginBottom: "20px" }}
          />
          <Button
            size="small"
            variant="outlined"
            style={{
              borderColor: "black",
              background: "#014A8F",
            }}
            sx={{
              color: "white",

              marginTop: { xs: "10px", sm: "0px" },
              marginX: "10px",
              width: "160px",
              fontSize: "20px",
            }}
          >
            ログイン
          </Button>
          <Typography
            variant="h6"
            noWrap
            sx={{ fontSize: "16px", marginTop: "10px" }}
          >
            <Link href={""}>新規登録</Link>
          </Typography>
        </Box>
      </Box>
    </main>
  );
}
