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
  margin-left: .5rem;
  display: flex;
  height: 100%;
  align-items: center;
  font-weight: 500;
  font-size: ${p => p.resxProps.isBigScreen ? "1.1rem" : ".85rem"};
`;

export const TitleText = styled.span<{resxProps: responsiveProps}>`
  max-width: 85%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  display: flex;
  height: 100%;
  align-items: center;
  font-family: Poppins;
  font-weight: 500;
  font-size: ${p => p.resxProps.isBigScreen ? "1.25rem" : "1rem"};
  color: #191919;
`;

export const TitleRow1 = styled.div`
  align-items: center;
  display: flex;
  width: 100%;
  height: 3rem;
  flex-wrap: wrap;
`;

export const TitleRow2 = styled.div`
  align-items: center;
  display: flex;
`;

export const AttributesContainer = styled.div<{ resxProps?: responsiveProps }>`
  align-items: center;
  display: flex;
  justify-content: space-evenly;
  ${p => {
    if (p.resxProps?.isTabletOrMobile) {
      return "";
    } else {
      return "margin-left: 1rem;margin-right: 1rem;"
    }
  }}
`;

export const AttributeContainer = styled.div`
  margin-right: .5rem;
`;

export const GenresContainer = styled.div`
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  margin-bottom: .25rem;
  margin-left: 2rem;
`;

export const MediaRatingWrapper = styled.div`
  margin-left: 1rem;
`;