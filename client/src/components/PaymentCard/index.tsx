import { Box, Button, Card, Typography } from "@mui/material";

export const PaymentCard = () => {
  return (
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
  );
};
