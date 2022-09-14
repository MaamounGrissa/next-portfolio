import { createTheme } from "@mui/material/styles";
import {
  Box,
  Link,
  Grid,
  Typography,
} from "@mui/material";
import NextLink from "next/link";
import classes from "../utils/classes";
import Image from 'next/image';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { useTranslation } from 'next-i18next';

export default function Footer() {
    const { t } = useTranslation('common');
    return (
        <div id="contacts" >
            <Box component="footer" sx={classes.footer}>
                <Grid container rowSpacing={1}  columnSpacing={{ xs: 1, sm: 2, md: 3 }}
                    >
                    <Grid item xs={12} sm={6} >
                        <Box display='flex' alignItems='center' marginBottom={1} >
                            <PhoneIcon sx={{ color: '#FFF', marginRight: '15px' }} />
                            <Typography sx={{ color: '#FFF' }} >{t('footer_phone')}</Typography>
                        </Box>
                        <Box display='flex' alignItems='center' marginBottom={1}>
                            <EmailIcon sx={{ color: '#FFF', marginRight: '15px' }} />
                            <Typography sx={{ color: '#FFF' }} >{t('footer_mail')}</Typography>
                        </Box>
                        <Box display='flex' alignItems='center' marginBottom={1}>
                            <LocationOnIcon sx={{ color: '#FFF', marginRight: '15px' }} />
                            <Typography sx={{ color: '#FFF' }} >{t('footer_address')}</Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={6} >
                        <Box>
                            <Box display='flex' justifyContent='flex-end' alignItems='center'>
                                <NextLink href="https://www.facebook.com/maamoung/" passHref>
                                    <Link style={{ margin: '6px' }}>
                                        <Image  src="/images/facebook.png" alt="facebook" width={30} height={30} />
                                    </Link>
                                </NextLink>
                                <NextLink href="https://www.instagram.com/gmaamoun/" passHref>
                                    <Link style={{ margin: '6px' }} >
                                        <Image src="/images/instagram.png" alt="instagram" width={30} height={30} />
                                    </Link>
                                </NextLink>
                                <NextLink href="https://www.linkedin.com/in/maamoun-grissa/" passHref>
                                    <Link style={{ margin: '6px' }} >
                                        <Image src="/images/linkedin.png" alt="linkedin" width={30} height={30} />
                                    </Link>
                                </NextLink>
                                <NextLink href="https://www.twitter.com/CreoSousse" passHref>
                                    <Link style={{ margin: '6px' }} >
                                        <Image src="/images/twitter.png" alt="twitter" width={30} height={30} />
                                    </Link>
                                </NextLink>
                                <NextLink href="https://www.youtube.com/channel/CreoSousse" passHref>
                                    <Link style={{ margin: '6px' }} >
                                        <Image src="/images/youtube.png" alt="youtube" width={30} height={30} />
                                    </Link>
                                </NextLink>
                            </Box>
                            <Box display='flex' justifyContent='flex-end' alignItems='center' marginTop={2}>
                                <Typography sx={classes.powered}>{t('footer_copyright')}</Typography>
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </div>
  )
}
