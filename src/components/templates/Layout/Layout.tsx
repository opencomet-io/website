import { FC, ReactNode } from 'react';
import { useViewportSize } from '@mantine/hooks';

import useMobile from 'hooks/useMobile';

import * as S from './Layout.styles';

export interface Props {
  children: ReactNode;
  className?: string;
}

const Layout: FC<Props> = ({ children, ...props }) => {
  const isMobile = useMobile();
  const { height } = useViewportSize();

  return (
    <S.Wrapper $isMobile={isMobile} $customHeight={height} {...props}>
      <S.Content>{children}</S.Content>
    </S.Wrapper>
  );
};

export default Layout;
