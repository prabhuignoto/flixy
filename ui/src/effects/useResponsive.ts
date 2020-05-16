import { useMediaQuery } from "react-responsive";

export interface responsiveProps {
  isDesktopOrLaptop: boolean
  isBigScreen: boolean,
  isTabletOrMobile: boolean
}

export default function useResponsive(): responsiveProps {
  const isTabletOrMobile = useMediaQuery({ query: '(min-width: 768px) and (max-width: 1024px)' })
  const isDesktopOrLaptop = useMediaQuery({ query: '(min-width: 1025px) and (max-width: 1823px)' });
  const isBigScreen = useMediaQuery({ query: '(min-width: 1824px)' });

  return {
    isDesktopOrLaptop,
    isBigScreen,
    isTabletOrMobile
  }
}