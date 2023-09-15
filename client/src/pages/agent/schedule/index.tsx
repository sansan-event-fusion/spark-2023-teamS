import { Box, Typography } from "@mui/material";

import { DefaultLayout } from "@/components/DefaultLayout";
import { DeliveryScheduleList } from "@/components/DeliveryScheduleList";
import { DeliveryShiftList } from "@/components/DeliveryShiftList";
import { UserCountList } from "@/components/UserCountList";
import { useState } from "react";
import { instance } from "@/components/AxiosProvider";
import { useRecoilValue } from "recoil";
import { userAtom } from "@/atoms/userAtom";

export default function agentSchedulePage() {
  const user = useRecoilValue(userAtom);

  const [shiftData, setShiftData] = useState({
    date: "",
    starts_time: "",
    ends_time: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setShiftData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const onShiftSubmit = async () => {
    await instance.post("/shifts/agents", {
      agent_id: user?.data.uuid,
      ...shiftData,
    });
  };

  return (
    <DefaultLayout>
      <Box
        height="100%"
        display="flex"
        flexDirection="column"
        alignItems="center"
        gap="20px"
        paddingTop="50px"
      >
        <UserCountList persons={2} />

        <Box
          height="100%"
          width="100%"
          display="flex"
          flexDirection={{ xs: "column", sm: "row" }}
          alignItems={{ xs: "center", sm: "flex-start" }}
        >
          <Box width="50%">
            <Typography
              sx={{
                fontSize: { xs: "16px", sm: "24px" },
                marginLeft: { xs: "0px", sm: "32px" },
              }}
            >
              配送スケジュール
            </Typography>
            <DeliveryScheduleList />
          </Box>
          <Box width="50%">
            <Typography
              sx={{
                fontSize: { xs: "16px", sm: "24px" },
                marginTop: { xs: "20px", sm: "0px" },
                marginLeft: { xs: "0px", sm: "32px" },
              }}
            >
              配送シフト
            </Typography>
            <DeliveryShiftList
              onSubmit={onShiftSubmit}
              handleChange={handleChange}
            />
          </Box>
        </Box>
      </Box>
    </DefaultLayout>
  );
}
