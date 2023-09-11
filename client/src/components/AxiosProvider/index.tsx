import axios from "axios";
import React, { useEffect } from "react";

export const instance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
  timeout: 15000,
});

export function AxiosProvider({ children }: { children: React.ReactElement }) {
  useEffect(() => {
    const responseInterceptor = instance.interceptors.response.use(
      async (response) => {
        return response;
      },
      async (error) => {
        return;
      }
    );
    return () => {
      instance.interceptors.response.eject(responseInterceptor);
    };
  });
  return <>{children}</>;
}
