import { createTheme } from "@mui/material/styles";
import {
  Container,
  CssBaseline,
  ThemeProvider,

} from "@mui/material";
import Head from "next/head";
import Header from "./Header";
import jsCookie from "js-cookie";
import { useContext } from "react";
import { Store } from "../utils/store";
import classes from "../utils/classes";
import Footer from "./Footer";

export default function Layout({ title, tags, description, children }) {
    const { state, dispatch } = useContext(Store);
    const { darkMode } = state;

    const darkModeChangeHandler = () => {
        dispatch({ type: darkMode ? "DARK_MODE_OFF" : "DARK_MODE_ON" });
        const newDarkMode = !darkMode;
        jsCookie.set("darkMode", newDarkMode ? "ON" : "OFF");
    };
  
    const theme = createTheme({
        components: {
        MuiLink: {
            defaultProps: {
                underline: "hover",
            },
        },
        MuiInput: {
            defaultProps: {
                margin: 0,
            },
        },
        },
        typography: {
        fontFamily: ["CairoRegular", "sans-serif"].join(","),

        h1: {
            fontSize: "1.6rem",
            fontWeight: 400,
            margin: "1rem 0",
        },
        h2: {
            fontSize: "1.4rem",
            fontWeight: 400,
            margin: "1rem 0",
        },
        },
        palette: {
        mode: darkMode ? "dark" : "light",
        primary: {
            main: "#FFF",
        },
        secondary: {
            main: "#f700c4",
        },
        white: {
            main: "#FFF",
        }
        },
    });

    return (
        <>
        <Head>
            <title>{title ? `${title} - Creo` : "Creo"}</title>
            {description && <meta name="description" content={description}></meta>}
            {tags && <meta name="keywords" content={tags.join(", ")}></meta>}
        </Head>
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Header setDarkMode={darkModeChangeHandler} darkMode={darkMode} />
            <main>
                {children}
            </main>
            <Footer />
        </ThemeProvider>
        </>
    );
}
