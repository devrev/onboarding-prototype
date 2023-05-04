import "@/styles/globals.css";
import "@/styles/react-flow.css";
import "@/styles/tables.css";
import { StoreProvider } from "@/mobx/providers";

export default function App({ Component, pageProps }) {
  return (
    <StoreProvider {...pageProps}>
      <Component {...pageProps} />
    </StoreProvider>
  );
}
