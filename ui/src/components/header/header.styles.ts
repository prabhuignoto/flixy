import styled from 'styled-components';
import { responsiveProps } from '../../effects/useResponsive';

export const HeaderWrapper = styled.header<{resx?: responsiveProps}>`
  width: 100%;
  height: ${p => p.resx?.isBigScreen ? "4rem" : "3.5rem"};
  display: flex;
  align-items: center;
  color: #fff;
  font-weight: 300;
  background: #000;
  margin-bottom: 2rem;
  margin-top: 1rem;
  padding-left: 2rem;
`;

export const SearchAndDiscover = styled.div`
  height: 4rem;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: .25rem;
  margin-left: 3rem;
`;

export const SearchSettingToggle = styled.div<{resx?: responsiveProps}>`
  height: ${p => p.resx?.isBigScreen ? "2.5rem" : "2rem"};
`;

export const LogoContainer = styled.div`
  margin-left: 2rem;
  padding-right: 3rem;
`;