import React, { useState } from "react";

import Image from "next/image";
import Link from "next/link";

import { Box, Button, TextField, Typography } from "@mui/material";
import { useAuthentication } from "@/hooks/useAuthentication";
import { UserSignupFormType, UserSignupParamsType } from "@/types/user";
import { useRouter } from "next/router";

export default function signupPage() {
  const { signupService } = useAuthentication("agent");
  const router = useRouter();

  const [signupData, setSignupData] = useState<UserSignupFormType>({
    name: "",
    phone_number: "",
    postal_code: "",
    prefecture: "",
    city: "",
    address1: "",
    address2: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setSignupData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const signupRes = await signupService(signupData);
    if (signupRes) router.push("/agent/schedule");
  };

  return (
    <form onSubmit={handleSubmit}>
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
            ユーザー詳細情報
          </Typography>
          <TextField
            value={signupData.name}
            onChange={handleChange}
            required
            size="small"
            id="name"
            name="name"
            label="氏名"
            variant="outlined"
            sx={{
              width: { xs: "240px", sm: "360px" },
              marginBottom: "20px",
            }}
          />
          <TextField
            value={signupData.phone_number}
            onChange={handleChange}
            required
            size="small"
            id="phone_number"
            name="phone_number"
            label="電話番号"
            variant="outlined"
            sx={{
              width: { xs: "240px", sm: "360px" },
              marginBottom: "20px",
            }}
          />
          <TextField
            value={signupData.postal_code}
            onChange={handleChange}
            required
            size="small"
            id="postal_code"
            name="postal_code"
            label="郵便番号"
            variant="outlined"
            sx={{
              width: { xs: "240px", sm: "360px" },
              marginBottom: "20px",
            }}
          />
          <TextField
            value={signupData.prefecture}
            onChange={handleChange}
            required
            size="small"
            id="prefecture"
            name="prefecture"
            label="都道府県"
            variant="outlined"
            sx={{
              width: { xs: "240px", sm: "360px" },
              marginBottom: "20px",
            }}
          />
          <TextField
            value={signupData.city}
            onChange={handleChange}
            required
            size="small"
            id="city"
            name="city"
            label="市町村"
            variant="outlined"
            sx={{
              width: { xs: "240px", sm: "360px" },
              marginBottom: "20px",
            }}
          />
          <TextField
            value={signupData.address1}
            onChange={handleChange}
            required
            size="small"
            id="address1"
            name="address1"
            label="番地"
            variant="outlined"
            sx={{
              width: { xs: "240px", sm: "360px" },
              marginBottom: "20px",
            }}
          />
          <TextField
            value={signupData.address2}
            onChange={handleChange}
            size="small"
            id="address2"
            name="address2"
            label="部屋番号・階"
            variant="outlined"
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
            登録
          </Button>
        </Box>
      </Box>
    </form>
  );
}
