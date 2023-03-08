import styled, { css } from 'styled-components';

export const Wrapper = styled.div<{ $isMobile: boolean; $customHeight: number }>`
  position: relative;
  width: 100vw;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  ${({ $isMobile, $customHeight }) =>
    $isMobile &&
    css`
      min-height: ${$customHeight}px;
    `}
`;

export const Content = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
