import { Box, Button } from "@mui/material";
import { LocalizationProvider, DatePicker } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { ja } from "date-fns/locale";

export const AnotherSearchBar = () => {
  return (
    <Box
      sx={{
        background: "#014A8F",
        width: "100%",
        paddingX: {
          xs: "16px",
          sm: "24px",
        },
        padding: "8px",
      }}
    >
      <Box sx={{ display: "flex" }}>
        <Box flexGrow={1} />
        <Box>
          <LocalizationProvider adapterLocale={ja} dateAdapter={AdapterDateFns}>
            <DatePicker
              slotProps={{ textField: { size: "small" } }}
              sx={{
                background: "white",
              }}
            />
          </LocalizationProvider>
        </Box>
        <Box>
          <Button
            size="large"
            variant="contained"
            style={{
              backgroundColor: "#CB161D",
            }}
            sx={{
              borderRadius: "9999px",
              marginLeft: "20px",
              fontSize: {
                xs: "12px",
                sm: "15px",
              },
            }}
          >
            再検索
          </Button>
        </Box>
      </Box>
    </Box>
  );
};
