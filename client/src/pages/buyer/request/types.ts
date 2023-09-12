import { Dispatch, SetStateAction } from "react";

export type BuyerRequestProps = {
  receiveLocation: string;
  setReceiveLocation: Dispatch<SetStateAction<string>>;
  deliveryType: string;
  setDeliveryType: Dispatch<SetStateAction<string>>;
};
