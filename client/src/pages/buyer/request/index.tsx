import { useState } from "react";
import { useRouter } from "next/router";

import { DefaultLayout } from "@/components/DefaultLayout";
import { RequestDetailsCard } from "@/components/RequestDetailsCard";
import { PaymentCard } from "@/components/PaymentCard";
import { Box, Button } from "@mui/material";
import { instance } from "@/components/AxiosProvider";

export default function buyerRequestPage() {
  const [receiveLocation, setReceiveLocation] = useState("");
  const [deliveryType, setDeliveryType] = useState("");

  // この変数は使って無いが、このようにまとめてPropsとして渡したい
  const [requestDetails, setRequestDetails] = useState({
    pickupPlace: "", // 代理人が荷物を取りに行く場所
    receiveLocation: "", // 購入者が荷物を受け取る方法
    deliveryType: "", // 配送のプライオリティ（普通か緊急か）
  });

  const router = useRouter();

  const handleSubmit = async () => {
    // ここでまずGETでbuyer_idを取りに行くか、ログインした時にbuyer_idを保持するか
    await instance.post("/delivery/buyers", {
      buyer_id: "740431c5-911b-4244-8b55-1e1748ce00c4",
      agent_id: "c5a0155a-6cb6-40bb-9946-e708ebcf1fe7",
      delivery_date: "2023-08-10",
      delivery_time: "18:00:00",
      receiving_address: "住所の文字列バーン",
    });

    router.push("/buyer/start");
  };

  return (
    <DefaultLayout>
      <Box
        height="100%"
        display="flex"
        flexDirection={{ xs: "column", sm: "row" }}
        justifyContent="center"
        gap={{ xs: "20px", sm: "40px" }}
        marginTop={{ xs: "20px", sm: "40px" }}
      >
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          gap={"20px"}
        >
          <RequestDetailsCard
            receiveLocation={receiveLocation}
            setReceiveLocation={setReceiveLocation}
            deliveryType={deliveryType}
            setDeliveryType={setDeliveryType}
          />
          <Button
            size="small"
            variant="outlined"
            style={{
              borderColor: "black",
              background: "#014A8F",
            }}
            sx={{
              color: "white",
              width: { xs: "160px", sm: "240px" },
              height: { xs: "50px", sm: "60px" },
            }}
            onClick={handleSubmit}
          >
            予約する
          </Button>
        </Box>
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          gap="20px"
        >
          {/* <PaymentCard /> */}
        </Box>
      </Box>
    </DefaultLayout>
  );
}
