import { atom } from "recoil";
import { ServiceUserResponseType } from "../types/user";

export const userAtom = atom<ServiceUserResponseType | null>({
  key: "user",
  default: null,
});
