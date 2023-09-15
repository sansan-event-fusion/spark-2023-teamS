import { useState } from "react";

import Image from "next/image";

import { Box, Button, TextField, Typography } from "@mui/material";

import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { app } from "@/lib/firebase";
import { useRouter } from "next/router";
import { useAuthentication } from "@/hooks/useAuthentication";

export default function signupPage() {
  const router = useRouter();
  const { signupFirebase } = useAuthentication("agent");

  const [signupData, setSignupData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setSignupData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const signup = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const signupRes = await signupFirebase(
      signupData.email,
      signupData.password
    );
    if (signupRes) {
      router.push("/agent/signup/detail");
    }
  };

  return (
    <form onSubmit={signup}>
      <Box
        sx={{
          width: "100%",
        }}
      >
        <Box
          sx={{
            height: "100vh",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Box sx={{ marginTop: "20px", marginBottom: "10px" }}>
            <Image src="/images/logo.png" alt="logo" width={100} height={100} />
          </Box>
          <Typography variant="h5" sx={{ marginBottom: "20px" }}>
            新規登録
          </Typography>
          <TextField
            value={signupData.email}
            onChange={handleChange}
            required
            size="small"
            id="email"
            name="email"
            label="メールアドレス"
            variant="outlined"
            sx={{
              width: { xs: "240px", sm: "360px" },
              marginBottom: "20px",
            }}
          />
          <TextField
            value={signupData.password}
            onChange={handleChange}
            required
            size="small"
            id="password"
            name="password"
            label="パスワード"
            variant="outlined"
            type="password"
            sx={{
              width: { xs: "240px", sm: "360px" },

              marginBottom: "20px",
            }}
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
            次へ
          </Button>
        </Box>
      </Box>
    </form>
  );
}
