import createCache from '@emotion/cache';
import { CacheProvider } from '@emotion/react'
import { StoreProvider } from '../utils/store'
import { SnackbarProvider } from 'notistack';
import '../styles/globals.css'
import { appWithTranslation } from 'next-i18next';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const clientSideEmotionCache = createCache({ key: 'css' })

function MyApp({ Component, pageProps, emotionCache = clientSideEmotionCache }) {

  useEffect(() => {
    AOS.init({
      easing: "ease-out-cubic",
      once: true,
      offset: 50,
      delay: 200,
      duration: 1200,
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

export default appWithTranslation(MyApp)
