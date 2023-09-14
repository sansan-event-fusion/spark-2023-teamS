import { User } from "firebase/auth";
import { atom } from "recoil";

export const firebaseUserAtom = atom<User | null>({
  key: "firebase_user",
  default: null,
});
