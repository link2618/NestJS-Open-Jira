import type { AppProps } from "next/app";
import { CssBaseline, ThemeProvider } from "@mui/material";

import { darkTheme } from "@/themes";
import { UIProvider } from "@/context/ui";

import "@/styles/globals.css";

export default function App({ Component, pageProps }: AppProps) {
    return(
      <UIProvider>
        <ThemeProvider theme={darkTheme}>
            <CssBaseline />
            <Component {...pageProps} />
        </ThemeProvider>
      </UIProvider>
    )
}
