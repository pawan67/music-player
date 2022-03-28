import { UserContextProvider } from "../context/userContext";
import "../styles/globals.css";
import { ThemeProvider } from "next-themes";
function MyApp({ Component, pageProps }) {
  return (
    <UserContextProvider>
      <ThemeProvider enableSystem={false}>
        <Component {...pageProps} />
      </ThemeProvider>
    </UserContextProvider>
  );
}

export default MyApp;
