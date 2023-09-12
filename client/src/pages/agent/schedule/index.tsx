import { Box, Typography } from "@mui/material";

import { DefaultLayout } from "@/components/DefaultLayout";
import { DeliveryScheduleList } from "@/components/DeliveryScheduleList";
import { DeliveryShiftList } from "@/components/DeliveryShiftList";
import { UserCountList } from "@/components/UserCountList";

export default function agentSchedulePage() {
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
        <UserCountList />

        <Box
          height="100%"
          width="100%"
          display="flex"
          flexDirection={{ xs: "column", sm: "row" }}
          alignItems={{ xs: "center", sm: "flex-start" }}
        >
          <Box width="50%">
            <Typography>配送スケジュール</Typography>
            <DeliveryScheduleList />
          </Box>
          <Box width="50%">
            <Typography sx={{ marginTop: { xs: "20px", sm: "0px" } }}>
              配送シフト
            </Typography>
            <DeliveryShiftList />
          </Box>
        </Box>
      </Box>
    </DefaultLayout>
  );
}
