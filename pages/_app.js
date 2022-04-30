import { createTheme, ThemeProvider } from "@mui/material/styles";
import Head from "next/head";
const theme = createTheme({
  palette: {
    primary: {
      main: process.env.NEXT_PUBLIC_ActionColor,
    },
  },
});
function MyApp({ Component, pageProps }) {
  return (

    <ThemeProvider theme={theme}>
      <Head>
        <link rel="icon" href={process.env.NEXT_PUBLIC_Favicon} />
        <title>{process.env.NEXT_PUBLIC_Name}</title>
        <meta
          name="description"
          content={process.env.NEXT_PUBLIC_WebDescription}
        />
      </Head>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
