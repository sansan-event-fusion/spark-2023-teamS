import { Box, Button, Typography } from "@mui/material";
import { LocalizationProvider, DatePicker } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { ja } from "date-fns/locale";

import { DefaultLayout } from "@/components/DefaultLayout";

export default function BuyerStart() {
  return (
    <main>
      <DefaultLayout>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            height: "90%",
          }}
        >
          <Box>
            <Typography
              sx={{
                marginLeft: { xs: "0px", sm: "30px" },
                display: "flex",
                flexDirection: "column",
                alignItems: { xs: "center", sm: "flex-start" },
                fontSize: { xs: "18px", sm: "24px" },
              }}
            >
              一歩先を行く、新しい宅配体験
            </Typography>
          </Box>
          <Box
            sx={{
              marginTop: "20px",
              display: { xs: "flex", sm: "inline" },
              flexDirection: { xs: "column", sm: "" },
              alignItems: { xs: "center" },
            }}
          >
            <LocalizationProvider
              adapterLocale={ja}
              dateAdapter={AdapterDateFns}
            >
              <DatePicker
                slotProps={{ textField: { size: "small" } }}
                sx={{
                  background: "white",
                  width: { xs: "200px", sm: "580px" },
                  marginLeft: { xs: "0px", sm: "30px" },
                }}
              />
            </LocalizationProvider>
            <Button
              size="small"
              variant="outlined"
              style={{
                borderColor: "black",
                background: "#014A8F",
              }}
              sx={{
                color: "white",
                borderRadius: "50px",
                marginTop: { xs: "10px", sm: "0px" },
                marginX: "10px",
                width: "160px",
                fontSize: "20px",
              }}
            >
              検索
            </Button>
          </Box>
        </Box>
      </DefaultLayout>
    </main>
  );
}
