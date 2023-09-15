import { Box, Card, Typography } from "@mui/material";
import { DailyUserCountCard } from "../DailyUserCountCard";
import { UserCountListProps } from "./types";

export const UserCountList = ({ persons }: UserCountListProps) => {
  const personsList = [0, 0, 0, persons, 0, 0, 0];

  return (
    <Box
      display="flex"
      sx={{
        overflowX: "scroll",
        maxWidth: "100%",
        height: { xs: "60px", sm: "100px" },
      }}
    >
      <Box display="flex" gap="10px">
        {personsList.map((element, index) => (
          <DailyUserCountCard
            date={`9月${12 + index}日`}
            key={index}
            element={element}
            enphasis={index == 3}
          />
        ))}
      </Box>
    </Box>
  );
};
