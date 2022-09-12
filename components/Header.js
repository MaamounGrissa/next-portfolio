import React, { useEffect, useState } from 'react'
import {
    AppBar,
    Badge,
    Box,
    Toolbar,
    Typography,
    IconButton,
    Button,
    Menu,
    MenuItem,
    Drawer,
    TextField,
    useMediaQuery,
    List,
    ListItem,
    Divider,
    Switch
  } from "@mui/material";
import NextLink from "next/link";
import classes from "../utils/classes";
import Image from 'next/image';
import SearchIcon from "@mui/icons-material/Search";
import CancelIcon from "@mui/icons-material/Cancel";
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Link from 'next/link';

export default function Header(props) {
    const { darkMode, setDarkMode } = props;
    const router = useRouter();
    const { locale, asPath } = useRouter();
    const { t } = useTranslation('common');
    const isDesktop = useMediaQuery("(min-width:600px)");
    const [sidbarVisible, setSidebarVisible] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [query, setQuery] = useState("");
    const [showLangsList, setShowLangsList] = useState(false);

    const sidebarOpenHandler = () => {
        setSidebarVisible(true);
    };

    const sidebarCloseHandler = () => {
        setSidebarVisible(false);
    };
   
    const queryChangeHandler = (e) => {
        setQuery(e.target.value);
    };

    const submitHandler = (e) => {
        e.preventDefault();
        router?.push(`/search?query=${query}`);
    };
    
    useEffect(() => {
        document.addEventListener("scroll", () => {
          const scrollCheck = window.scrollY > 30;
          setScrolled(scrollCheck)
        })
    })

    return (
        <AppBar position="fixed" sx={scrolled ? classes.colored : classes.appbar}>
            <Toolbar sx={classes.toolbar}>
                <Box display="flex" alignItems="center">
                    
                </Box>
                <Box display="flex" alignItems="center" justifyContent="space-between" sx={classes.navbarContainer}>
                    <Box sx={classes.navbarMenu}>
                        <NextLink href="#intro" passHref>
                            <a >
                                <Typography sx={classes.menuTitle}>{t('intro')}</Typography>
                            </a>
                        </NextLink>
                        <NextLink href="#career" passHref>
                            <a>
                                <Typography sx={classes.menuTitle}>{t('career')}</Typography>
                            </a>
                        </NextLink>
                        <NextLink href="#skills" passHref>
                            <a>
                                <Typography sx={classes.menuTitle}>{t('skills')}</Typography>
                            </a>
                        </NextLink>
                        <NextLink href="/" passHref>
                            <a>
                                <Typography sx={classes.menuTitle}>{t('portfolio')}</Typography>
                            </a>
                        </NextLink>
                        <NextLink href="/" passHref>
                            <a>
                                <Typography sx={classes.menuTitle}>{t('contact')}</Typography>
                            </a>
                        </NextLink>
                    </Box>
                    <Box>
                        <div className='languages flex center' onClick={() => setShowLangsList(!showLangsList)}>
                            <div className="selected-lang"> <Image src={`/images/langs/${locale === 'fr' ? 'fr' : locale === 'ar' ? 'ar' : locale === 'ru' ? 'ru' : 'en' }.png`} alt="Lang" width={25} height={25} /> </div>
                            <KeyboardArrowDownIcon className={ showLangsList ? 'rotate' : '' } />
                            <div className={ showLangsList ? "list-languages show" : "list-languages"}>
                                <ul>
                                    <li><Link href={asPath} locale="fr"><a className="flex"><Image src="/images/langs/fr.png" alt="Lang" width={25} height={25} /> <span style={{ color: "#333", marginLeft: "8px" }}>Français</span></a></Link></li>
                                    <li><Link href={asPath} locale="en"><a className="flex"><Image src="/images/langs/en.png" alt="Lang" width={25} height={25} /> <span style={{ color: "#333", marginLeft: "8px" }}>English</span></a></Link></li>
                                    <li><Link href={asPath} locale="ar"><a className="flex"><Image src="/images/langs/ar.png" alt="Lang" width={25} height={25} /> <span style={{ color: "#333", marginLeft: "8px" }}>العربية</span></a></Link></li>
                                    <li><Link href={asPath} locale="ru"><a className="flex"><Image src="/images/langs/ru.png" alt="Lang" width={25} height={25} /> <span style={{ color: "#333", marginLeft: "8px" }}>русский</span></a></Link></li>
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
                open={sidbarVisible}
                onClose={sidebarCloseHandler}
                >
                <List>
                    <ListItem>
                        <Box
                            display="flex"
                            alignItems="center"
                            justifyContent="space-between"
                        >
                            <Typography>Shopping by category</Typography>
                            <IconButton aria-label="close" onClick={sidebarCloseHandler}>
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
