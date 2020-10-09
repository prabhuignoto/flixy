import emotion from "@emotion/styled";
import { responsiveProps } from '../../effects/useResponsive';

export const HeaderWrapper = emotion.header<{ resx?: responsiveProps }>`
  align-items: center;
  background: #000;
  color: #fff;
  display: flex;
  font-weight: 300;
  height: ${p => p.resx?.isBigScreen ? "4rem" : "3.5rem"};
  margin-bottom: 2rem;
  margin-top: 1rem;
  padding-left: 2rem;
  width: 100%;
`;

export const SearchAndDiscover = emotion.div`
  align-items: center;
  display: flex;
  height: 4rem;
  justify-content: flex-start;
  margin-left: 3rem;
  padding: .25rem;
`;

export const SearchSettingToggle = emotion.div<{ resx?: responsiveProps }>`
  height: ${p => p.resx?.isBigScreen ? "2.5rem" : "2rem"};
`;

export const LogoContainer = emotion.div`
  margin-left: 2rem;
  padding-right: 3rem;
`;