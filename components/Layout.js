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
import Footer from "./Footer";
import Script from "next/script";
import { useTranslation } from "next-i18next";

export default function Layout({ title, tags, description, children }) {
    const { t } = useTranslation("common");
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
            <title>{title ? `${title} - Maamoun Grissa` : "Maamoun Grissa"}</title>
            {description && <meta name="description" content={description}></meta>}
            {tags && <meta name="keywords" content={tags.join(", ")}></meta>}

            <meta name="description" content={t("about")} />
            <meta name="keywords" content="web developer, software developer, fullstack developer, developer, fullstack, Html, css, Javascript, React, ReactJs, NextJs, Vue, VueJs, jQuery, Node, NodeJs, php, Wordpress, Laravel, Joomla, Opencart, Twig, sass, Tailwindcss, Web Development, Développement web, Web Application, Mobile Application, Website, Design, Logo, Flyer, Marketing, Sponsoring, Digital Marketing, Sousse, Tunisia, Tunisie, Digital, Technologies" />
            <meta property="og:title" content="Maamoun Grissa - FullStack Web Developer" />
            <meta property="og:description" content="Innovative Full Stack Web Developer with 4 years of experience in websites, web & mobile applications design and coding. Demonstrated talent for frontend and backend web development to optimize online presence. A seasoned expert in HTML, CSS, JavaScript, PHP,  MySQL, MongoDB, NodeJs, ReactJs, NextJs, VueJs, ReactNative, Ionic Framework ..." />
            <meta property="og:image" content="https://maamoungrissa.me/logo.png" />
            <meta property="og:url" content="https://maamoungrissa.me" />
            
            <link rel="icon" href="https://maamoungrissa.me/logo.png" />
            <title>Maamoun Grissa</title>
            {/* <!-- Global site tag (gtag.js) - Google Analytics --> */}
           
        </Head>
        <Script id="google" strategy="lazyOnload" src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`} />
        <Script id="analytics" strategy="lazyOnload">
                {`
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
                    page_path: window.location.pathname,
                    });
                `}
        </Script>
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
