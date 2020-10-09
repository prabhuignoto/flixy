import emotion from "@emotion/styled";
import { responsiveProps } from "../../../effects/useResponsive";

export const Title = emotion.div`
  padding-left: 5rem;
`;

export const Box1 = emotion.div`
  display: flex;
  align-items: flex-start;
  width: 100%;
  margin-bottom: .25rem;
`;

export const Box2 = emotion.div`
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin-top: .5rem;
  width: 100%;
`;

export const DetailsHomeWrapper = emotion.div`
  width: 100%;
`;

export const CastAndCrewWrapper = emotion.div<{ resxProps?: responsiveProps }>`
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: space-around;
  margin-top: 2rem;
  flex-direction: ${p => p.resxProps?.isBigScreen ? "row" : "column"}
`;

export const CastAndCrewContainer = emotion.div<{ resxProps?: responsiveProps }>`
  width: ${({ resxProps }) => {
    const { isTabletOrMobile, isBigScreen, isDesktopOrLaptop } = resxProps as responsiveProps;
    if (isTabletOrMobile) {
      return "100%";
    } else if (isDesktopOrLaptop && !isBigScreen) {
      return "100%";
    } else {
      return "45%";
    }
  }
  };
`;

export const Overview = emotion(Title) <{ resxProps?: responsiveProps }>`
  color: #191919;
  font-family: "Poppins";
  font-size: ${p => p.resxProps?.isBigScreen ? ".95rem" : ".85rem"};
  font-weight: 400;
  margin: .25rem 0;
  width: 95%;
  padding-left: 1rem;
  text-align: left;
`;

export const PostersWrapper = emotion.div`
  position: relative;
  display: flex;
  align-items: center;
`;

export const PostersAndProduction = emotion.div<{ resxProps?: responsiveProps }>`
  display: flex;
  flex-direction: column;
  width: ${p => p.resxProps?.isBigScreen ? "55%" : "100%"};
`;

export const ProductionWrapper = emotion.div`
`;
