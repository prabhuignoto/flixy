import styled from "styled-components";
import { responsiveProps } from "../../effects/useResponsive";

export const CastDetailsContainer = styled.div<{ resxProps?: responsiveProps }>`
  display: flex;
  flex-direction: ${({ resxProps: p }) => (p?.isBigScreen || p?.isTabletOrMobile) ? "column" : "row"};
  justify-content: ${p => !p.resxProps?.isBigScreen ? "space-around" : ""};
  align-items: center;
`;