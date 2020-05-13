import React from "react";
import { useMediaQuery } from "react-responsive";

export interface responsiveProps {
  isDesktopOrLaptop: boolean
  isBigScreen: boolean,
  isTabletOrMobile: boolean
}

export default function useResponsive(): responsiveProps {
  const isTabletOrMobile = useMediaQuery({ query: '(min-width: 768px) and (max-width: 1024px)' })
  const isDesktopOrLaptop = useMediaQuery({ query: '(min-width: 1025px) and (max-width: 1280px)' });
  const isBigScreen = useMediaQuery({ query: '(min-width: 1281px)' });

  return {
    isDesktopOrLaptop,
    isBigScreen,
    isTabletOrMobile
  }
}