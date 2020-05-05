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

export const PlusIcon = styled(Plus)`
  color: red;
`;

export const MinusIcon = styled(Minus)`
  color: red;
`;

export const ArrowDownIcon = styled(ChevronDown)`
  color: #cc0000;
`;

export const ArrowUpIcon = styled(ChevronUp)`
  color: #cc0000;
`;

export const ChevronLeftIcon = styled(ChevronLeft)`
  color: #cc0000;
`;
export const ChevronRightIcon = styled(ChevronRight)`
  color: #cc0000;
`;

export const CloseIcon = styled(X)`
  color: #cc0000;
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