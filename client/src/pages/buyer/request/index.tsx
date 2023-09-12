import { useState } from "react";

import { DefaultLayout } from "@/components/DefaultLayout";
import { DeliveryDetailsCard } from "@/components/DeliveryDetailsCard";
import { PaymentCard } from "@/components/PaymentCard";
import { Box } from "@mui/material";

export default function buyerRequestPage() {
  const [receiveLocation, setReceiveLocation] = useState("");
  const [deliveryType, setDeliveryType] = useState("");

  return (
    <DefaultLayout>
      <Box
        height="100%"
        display="flex"
        flexDirection={{ xs: "column", sm: "row" }}
      >
        <DeliveryDetailsCard
          receiveLocation={receiveLocation}
          setReceiveLocation={setReceiveLocation}
          deliveryType={deliveryType}
          setDeliveryType={setDeliveryType}
        />
        <PaymentCard />
      </Box>
    </DefaultLayout>
  );
}
