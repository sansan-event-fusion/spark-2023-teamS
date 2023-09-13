import { useState } from "react";

import { Box, Button, Card, Typography } from "@mui/material";
import { AddShiftDialog } from "@/components/AddShiftDialog";

export const DeliveryShiftList = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Box display="flex" flexDirection="column" alignItems="center">
      {[...Array(2)].map((_, index) => (
        <Card
          key={index}
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
      <Button
        onClick={() => setIsOpen(true)}
        size="small"
        variant="outlined"
        style={{
          borderColor: "black",
          background: "#014A8F",
        }}
        sx={{
          color: "white",
          marginTop: "30px",
          marginX: "10px",
          width: "160px",
          fontSize: "20px",
        }}
      >
        シフト追加
      </Button>
      <AddShiftDialog isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </Box>
  );
};
