import "@/styles/globals.scss";
import type { AppProps } from "next/app";
import Layout from "@/components/layout";
import { ThemeProvider } from "next-themes";
import { SessionProvider } from "next-auth/react";

export default function App({ Component, pageProps, session }: any) {
  return (
    <>
      <ThemeProvider attribute="class">
        <SessionProvider session={session}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </SessionProvider>
      </ThemeProvider>
    </>
  );
}
