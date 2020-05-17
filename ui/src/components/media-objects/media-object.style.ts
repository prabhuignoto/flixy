import styled from "styled-components";
import { animated } from "react-spring";

export const MediaObject = styled(animated.div)`
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 100%;
  margin: 0 .5rem;
  justify-content: center;
`;

export const ObjectImage = styled(animated.img)<{ loaded?: boolean }>`
  border-radius: .2rem;
  display: ${p => p.loaded ? "block" : "none"};
  max-height: 80%;
  max-width: 100%;
  object-fit: contain;
`;

export const FallbackImage = styled.div<{ failed?: boolean }>`
  align-items: center;
  border-radius: .25rem;
  display: flex;
  height: 80%;
  justify-content: center;
  margin-top: auto;
  & svg {
    height: 3rem;
    width: 3rem;
  }
`;

export const ObjectName = styled.span`
  color: #fff;
  font-family: "Poppins";
  font-size: .85rem;
  font-weight: 300;
  margin-top: auto;
  margin-bottom: .5rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  width: 100%;
  height: 10%;
`;