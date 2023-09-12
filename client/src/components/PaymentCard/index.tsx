import { Box, Button, Card, Typography } from "@mui/material";

export const PaymentCard = () => {
  return (
    <Box
      height="100%"
      width={{ xs: "100%", sm: "50%" }}
      marginTop={{ xs: "20px", sm: "40px" }}
      display="flex"
      flexDirection="column"
      alignItems="center"
    >
      <Card sx={{ border: "2px solid", width: { xs: "330px", sm: "370px" } }}>
        <Typography variant="h5" marginTop="10px" marginLeft="10px">
          注文の合計額
        </Typography>
        <Box borderBottom="1px solid">
          <Box display="flex" justifyContent="space-between">
            <Typography
              sx={{
                marginTop: { xs: "5px", sm: "10px" },
                marginLeft: { xs: "5px", sm: "10px" },
              }}
            >
              配送料
            </Typography>
            <Typography
              sx={{
                marginTop: { xs: "5px", sm: "10px" },
                marginRight: { xs: "5px", sm: "10px" },
              }}
            >
              120円
            </Typography>
          </Box>
          <Box display="flex" justifyContent="space-between">
            <Typography
              sx={{
                marginTop: { xs: "5px", sm: "10px" },
                marginLeft: { xs: "5px", sm: "10px" },
                marginBottom: { xs: "5px", sm: "10px" },
              }}
            >
              手数料
            </Typography>
            <Typography
              sx={{
                marginTop: { xs: "5px", sm: "10px" },
                marginRight: { xs: "5px", sm: "10px" },
                marginBottom: { xs: "5px", sm: "10px" },
              }}
            >
              150円
            </Typography>
          </Box>
        </Box>
        <Typography
          sx={{
            marginTop: { xs: "5px", sm: "10px" },
            marginLeft: { xs: "5px", sm: "10px" },
            marginBottom: { xs: "5px", sm: "10px" },
          }}
        >
          チップ
        </Typography>
        <Box borderBottom="1px solid"></Box>
        <Typography variant="h5"></Typography>
        <Box display="flex" justifyContent="space-between">
          <Typography
            sx={{
              marginTop: { xs: "10px", sm: "20px" },
              marginLeft: { xs: "5px", sm: "10px" },
              marginBottom: { xs: "10px", sm: "20px" },
            }}
          >
            合計
          </Typography>
          <Typography
            sx={{
              marginTop: { xs: "10px", sm: "20px" },
              marginRight: { xs: "5px", sm: "10px" },
            }}
          >
            270円
          </Typography>
        </Box>
      </Card>
      <Button
        size="small"
        variant="outlined"
        style={{
          borderColor: "black",
          background: "#014A8F",
        }}
        sx={{
          color: "white",

          marginTop: "10px",
          marginX: "10px",
          width: "160px",
          fontSize: "20px",
        }}
      >
        お支払い
      </Button>
    </Box>
  );
};
