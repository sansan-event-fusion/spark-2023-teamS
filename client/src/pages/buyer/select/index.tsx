import { useEffect, useState } from "react";

import { AgentsList } from "@/components/AgentsList";

import { DefaultLayout } from "@/components/DefaultLayout";
import { UserCountList } from "@/components/UserCountList";
import { Box } from "@mui/material";
import { instance } from "@/components/AxiosProvider";

import dayjs from "dayjs";
import { Shift } from "@/types/shift";

export default function buyerSelectPage() {
  const [shiftList, setShiftList] = useState<Shift>();

  const today = dayjs().format("YYYY-MM-DD");
  const queryParams = {
    date: today,
  };

  useEffect(() => {
    const getShiftList = async () => {
      await instance
        .get<Shift>("/shifts/agents", {
          params: queryParams,
        })
        .then(({ data }) => setShiftList(data));
    };
    getShiftList();
  }, []);

  console.log(typeof shiftList?.data);

  shiftList?.data.map((e, _) => {
    console.log(e["agent_id"]);
  });

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
        <UserCountList persons={shiftList?.data.length} />
        <AgentsList agentList={shiftList} />
      </Box>
    </DefaultLayout>
  );
}
