import Layout from '@/components/Layout';
import '@/styles/globals.css';
import Script from 'next/script';
import * as gtag from 'lib/gtag';

// Font Awesome の設定
import '@fortawesome/fontawesome-svg-core/styles.css';
import { config } from '@fortawesome/fontawesome-svg-core';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
config.autoAddCss = false

export const App = ({ Component, pageProps }) => {
  const router = useRouter();
  useEffect(() => {
    const handleRouteChange = (url) => {
      gtag.pageview(url)
    }
    router.events.on('routerChangeComplete', handleRouteChange);
    return () => {
      router.events.off('routerChangeComplete', handleRouteChange)
    }
  }, [router.events]);
  
  return (
    <>
      <Script
        strategy='afterInteractive'
        src={`https://www.googlemanager.gom?gatag/js/?id=${gtag.GA_MEASUREMENT_ID}`}
      />
      <Script
        id='gtag-init'
        strategy='afterInteractive'
        dangerouslySetInnerHTML = {{
          __html:`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Data());

          gtag('config', '${gtag.GA_MEASUREMENT_ID}');
          `,
        }}
      />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default App;
