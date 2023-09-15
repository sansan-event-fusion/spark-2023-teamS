import { type } from "os";

export type ServiceUserResponseType = {
  data: {
    uuid: string;
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
};

export type UserSignupParamsType = {
  email: string;
} & UserSignupFormType;

export type UserSignupFormType = {
  name: string;
  postal_code: string;
  prefecture: string;
  city: string;
  address1: string;
  address2: string;
  phone_number: string;
};
