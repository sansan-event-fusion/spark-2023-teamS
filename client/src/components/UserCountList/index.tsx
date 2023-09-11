import { Box, Card, Typography } from "@mui/material";
import { DailyUserCountCard } from "../DailyUserCountCard";

export const UserCountList = () => {
  return (
    <Box
      display="flex"
      sx={{
        overflowX: "scroll",
        maxWidth: "100%",
      }}
    >
      <Box display="flex" gap="10px">
        {[...Array(7)].map((_, index) => (
          <DailyUserCountCard key={index} enphasis={index == 3} />
        ))}
      </Box>
    </Box>
  );
};
