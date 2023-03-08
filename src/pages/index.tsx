import { FC } from 'react';
import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import { useTranslation, SSRConfig } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Link from 'next/link';
import styled from 'styled-components';

import PageHead from 'utils/meta/PageHead';
import media from 'utils/styled/media';
import ExternalLink from 'components/atoms/ExternalLink/ExternalLink';
import { SVG as GitHubSVG } from 'assets/icons/github.svg';
import { SVG as OpenCometSVG } from 'assets/icons/opencomet.svg';

const NavBar = styled.nav`
  position: absolute;
  inset: 18px 24px auto 24px;
  display: flex;
  align-items: center;
`;

const ContentRow = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  text-align: center;

  ${media.m} {
    gap: 28px;
  }
`;

const Footer = styled.footer`
  position: absolute;
  inset: auto 24px 18px 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Heading = styled.h1`
  font-size: 36px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.primary};

  ${media.m} {
    font-size: 64px;
  }
`;

const Description = styled.p`
  max-width: 20rem;
  font-size: 14px;
  font-weight: 400;
  line-height: 1.75;

  ${media.m} {
    max-width: 40rem;
    font-size: 20px;
  }
`;

const Footnote = styled.p`
  font-size: 12px;
  color: ${({ theme }) => theme.colors.grey};

  ${media.m} {
    font-size: 14px;
  }
`;

const OpenCometIcon = styled(OpenCometSVG)`
  width: 48px;
  height: 48px;

  ${media.m} {
    width: 64px;
    height: 64px;
  }
`;

const GitHubIcon = styled(GitHubSVG)`
  width: 28px;
  height: 28px;

  ${media.m} {
    width: 32px;
    height: 32px;
  }
`;

export interface Props extends InferGetServerSidePropsType<typeof getServerSideProps> {}

const Landing: FC<Props> = () => {
  const { t } = useTranslation('common');

  return (
    <>
      <PageHead title="OpenComet" description={t('company_description')} />
      <NavBar>
        <Link href="/">
          <OpenCometIcon />
        </Link>
      </NavBar>
      <ContentRow>
        <Heading>OpenComet</Heading>
        <Description>{t('company_description')}</Description>
      </ContentRow>
      <Footer>
        <Footnote>{t('company_footnote')}</Footnote>
        <ExternalLink destination="https://github.com/opencomet-io" newTab={false}>
          <GitHubIcon />
        </ExternalLink>
      </Footer>
    </>
  );
};

type Data = {};

const getServerSideProps: GetServerSideProps<Data & SSRConfig> = async ({ locale = 'en' }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
    },
  };
};

export { getServerSideProps };
export default Landing;
