import styled from "styled-components";
import { responsiveProps } from "../../effects/useResponsive";

export const CastDetailsContainer = styled.div<{ resxProps?: responsiveProps }>`
  display: flex;
  flex-direction: ${p => p.resxProps?.isBigScreen ? "column" : "row"};
  justify-content: ${p => !p.resxProps?.isBigScreen ? "space-around" : ""};
  align-items: center;
`;