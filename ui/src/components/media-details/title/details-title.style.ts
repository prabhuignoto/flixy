import styled from "styled-components";
import { responsiveProps } from "../../../effects/useResponsive";

const Font = styled.div`
  font-family: "Poppins";
`;

export const Title = styled(Font)`
  color: #fff;
  display: flex;
  flex-direction: column;
  font-weight: 400;
  overflow: hidden;
  text-align: left;
  width: 100%;
`;

export const TitleWrapper = styled.div`
  align-items: center;
  display: flex;
  justify-content: flex-start;
  margin-top: .5rem;
  width: 100%;
  padding-left: 1rem;
`;

export const DetailsRatingContainer = styled.div`
  margin-right: 1rem;
`;

export const TitleYear = styled.span<{resxProps: responsiveProps}>`
  color: rgba(204,0,0,0.85);
  font-size: 1.5rem;
  margin-left: 1rem;
  display: flex;
  height: 100%;
  align-items: center;
  font-size: ${p => p.resxProps.isBigScreen ? "1.5rem" : "1.2rem"};
`;

export const TitleText = styled.span<{resxProps: responsiveProps}>`
  max-width: 85%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  display: flex;
  height: 100%;
  align-items: center;
  font-size: ${p => p.resxProps.isBigScreen ? "1.5rem" : "1.2rem"};
  color: #191919;
`;

export const TitleRow1 = styled.div`
  align-items: center;
  display: flex;
  width: 100%;
  height: 3rem;
`;

export const TitleRow2 = styled.div`
  align-items: center;
  display: flex;
  margin-top: .5rem;
`;

export const AttributesContainer = styled.div<{ resxProps?: responsiveProps }>`
  align-items: center;
  display: flex;
  justify-content: space-evenly;
  ${p => {
    if (p.resxProps?.isTabletOrMobile) {
      return "";
    } else {
      return "margin-left: auto;margin-right: 1rem;"
    }
  }}
`;

export const AttributeContainer = styled.div`
  margin-right: .75rem;
`;

export const GenresContainer = styled.div`
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  margin-bottom: .25rem;
  margin-top: .25rem;
`;