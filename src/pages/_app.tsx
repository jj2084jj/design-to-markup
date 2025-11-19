import '@/styles/main.scss'; 
import type { AppProps } from 'next/app';

import Layout from '@/components/layout/layout';

type AppPropsWithExtra = AppProps & {
  pageProps: AppProps['pageProps'] & { isMobile?: boolean };
};

export default function App({ Component, pageProps }: AppPropsWithExtra) {
  return <Layout><Component {...pageProps} /></Layout>;
}
