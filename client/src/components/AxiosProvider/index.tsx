import axios from "axios";
import { getAuth } from "firebase/auth";
import React from "react";
import { app } from "../../lib/firebase";
import { AxiosProviderProps } from "./types";

export const instance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
  timeout: 15000,
});

export function AxiosProvider({ children }: { children: React.ReactElement }) {
  const auth = getAuth(app);
  const reqestInterceptor = instance.interceptors.request.use(
    async (request) => {
      const token = await auth.currentUser?.getIdToken();
      if (token) {
        request.headers.Authorization = `Bearer ${token}`;
      }
      return request;
    }
  );
  const responseInterceptor = instance.interceptors.response.use(
    async (response) => {
      return response;
    },
    async (error) => {
      return;
    }
  );
  return <>{children}</>;
}
