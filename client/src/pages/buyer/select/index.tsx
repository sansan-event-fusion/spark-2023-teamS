import { AgentsList } from "@/components/AgentsList";
import { DefaultLayout } from "@/components/DefaultLayout";
import { UserCountList } from "@/components/UserCountList";
import { Box } from "@mui/material";
export default function buyerSelectPage() {
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
