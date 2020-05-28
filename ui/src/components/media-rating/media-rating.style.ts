import styled from 'styled-components';
import { RatingSize } from './media-rating';

export const MediaRatingWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

export const StarIconWrapper = styled.span<{ size?: RatingSize }>`
  width: ${p => p.size === RatingSize.large ? "1.5rem" : "1rem"};
  height: ${p => p.size === RatingSize.large ? "1.5rem" : "1rem"};
  margin-right: .25rem;
  display: flex;
  & svg {
    width: 100%;
    height: 100%;
  }
`;