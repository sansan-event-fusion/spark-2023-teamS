import { Box, Card, Typography } from "@mui/material";
import { DailyUserCountCardProps } from "./types";

export const DailyUserCountCard = ({ enphasis }: DailyUserCountCardProps) => {
  return (
    <Card
      sx={{
        width: {
          xs: "105px",
          sm: "151px",
        },
        height: "71px",
        border: enphasis ? "2px solid #CB161D" : "1px solid gray",
      }}
    >
      <Typography
        variant="h6"
        noWrap
        component="div"
        textAlign="center"
        sx={{
          fontSize: {
            xs: "14px",
            sm: "18px",
          },
        }}
      >
        2023/9/8(金)
      </Typography>
      <Typography
        variant="h6"
        noWrap
        component="div"
        textAlign="center"
        sx={{ fontSize: "24px" }}
      >
        4人
      </Typography>
    </Card>
  );
};
