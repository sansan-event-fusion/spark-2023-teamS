import { useEffect, useState } from "react";

import { AgentsList } from "@/components/AgentsList";

import { DefaultLayout } from "@/components/DefaultLayout";
import { UserCountList } from "@/components/UserCountList";
import { Box } from "@mui/material";
import { instance } from "@/components/AxiosProvider";

import dayjs from "dayjs";

export default function buyerSelectPage() {
  const [shiftList, setShiftList] = useState();

  const today = dayjs().format("YYYY-MM-DD");
  const queryParams = {
    date: today,
  };

  useEffect(() => {
    const getShiftList = async () => {
      await instance
        .get("/shifts/agents", {
          params: queryParams,
        })
        .then(({ data }) => setShiftList(data));
    };
    getShiftList();
  }, []);

  console.log(shiftList);

  return (
    <DefaultLayout>
      <Box
        height="100%"
        display="flex"
        flexDirection="column"
        alignItems="center"
        gap="20px"
        paddingTop="50px"
        paddingX="30px"
      >
        <UserCountList />
        <AgentsList />
      </Box>
    </DefaultLayout>
  );
}
