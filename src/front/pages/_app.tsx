import type { AppProps } from 'next/app'
import {ThemeProvider} from "styled-components";
import {theme} from "@/styles/theme";
import AppLayout from "@/components/AppLayout";

export default function App({ Component, pageProps }: AppProps) {
  return (
      <ThemeProvider theme={theme}>
          <AppLayout>
            <Component {...pageProps} />
          </AppLayout>
      </ThemeProvider>
  )
}
