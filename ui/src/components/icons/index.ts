import styled from "styled-components";

import { PlusCircle } from "@styled-icons/boxicons-solid/PlusCircle";
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

export const MinusIcon = styled(Minus)`
  color: red;
`;

export const ArrowDownIcon = styled(ChevronDown) <{ color?: string }>`
  color: ${p => p.color ? p.color : "#cc0000"};
`;

export const ArrowUpIcon = styled(ChevronUp) <{ color?: string }>`
  color: ${p => p.color ? p.color : "#cc0000"};
`;

export const ChevronLeftIcon = styled(ChevronLeft) <{ color?: string }>`
  color: ${p => p.color ? p.color : "#bdbdbd"};
`;
export const ChevronRightIcon = styled(ChevronRight) <{ color?: string }>`
  color: ${p => p.color ? p.color : "#bdbdbd"};
`;

export const CloseIcon = styled(X) <{ color?: string }>`
  color: ${p => p.color};
`;

export const CheckIcon = styled(Check)`
  color: #fff;
`;

export const ClockIcon = styled(Clock)`
  color: #000;
`;

export const ImageIcon = styled(Image) <{ color?: string }>`
  color: ${p => p.color};
`;

export const UserIcon = styled(User) <{ color?: string }>``;

export const ImdbIcon = styled(Imdb) <{ color?: string }>`
  color: ${p => p.color}
`;

export const HashIcon = styled(Hash) <{ color?: string }>`
  color: ${p => p.color};
`;

export const CrownIcon = styled(Crown) <{ color?: string }>`
  color: ${p => p.color};
`;

export const MenuIcon = styled(Menu) <{ color?: string }>`
  color: ${p => p.color};
`;

export const ArrowHeadDownIcon = styled(ArrowIosDownwardOutline) <{ color?: string }>`
  color: ${p => p.color};
`;

export const ArrowHeadUpIcon = styled(ArrowIosUpwardOutline) <{ color?: string }>`
  color: ${p => p.color};
`;

export const ViewIcon = styled(Expand) <{ color?: string }>`
  color: ${p => p.color};
`;

export const StarHalfIcon = styled(StarHalf) <{ color?: string }>`
  color: ${p => p.color};
`;

export const StarIcon = styled(Star) <{ color?: string }>`
  color: ${p => p.color};
`;

export const StarBorderIcon = styled(StarBorder) <{ color?: string }>`
  color: ${p => p.color};
`;

export const Maximize2Icon = styled(Maximize2) <{ color?: string }>`
  color: ${p => p.color};
`;

export const PlusIcon = styled(Plus) <{ color?: string }>`
  color: ${p => p.color};
`;

export const ExpandIcon = styled(Expand) <{ color?: string }>`
  color: ${p => p.color};
`;

export const GithubIcon = styled(Github)<{color?: string}>`
  color: ${p => p.color};
`
