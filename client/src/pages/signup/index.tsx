import Image from "next/image";
import Link from "next/link";

import { Box, Button, TextField } from "@mui/material";

export default function signupPage() {
  return (
    <main>
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
          <Box sx={{ marginBottom: "40px" }}>
            <Image src="/images/logo.png" alt="logo" width={200} height={100} />
          </Box>
          <TextField
            size="small"
            defaultValue=""
            id="name"
            label="氏名"
            variant="outlined"
            sx={{
              width: { xs: "240px", sm: "360px" },
              marginBottom: "20px",
            }}
          />
          <TextField
            size="small"
            defaultValue=""
            id="email"
            label="メールアドレス"
            variant="outlined"
            sx={{
              width: { xs: "240px", sm: "360px" },
              marginBottom: "20px",
            }}
          />
          <TextField
            size="small"
            defaultValue=""
            id="password"
            label="パスワード"
            variant="outlined"
            type="password"
            sx={{
              width: { xs: "240px", sm: "360px" },

              marginBottom: "20px",
            }}
          />
          <TextField
            size="small"
            defaultValue=""
            id="phone_number"
            label="電話番号"
            variant="outlined"
            sx={{
              width: { xs: "240px", sm: "360px" },
              marginBottom: "20px",
            }}
          />
          <TextField
            size="small"
            defaultValue=""
            id="postal_code"
            label="郵便番号"
            variant="outlined"
            sx={{
              width: { xs: "240px", sm: "360px" },
              marginBottom: "20px",
            }}
          />
          <TextField
            size="small"
            defaultValue=""
            id="prefecture"
            label="都道府県"
            variant="outlined"
            sx={{
              width: { xs: "240px", sm: "360px" },
              marginBottom: "20px",
            }}
          />
          <TextField
            size="small"
            defaultValue=""
            id="city"
            label="市町村"
            variant="outlined"
            sx={{
              width: { xs: "240px", sm: "360px" },
              marginBottom: "20px",
            }}
          />
          <TextField
            size="small"
            defaultValue=""
            id="address"
            label="番地"
            variant="outlined"
            sx={{
              width: { xs: "240px", sm: "360px" },
              marginBottom: "20px",
            }}
          />
          <TextField
            size="small"
            defaultValue=""
            id="number"
            label="部屋番号"
            variant="outlined"
            sx={{
              width: { xs: "240px", sm: "360px" },
              marginBottom: "20px",
            }}
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
            <Link href={""}>登録</Link>
          </Button>
        </Box>
      </Box>
    </main>
  );
}
