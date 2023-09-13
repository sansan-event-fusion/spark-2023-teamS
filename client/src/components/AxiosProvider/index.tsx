import axios from "axios";
import { getAuth } from "firebase/auth";
import React, { useEffect } from "react";
import { app } from "../../lib/firebase";

export const instance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
  timeout: 15000,
});

const auth = getAuth(app);

export function AxiosProvider({ children }: { children: React.ReactElement }) {
  useEffect(() => {
    const reqestInterceptor = instance.interceptors.request.use(
      async (request) => {
        const token = await auth.currentUser?.getIdToken();
        if (token) {
          instance.defaults.headers.common["Authorization"] = `Bearer ${token}`;
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

    return () => {
      instance.interceptors.request.eject(reqestInterceptor);
      instance.interceptors.response.eject(responseInterceptor);
    };
  }, []);

  return <>{children}</>;
}
