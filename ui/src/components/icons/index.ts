import { Github } from "@emotion-icons/boxicons-logos/Github";
import { Expand } from "@emotion-icons/boxicons-regular/Expand";
import { Medal } from "@emotion-icons/boxicons-regular/Medal";
import { ChevronDownCircle } from "@emotion-icons/boxicons-solid/ChevronDownCircle";
import { ChevronUpCircle } from "@emotion-icons/boxicons-solid/ChevronUpCircle";
import { MinusCircle } from "@emotion-icons/boxicons-solid/MinusCircle";
import { PlusCircle } from "@emotion-icons/boxicons-solid/PlusCircle";
import { User } from "@emotion-icons/boxicons-solid/User";
import { EmotionIcon } from '@emotion-icons/emotion-icon';
import { ArrowIosUpwardOutline } from "@emotion-icons/evaicons-outline/ArrowIosUpwardOutline";
import { ArrowheadDown } from "@emotion-icons/evaicons-solid/ArrowheadDown";
import { ArrowheadUp } from "@emotion-icons/evaicons-solid/ArrowheadUp";
import { Imdb } from "@emotion-icons/fa-brands/Imdb";
import { Crown } from "@emotion-icons/fa-solid/Crown";
import { ArrowRightCircle } from "@emotion-icons/feather/ArrowRightCircle";
import { Check } from "@emotion-icons/feather/Check";
import { ChevronDown } from "@emotion-icons/feather/ChevronDown";
import { ChevronLeft } from "@emotion-icons/feather/ChevronLeft";
import { ChevronRight } from "@emotion-icons/feather/ChevronRight";
import { ChevronUp } from "@emotion-icons/feather/ChevronUp";
import { Clock } from "@emotion-icons/feather/Clock";
import { Compass } from "@emotion-icons/feather/Compass";
import { ExternalLink } from "@emotion-icons/feather/ExternalLink";
import { Hash } from '@emotion-icons/feather/Hash';
import { HelpCircle } from "@emotion-icons/feather/HelpCircle";
import { Image } from "@emotion-icons/feather/Image";
import { Maximize2 } from "@emotion-icons/feather/Maximize2";
import { Menu } from "@emotion-icons/feather/Menu";
import { Minus } from "@emotion-icons/feather/Minus";
import { Search } from "@emotion-icons/feather/Search";
import { Tv } from "@emotion-icons/feather/Tv";
import { Video } from "@emotion-icons/feather/Video";
import { X } from "@emotion-icons/feather/X";
import { Plus } from "@emotion-icons/heroicons-solid/Plus";
import { ChevronRight as ChevronRightSolid } from "@emotion-icons/material-rounded/ChevronRight";
import { Star } from "@emotion-icons/material/Star";
import { StarBorder } from "@emotion-icons/material/StarBorder";
import { StarHalf } from "@emotion-icons/material/StarHalf";
import { Movie2 } from "@emotion-icons/remix-line/Movie2";
import emotion from "@emotion/styled";


export const MinusIcon = emotion(Minus)`
  color: red;
`;

export const ArrowDownIcon = withEmotion(ChevronDown);
export const ArrowUpIcon = withEmotion(ChevronUp);
export const ChevronLeftIcon = withEmotion(ChevronLeft);
export const ChevronRightIcon = withEmotion(ChevronRight);
export const ChevronRightSolidIcon = withEmotion(ChevronRightSolid);
export const CloseIcon = withEmotion(X);
export const CheckIcon = emotion(Check)`
  color: #fff;
`;
export const ClockIcon = emotion(Clock)`
  color: #000;
`;
export const ImageIcon = withEmotion(Image);
export const UserIcon = withEmotion(User);
export const HashIcon = withEmotion(Hash);
export const CrownIcon = withEmotion(Crown);
export const MenuIcon = withEmotion(Menu);
export const ArrowHeadDownIcon = withEmotion(ArrowheadDown);
export const ArrowHeadUpIcon = withEmotion(ArrowIosUpwardOutline);
export const ViewIcon = withEmotion(Expand);
export const StarHalfIcon = withEmotion(StarHalf);
export const StarIcon = withEmotion(Star);
export const StarBorderIcon = withEmotion(StarBorder);
export const Maximize2Icon = withEmotion(Maximize2);
export const PlusIcon = withEmotion(Plus);
export const ExpandIcon = withEmotion(Expand);
export const GithubIcon = withEmotion(Github);
export const CompassIcon = withEmotion(Compass);
export const SearchIcon = withEmotion(Search);
export const CameraIcon = withEmotion(Video);
export const TvIcon = withEmotion(Tv);
export const HelpCircleIcon = withEmotion(HelpCircle);
export const ArrowRightIcon = withEmotion(ArrowRightCircle);
export const CaretDownIcon = withEmotion(ArrowheadDown);
export const CaretUpIcon = withEmotion(ArrowheadUp);
export const ImdbIcon = withEmotion(Imdb);
export const ExternalIcon = withEmotion(ExternalLink);
export const MedalIcon = withEmotion(Medal);
export const Movie2Icon = withEmotion(Movie2);
export const PlusCircleIcon = withEmotion(PlusCircle);
export const MinusCircleIcon = withEmotion(MinusCircle);
export const ChevronDownCircleIcon = withEmotion(ChevronDownCircle);
export const ChevronUpCircleIcon = withEmotion(ChevronUpCircle);

function withEmotion(icon: EmotionIcon) {
  return emotion(icon) <{ color?: string }>`
    color: ${p => p.color};
  `;
};