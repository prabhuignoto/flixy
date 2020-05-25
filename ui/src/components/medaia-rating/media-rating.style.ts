import styled from 'styled-components';

export const MediaRatingWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-left: 3rem;
`;

export const StarIconWrapper = styled.span`
  width: 1.5rem;
  height: 1.5rem;
  margin-right: .25rem;
  display: flex;
  & svg {
    width: 100%;
    height: 100%;
  }
`;