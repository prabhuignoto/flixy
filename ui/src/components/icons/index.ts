import styled from "styled-components";

import { Plus } from "@styled-icons/feather/Plus";
import { Minus } from "@styled-icons/feather/Minus";
import { ChevronDown } from "@styled-icons/feather/ChevronDown";
import { ChevronUp } from "@styled-icons/feather/ChevronUp";
import { ChevronLeft } from "@styled-icons/feather/ChevronLeft";
import { ChevronRight } from "@styled-icons/feather/ChevronRight";
import { X } from "@styled-icons/feather/X";
import { Check } from "@styled-icons/feather/Check";
import { Clock } from "@styled-icons/feather/Clock";
import { Image } from "@styled-icons/feather/Image";
import { User } from "@styled-icons/feather/User";
import { Imdb } from "@styled-icons/fa-brands/Imdb";
import { Hash } from '@styled-icons/feather/Hash';
import { Crown } from "@styled-icons/fa-solid/Crown";
import { Menu } from "@styled-icons/feather/Menu";
import { ArrowheadDown } from "@styled-icons/evaicons-solid/ArrowheadDown";
import { ArrowheadUp } from "@styled-icons/evaicons-solid/ArrowheadUp";
import { Expand } from "@styled-icons/boxicons-regular/Expand";

export const PlusIcon = styled(Plus)`
  color: red;
`;

export const MinusIcon = styled(Minus)`
  color: red;
`;

export const ArrowDownIcon = styled(ChevronDown)<{color?: string}>`
  color: ${p => p.color ? p.color : "#cc0000"};
`;

export const ArrowUpIcon = styled(ChevronUp)<{color?: string}>`
  color: ${p => p.color ? p.color : "#cc0000"};
`;

export const ChevronLeftIcon = styled(ChevronLeft)<{color?: string}>`
  color: ${p => p.color ? p.color : "#cc0000"};
`;
export const ChevronRightIcon = styled(ChevronRight)<{color?: string}>`
  color: ${p => p.color ? p.color : "#cc0000"};
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

export const ArrowHeadDownIcon = styled(ArrowheadDown) <{ color?: string }>`
  color: ${p => p.color};
`;

export const ArrowHeadUpIcon = styled(ArrowheadUp) <{ color?: string }>`
  color: ${p => p.color};
`;

export const ViewIcon = styled(Expand) <{ color?: string }>`
  color: ${p => p.color};
`;