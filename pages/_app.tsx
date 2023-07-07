import React from "react";
import "@/styles/globals.scss";
import type { AppProps } from "next/app";
import Layout from "@/components/layout";
import { ThemeProvider } from "next-themes";
import { SessionProvider } from "next-auth/react";
import LoadingScreen from "@/components/LoadingScreen";

export default function App({ Component, pageProps, session }: any) {
  const [loading, setLoading] = React.useState(false);
  React.useEffect(() => {
    setTimeout(() => setLoading(true), 6000);
  }, []);
  return (
    <>
      <ThemeProvider attribute="class">
        {loading ? (
          <SessionProvider session={session}>
            <Layout>
              <Component {...pageProps} />
            </Layout>
          </SessionProvider>
        ) : (
          <LoadingScreen />
        )}
      </ThemeProvider>
    </>
  );
}
