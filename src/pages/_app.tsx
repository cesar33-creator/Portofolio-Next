import "@/styles/globals.css";
import type { AppProps } from "next/app";
import "../styles/globals.css";  // pastikan path sesuai dengan lokasi file CSS Anda

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;

