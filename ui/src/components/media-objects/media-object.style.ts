import styled from "styled-components";
import { animated } from "react-spring";

export const MediaObject = styled(animated.div)`
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 7rem;
`;

export const ObjectImage = styled(animated.img)<{ loaded?: boolean }>`
  border-radius: .25rem;
  display: ${p => p.loaded ? "block" : "none"};
  margin-top: auto;
  max-height: 80%;
  max-width: 100%;
  object-fit: contain;
`;

export const FallbackImage = styled.div<{ failed?: boolean }>`
  align-items: center;
  display: flex;
  height: 80%;
  justify-content: center;
  width: 5rem;
  & svg {
    width: 3rem;
    height: 3rem;
  }
  background: #2a2a2a;
  border-radius: .25rem;
  margin-top: auto;
`;

export const ObjectName = styled.span`
  color: #fff;
  font-family: "Poppins";
  font-size: .75rem;
  font-weight: 300;
  margin-top: auto;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  width: 100%;
`;