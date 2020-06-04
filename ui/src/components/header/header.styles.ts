import styled from 'styled-components';
import { responsiveProps } from '../../effects/useResponsive';

export const HeaderWrapper = styled.header<{resx?: responsiveProps}>`
  width: 100%;
  height: ${p => p.resx?.isBigScreen ? "5rem" : "4rem"};
  display: flex;
  align-items: center;
  color: #fff;
  font-weight: 300;
  background: #000;
  margin-bottom: 2rem;
  margin-top: 1rem;
  margin-left: 2rem;
`;

export const SearchAndDiscover = styled.div`
  height: 4rem;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: .25rem;
`;

export const SearchSettingToggle = styled.div`
  height: 2.5rem;
`;