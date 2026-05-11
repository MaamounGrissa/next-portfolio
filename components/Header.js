import React, { useEffect, useState } from 'react'
import {
    AppBar,
    Box,
    Toolbar,
    Typography,
    IconButton,
    Drawer,
    useMediaQuery,
    List,
    ListItem,
    Divider,
  } from "@mui/material";
import NextLink from "next/link";
import classes from "../utils/classes";
import Image from 'next/image';
import CancelIcon from "@mui/icons-material/Cancel";
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import MenuIcon from '@mui/icons-material/Menu';

const navLinks = [
    { href: '#intro', label: 'intro' },
    { href: '#career', label: 'career' },
    { href: '#skills', label: 'skills' },
    { href: '#projects', label: 'portfolio' },
    { href: '#contacts', label: 'contact' },
];

const languages = [
    { locale: 'fr', label: 'Français', image: 'fr' },
    { locale: 'en', label: 'English', image: 'en' },
    { locale: 'ar', label: 'العربية', image: 'ar' },
    { locale: 'ru', label: 'Русский', image: 'ru' },
];

export default function Header(props) {
    const { darkMode, setDarkMode } = props;
    const router = useRouter();
    const { locale = 'en', asPath } = router;
    const { t } = useTranslation('common');
    const isDesktop = useMediaQuery("(min-width:600px)");
    const [sidebarVisible, setSidebarVisible] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [showLangsList, setShowLangsList] = useState(false);
    const currentLanguage = languages.find((language) => language.locale === locale) || languages[1];

    const sidebarOpenHandler = () => {
        setSidebarVisible(true);
    };

    const sidebarCloseHandler = () => {
        setSidebarVisible(false);
    };

    const toggleLanguages = () => {
        setShowLangsList((isVisible) => !isVisible);
    };

    const handleLanguageKeyDown = (event) => {
        if (event.key === 'Enter' || event.key === ' ') {
            event.preventDefault();
            toggleLanguages();
        }
    };
    
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 30);
        };

        handleScroll();
        document.addEventListener("scroll", handleScroll, { passive: true });

        return () => {
            document.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <AppBar position="fixed" sx={scrolled ? classes.colored : classes.appbar}>
            <Toolbar sx={classes.toolbar}>
                <Box display="flex" alignItems="center">
                    
                </Box>
                <Box display="flex" alignItems="center" justifyContent="space-between" sx={classes.navbarContainer}>
                    {isDesktop ? (
                        <Box sx={classes.navbarMenu}>
                            {navLinks.map((link) => (
                                <NextLink key={link.href} href={link.href} passHref>
                                    <a>
                                        <Typography sx={classes.menuTitle}>{t(link.label)}</Typography>
                                    </a>
                                </NextLink>
                            ))}
                        </Box>
                        ) : (
                            <IconButton onClick={sidebarOpenHandler} aria-label={t('open_menu')}>
                                <MenuIcon sx={{ color: "#FFF", fontSize: "30px" }} />
                            </IconButton>
                        )
                    }
                    <Box>
                        <div
                            className='languages flex center'
                            onClick={toggleLanguages}
                            onKeyDown={handleLanguageKeyDown}
                            role="button"
                            tabIndex={0}
                            aria-label={t('language_switcher')}
                            aria-expanded={showLangsList}
                        >
                            <div className="selected-lang"> <Image src={`/images/langs/${currentLanguage.image}.png`} alt={currentLanguage.label} width={25} height={25} /> </div>
                            <KeyboardArrowDownIcon className={ showLangsList ? 'rotate' : '' } />
                            <div className={ showLangsList ? "list-languages show" : "list-languages"}>
                                <ul>
                                    {languages.map((language) => (
                                        <li key={language.locale}>
                                            <NextLink href={asPath} locale={language.locale} passHref>
                                                <a className="flex">
                                                    <Image src={`/images/langs/${language.image}.png`} alt={language.label} width={25} height={25} />
                                                    <span style={{ color: "#333", marginLeft: "8px" }}>{language.label}</span>
                                                </a>
                                            </NextLink>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </Box>
                </Box>
                <Box display={'flex'} alignItems={"center"}>
                    {/* <Box sx={isDesktop ? classes.visible : classes.hidden}>
                        <form onSubmit={submitHandler}>
                            <Box sx={classes.searchForm}>
                                <TextField id="search-input" variant="standard"
                                    name="query"
                                    sx={classes.searchInput}
                                    value={query}
                                    onChange={queryChangeHandler}
                                    color="primary"
                                    focused
                                    />
                                <IconButton 
                                    type="submit"
                                    sx={classes.searchButton}
                                    aria-label="search"
                                    >
                                    <SearchIcon sx={{ fontSize: "25px" }} color='white' />
                                </IconButton>
                            </Box>
                        </form>
                    </Box> */}
                    {/* <Switch checked={darkMode} onChange={setDarkMode} /> */}
                </Box>
            </Toolbar>
            <Drawer
                anchor="left"
                open={sidebarVisible}
                onClose={sidebarCloseHandler}
                >
                <List>
                    <ListItem>
                        <Box
                            display="flex"
                            alignItems="center"
                            justifyContent="space-between"
                        >
                            <Typography>&nbsp;</Typography>
                            <Box>
                                {navLinks.map((link) => (
                                    <NextLink key={link.href} href={link.href} passHref>
                                        <a onClick={sidebarCloseHandler}>
                                            <Typography sx={classes.menuTitleMobile}>{t(link.label)}</Typography>
                                        </a>
                                    </NextLink>
                                ))}
                            </Box>
                            <IconButton sx={classes.closeIcon} aria-label={t('close_menu')} onClick={sidebarCloseHandler}>
                                <CancelIcon />
                            </IconButton>
                        </Box>
                    </ListItem>
                    <Divider light />
                </List>
            </Drawer>
        </AppBar>
  )
}
