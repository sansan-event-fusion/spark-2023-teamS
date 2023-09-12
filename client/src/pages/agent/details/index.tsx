import { DefaultLayout } from "@/components/DefaultLayout";
import { DeliveryDetailsCard } from "@/components/DeliveryDetailsCard";
import { Box, Button, Link } from "@mui/material";

export default function agentDeliveryDetailPage() {
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
        <DeliveryDetailsCard />
        <Button
          size="small"
          variant="outlined"
          style={{
            borderColor: "black",
            background: "#014A8F",
          }}
          sx={{
            color: "#ffffff",
            marginTop: { xs: "10px", sm: "0px" },
            width: "160px",
            fontSize: "20px",
          }}
        >
          <Link href={""} className="text-inherit no-underline">
            配達完了
          </Link>
        </Button>
      </Box>
    </DefaultLayout>
  );
}
