import { Box, Card, Typography } from "@mui/material";
import { DailyUserCountCardProps } from "./types";

export const DailyUserCountCard = ({
  element,
  enphasis,
}: DailyUserCountCardProps) => {
  return (
    <Card
      sx={{
        width: {
          xs: "90px",
          sm: "150px",
        },
        height: {
          xs: "50px",
          sm: "70px",
        },
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
        sx={{
          fontSize: {
            xs: "16px",
            sm: "24px",
          },
        }}
      >
        {element}人
      </Typography>
    </Card>
  );
};
