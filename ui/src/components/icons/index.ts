import styled from "styled-components";

import { Minus } from "@styled-icons/feather/Minus";
import { ChevronDown } from "@styled-icons/feather/ChevronDown";
import { ChevronUp } from "@styled-icons/feather/ChevronUp";
import { X } from "@styled-icons/feather/X";
import { Check } from "@styled-icons/feather/Check";
import { Clock } from "@styled-icons/feather/Clock";
import { Image } from "@styled-icons/feather/Image";
import { User } from "@styled-icons/feather/User";
import { Imdb } from "@styled-icons/fa-brands/Imdb";
import { Hash } from '@styled-icons/feather/Hash';
import { Crown } from "@styled-icons/fa-solid/Crown";
import { Menu } from "@styled-icons/feather/Menu";
import { ChevronLeft } from "@styled-icons/feather/ChevronLeft";
import { ChevronRight } from "@styled-icons/feather/ChevronRight";
import { ArrowIosUpwardOutline } from "@styled-icons/evaicons-outline/ArrowIosUpwardOutline";
import { ArrowIosDownwardOutline } from "@styled-icons/evaicons-outline/ArrowIosDownwardOutline";
import { Expand } from "@styled-icons/boxicons-regular/Expand";
import { StarHalf } from "@styled-icons/material/StarHalf";
import { Star } from "@styled-icons/material/Star";
import { StarBorder } from "@styled-icons/material/StarBorder";
import { Maximize2 } from "@styled-icons/feather/Maximize2";
import { Plus } from "@styled-icons/heroicons-solid/Plus";
import { Github } from "@styled-icons/boxicons-logos/Github";
import { Search } from "@styled-icons/feather/Search";
import { Compass } from "@styled-icons/feather/Compass";
import { Video } from "@styled-icons/feather/Video";
import { Tv } from "@styled-icons/feather/Tv";
import { ChevronRight as ChevronRightSolid } from "@styled-icons/material-rounded/ChevronRight";
import { HelpCircle } from "@styled-icons/feather/HelpCircle";
import { StyledIcon } from '@styled-icons/styled-icon';
import { ArrowRight } from "@styled-icons/feather/ArrowRight";
import { CaretDown } from "@styled-icons/boxicons-regular/CaretDown";
import { CaretUp } from "@styled-icons/boxicons-regular/CaretUp";

export const MinusIcon = styled(Minus)`
  color: red;
`;

export const ArrowDownIcon = withStyled(ChevronDown);
export const ArrowUpIcon = withStyled(ChevronUp);
export const ChevronLeftIcon = withStyled(ChevronLeft);
export const ChevronRightIcon = withStyled(ChevronRight);
export const ChevronRightSolidIcon = withStyled(ChevronRightSolid);
export const CloseIcon = withStyled(X);
export const CheckIcon = styled(Check)`
  color: #fff;
`;
export const ClockIcon = styled(Clock)`
  color: #000;
`;
export const ImageIcon = withStyled(Image);
export const UserIcon = withStyled(User);
export const HashIcon = withStyled(Hash);
export const CrownIcon = withStyled(Crown);
export const MenuIcon = withStyled(Menu);
export const ArrowHeadDownIcon = withStyled(ArrowIosDownwardOutline);
export const ArrowHeadUpIcon = withStyled(ArrowIosUpwardOutline);
export const ViewIcon = withStyled(Expand);
export const StarHalfIcon = withStyled(StarHalf);
export const StarIcon = withStyled(Star);
export const StarBorderIcon = withStyled(StarBorder);
export const Maximize2Icon = withStyled(Maximize2);
export const PlusIcon = withStyled(Plus);
export const ExpandIcon = withStyled(Expand);
export const GithubIcon = withStyled(Github);
export const CompassIcon = withStyled(Compass);
export const SearchIcon = withStyled(Search);
export const CameraIcon = withStyled(Video);
export const TvIcon = withStyled(Tv);
export const HelpCircleIcon = withStyled(HelpCircle);
export const ArrowRightIcon = withStyled(ArrowRight);
export const CaretDownIcon = withStyled(CaretDown);
export const CaretUpIcon = withStyled(CaretUp);


function withStyled(icon: StyledIcon) {
  return styled(icon) <{ color?: string }>`
    color: ${p => p.color};
  `;
}