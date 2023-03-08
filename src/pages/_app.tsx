import { FC } from 'react';
import { AppProps } from 'next/app';
import { appWithTranslation } from 'next-i18next';
import { ThemeProvider } from 'styled-components';
import { Poppins } from '@next/font/google';

import GlobalHead from 'utils/meta/GlobalHead';
import theme from 'utils/styled/theme';
import GlobalStyle from 'utils/styled/GlobalStyle';
import Layout from 'components/templates/Layout/Layout';

if (process.env.NEXT_PUBLIC_API_MOCKING === 'enabled' && process.env.NODE_ENV !== 'production') {
  require('../mocks');
}

const poppins = Poppins({
  weight: ['400', '700'],
  subsets: ['latin'],
});

const CustomApp: FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <>
      <GlobalHead />
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Layout className={poppins.className}>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </>
  );
};

export default appWithTranslation(CustomApp);
