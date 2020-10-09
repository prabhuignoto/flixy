import emotion from "@emotion/styled";
import { responsiveProps } from "../../../effects/useResponsive";

const Font = emotion.div`
  font-family: "Poppins";
`;

export const Title = emotion(Font)`
  color: #fff;
  display: flex;
  flex-direction: column;
  font-weight: 400;
  overflow: hidden;
  text-align: left;
  width: 100%;
`;

export const TitleWrapper = emotion.div`
  align-items: center;
  display: flex;
  height: 100%;
  justify-content: flex-start;
  margin-top: 1rem;
  padding-left: 1rem;
  width: 95%;
`;

export const DetailsRatingContainer = emotion.div`
  margin-right: 1rem;
`;

export const TitleYear = emotion.span<{ resxProps: responsiveProps }>`
  align-items: center;
  color: rgba(204,0,0,0.85);
  display: flex;
  font-size: ${p => p.resxProps.isBigScreen ? "1.1rem" : ".85rem"};
  font-weight: 500;
  height: 100%;
  margin-left: .5rem;
`;

export const TitleText = emotion.span<{ resxProps: responsiveProps }>`
  align-items: center;
  color: #191919;
  display: flex;
  font-family: Poppins;
  font-size: ${p => p.resxProps.isBigScreen ? "1.25rem" : ".9rem"};
  font-weight: 500;
  height: 100%;
  max-width: 85%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const TitleRow1 = emotion.div<{ resx?: responsiveProps }>`
  align-items: ${p => p.resx?.isBigScreen ? "center" : "flex-start"};
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  flex-direction: ${p => p.resx?.isBigScreen ? "row" : "column"};
`;

export const TitleRow2 = emotion.div`
  align-items: center;
  display: flex;
`;

export const AttributesContainer = emotion.div<{ resxProps?: responsiveProps }>`
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

export const AttributeContainer = emotion.div`
  margin-right: .5rem;
`;

export const GenresContainer = emotion.div<{ resx: responsiveProps }>`
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  margin-left: ${p => p.resx.isBigScreen ? "3rem" : ""};
`;

export const MediaRatingWrapper = emotion.div`
  margin-left: 1rem;
`;

export const ImdbLinkContainer = emotion.div<{ resx: responsiveProps }>`
  height: ${p => p.resx.isBigScreen ? "1.75rem" : "1.5rem"};
`;

export const TextAndRating = emotion.div<{ resx?: responsiveProps }>`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-bottom: ${p => p.resx?.isBigScreen ? "" : ".5rem"};
  margin-right: 2rem;
`;