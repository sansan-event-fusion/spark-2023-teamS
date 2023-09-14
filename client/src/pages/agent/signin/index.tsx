import Link from "next/link";

import { Box, Button, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { app } from "@/lib/firebase";
import { useAuthentication } from "@/hooks/useAuthentication";
import { useRouter } from "next/router";

export default function signin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { login } = useAuthentication("agent");
  const router = useRouter();

  const onClickLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const loginRes = await login(email, password);
    if (loginRes) router.push("/agent/schedule");
  };

  return (
    <form onSubmit={onClickLogin}>
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
            type="email"
            sx={{ width: { xs: "200px", sm: "360px" }, marginBottom: "20px" }}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            defaultValue=""
            id="password"
            label="パスワード"
            variant="outlined"
            type="password"
            sx={{ width: { xs: "200px", sm: "360px" }, marginBottom: "20px" }}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button
            size="small"
            variant="outlined"
            type="submit"
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
    </form>
  );
}
