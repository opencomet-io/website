import { FC } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';

import theme from 'utils/styled/theme';

const GlobalHead: FC = () => {
  const router = useRouter();

  return (
    <Head>
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, minimum-scale=0.3, maximum-scale=5"
      />
      <meta name="referrer" content="same-origin" />

      <link rel="icon" sizes="any" href="/icons/favicon.svg" type="image/svg+xml" />
      <link rel="icon" sizes="32x32" href="/icons/favicon-32x32.png" type="image/png" />
      <link rel="icon" sizes="48x48" href="/icons/favicon-48x48.png" type="image/png" />
      <link rel="icon" sizes="96x96" href="/icons/favicon-96x96.png" type="image/png" />
      <link rel="icon" sizes="144x144" href="/icons/favicon-144x144.png" type="image/png" />

      {/* PWA */}
      <meta name="application-name" content={process.env.NEXT_PUBLIC_SITE_NAME} />
      <meta name="format-detection" content="telephone=no" />
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="theme-color" content={theme.colors.primary} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary" />

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={process.env.NEXT_PUBLIC_SITE_NAME} />
      <meta property="og:locale" content={router.locale} />
      {router.locales?.flatMap(locale =>
        locale === router.locale ? (
          []
        ) : (
          <meta property="og:locale:alternate" content={locale} key={`og-alt-${locale}`} />
        )
      )}
    </Head>
  );
};

export default GlobalHead;
