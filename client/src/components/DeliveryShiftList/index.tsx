import { Box, Card, Typography } from "@mui/material";

export const DeliveryShiftList = () => {
  return (
    <Box display="flex" flexDirection="column" alignItems="center">
      <Typography sx={{ marginTop: { xs: "20px", sm: "0px" } }}>
        配送シフト
      </Typography>
      {[...Array(3)].map((_) => (
        <Card
          sx={{
            width: { xs: "100%", sm: "80%" },
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            height: "70px",
            border: "1px solid gray",
            marginTop: "20px",
          }}
        >
          <Box
            display="flex"
            height="100%"
            justifyContent="space-between"
            alignItems="center"
            paddingX="20px"
            sx={{ width: { xs: "200px", sm: "360px" } }}
          >
            <Box>
              <Typography
                textAlign="center"
                sx={{
                  fontSize: {
                    xs: "12px",
                    sm: "15px",
                  },
                }}
              >
                シフト時間 <br />
              </Typography>
              <Typography
                textAlign="center"
                sx={{
                  fontSize: {
                    xs: "20px",
                    sm: "24px",
                  },
                }}
              >
                8:00~22:30
              </Typography>
            </Box>
            <Box>
              <Typography textAlign="center" sx={{ fontSize: "15px" }}>
                xxx <br />
              </Typography>
              <Typography
                textAlign="center"
                sx={{
                  fontSize: {
                    xs: "20px",
                    sm: "24px",
                  },
                }}
              >
                xxx
              </Typography>
            </Box>
          </Box>
        </Card>
      ))}
    </Box>
  );
};
