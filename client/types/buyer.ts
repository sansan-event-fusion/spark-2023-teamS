export type CreateBuyerType = {
  name: string;
  email: string;
  postal_code: string;
  prefecture: string;
  city: string;
  address1: string;
  address2: string;
  phone_number: string;
  firebase_uid: string;
};

export type CreateBuyerResponseType = {
  id: string;
} & CreateBuyerType;
