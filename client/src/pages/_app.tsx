import { AxiosProvider } from "@/components/AxiosProvider";
import { FirebaseAuthProvider } from "@/components/FirebaseAuthProvider";
import "@/styles/globals.css";
import { RecoilRoot } from "recoil";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <FirebaseAuthProvider>
        <AxiosProvider>
          <Component {...pageProps} />
        </AxiosProvider>
      </FirebaseAuthProvider>
    </RecoilRoot>
  );
}
