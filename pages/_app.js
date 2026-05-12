import createCache from '@emotion/cache';
import { CacheProvider } from '@emotion/react'
import { StoreProvider } from '../utils/store'
import { SnackbarProvider } from 'notistack';
import '../styles/globals.css'
import { appWithTranslation } from 'next-i18next';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import nextI18NextConfig from '../next-i18next.config.js';

const clientSideEmotionCache = createCache({ key: 'css' })

function MyApp({ Component, pageProps, emotionCache = clientSideEmotionCache }) {

  useEffect(() => {
    AOS.init({
      easing: "ease-out-cubic",
      once: true,
      mirror: false,
      offset: 60,
      duration: 900,
    });
  }, []);

  return (
    <CacheProvider value={emotionCache}>
        <SnackbarProvider anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}>
          <StoreProvider>
            <Component {...pageProps} />
          </StoreProvider>
        </SnackbarProvider>
    </CacheProvider>
  )
}

export default appWithTranslation(MyApp, nextI18NextConfig)
