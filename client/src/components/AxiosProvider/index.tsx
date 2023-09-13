import axios from "axios";
import { getAuth } from "firebase/auth";
import { app } from "../../lib/firebase";
import { AxiosProviderProps } from "./types";

export const instance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
  timeout: 15000,
});

export function AxiosProvider({ children }: AxiosProviderProps) {
  const auth = getAuth(app);
  instance.interceptors.request.use(async (request) => {
    const token = await auth.currentUser?.getIdToken();
    if (token) {
      request.headers.Authorization = `Bearer ${token}`;
    }
    return request;
  });

  instance.interceptors.response.use(
    async (response) => {
      return response;
    },
    async (error) => {
      return;
    }
  );

  return <>{children}</>;
}
