import styled from "styled-components";
import { animated } from "react-spring";

export const MediaObject = styled(animated.div)`
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 100%;
  margin-right: .5rem;
`;

export const ObjectImage = styled(animated.img)<{ loaded?: boolean }>`
  border-radius: .2rem;
  display: ${p => p.loaded ? "block" : "none"};
  margin-top: auto;
  max-height: 80%;
  max-width: 100%;
  object-fit: contain;
  box-shadow: 0 0 10px 5px;
`;

export const FallbackImage = styled.div<{ failed?: boolean }>`
  /* background: #2a2a2a; */
  /* width: 4.5rem; */
  align-items: center;
  border-radius: .25rem;
  display: flex;
  height: 80%;
  justify-content: center;
  margin-top: auto;
  & svg {
    width: 3rem;
    height: 3rem;
  }
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