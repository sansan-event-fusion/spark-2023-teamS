import { useRouter } from "next/router";

import { Box, Card, Icon, Rating, Typography } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { AgentListProps } from "./types";

export const AgentsList = ({ agentList }: AgentListProps) => {
  const router = useRouter();

  const handleClick = () => {
    router.push("/buyer/request");
  };

  return agentList?.data.map((data, _) => (
    <Card
      sx={{
        width: "100%",
        maxWidth: "718px",
        minWidth: "300px",
        height: "86px",
        border: "1px solid gray",
      }}
    >
      <Box
        display="flex"
        height="100%"
        justifyContent="space-between"
        alignItems="center"
        paddingX="20px"
        onClick={handleClick}
      >
        <AccountCircleIcon fontSize="large" />
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
            対応可能時間 <br />
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
            8:00~22:00
          </Typography>
        </Box>
        <Box>
          <Typography textAlign="center" sx={{ fontSize: "15px" }}>
            評価 <br />
          </Typography>
          <Rating
            name="read-only"
            value={3.6}
            readOnly
            size={"small"}
            sx={{
              //   width: {
              //     xs: "50px",
              //     sm: "100px",
              //   },
              width: "100px",
            }}
          />
        </Box>
      </Box>
    </Card>
  ));
};
