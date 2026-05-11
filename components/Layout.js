import { createTheme } from "@mui/material/styles";
import {
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
import { useRouter } from "next/router";

const siteUrl = "https://maamoungrissa.me";
const ogLocales = {
    en: "en_US",
    fr: "fr_FR",
    ar: "ar_TN",
    ru: "ru_RU",
};

export default function Layout({ title, tags, description, children }) {
    const { t } = useTranslation("common");
    const router = useRouter();
    const { locale = "en", locales = ["en"], defaultLocale = "en", asPath = "/" } = router;
    const { state, dispatch } = useContext(Store);
    const { darkMode } = state;
    const siteTitle = title ? `${title} - Maamoun Grissa` : t("meta_title");
    const metaDescription = description || t("meta_description");
    const metaKeywords = tags?.length ? tags.join(", ") : t("meta_keywords");
    const googleAnalyticsId = process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS;
    const pathname = asPath.split("?")[0].split("#")[0] || "/";
    const pathWithoutLocale = locales.reduce((path, currentLocale) => {
        const localePrefix = `/${currentLocale}`;

        return path === localePrefix || path.startsWith(`${localePrefix}/`)
            ? path.replace(localePrefix, "") || "/"
            : path;
    }, pathname);
    const getLocalizedUrl = (targetLocale) => {
        const localizedPath = targetLocale === defaultLocale
            ? pathWithoutLocale
            : `/${targetLocale}${pathWithoutLocale === "/" ? "" : pathWithoutLocale}`;

        return `${siteUrl}${localizedPath === "/" ? "" : localizedPath}`;
    };

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
            <title>{siteTitle}</title>
            <meta name="description" content={metaDescription} />
            <meta name="keywords" content={metaKeywords} />
            <meta property="og:title" content={siteTitle} />
            <meta property="og:description" content={metaDescription} />
            <meta property="og:image" content="https://maamoungrissa.me/logo.png" />
            <meta property="og:url" content={getLocalizedUrl(locale)} />
            <meta property="og:type" content="website" />
            <meta property="og:locale" content={ogLocales[locale] || ogLocales.en} />
            {locales.filter((currentLocale) => currentLocale !== locale).map((currentLocale) => (
                <meta key={`og-locale-${currentLocale}`} property="og:locale:alternate" content={ogLocales[currentLocale] || currentLocale} />
            ))}
            <link rel="canonical" href={getLocalizedUrl(locale)} />
            {locales.map((currentLocale) => (
                <link key={`alternate-${currentLocale}`} rel="alternate" hrefLang={currentLocale} href={getLocalizedUrl(currentLocale)} />
            ))}
            <link rel="alternate" hrefLang="x-default" href={getLocalizedUrl(defaultLocale)} />
            
            <link rel="icon" href="https://maamoungrissa.me/logo.png" />
           
        </Head>
        {googleAnalyticsId && <Script id="google" strategy="lazyOnload" src={`https://www.googletagmanager.com/gtag/js?id=${googleAnalyticsId}`} />}
        {googleAnalyticsId && <Script id="analytics" strategy="lazyOnload">
                {`
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', '${googleAnalyticsId}', {
                    page_path: window.location.pathname,
                    });
                `}
        </Script>}
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
