import styled, { keyframes } from "styled-components";
import { CardSize } from "../../models/CardSize";
import { animated } from "react-spring";

export const CardContainer = styled(animated.div)<{
  selected?: boolean;
  opacity?: number;
  height?: number;
  size?: CardSize;
  hide?: number;
  isLoadingCard?: number;
}>`
  display: flex;
  align-items: stretch;
  flex-direction: column;
  justify-content: stretch;
  border-radius: 0.1rem;
  height: 100%;
  width: 200px;
  cursor: pointer;
  position: relative;
  border: ${(p) => !p.isLoadingCard
      ? "1px solid rgba(226, 226, 226, 0.2);"
      : "1px solid black"};
  ${(p) =>
    p.isLoadingCard
      ? "background: linear-gradient(358deg, #000000, #4b4848);"
      : ""};
`;

export const CardTitle = styled.div`
  font-family: "Poppins";
  font-weight: 300;
  font-size: 0.9rem;
  color: white;
  white-space: nowrap;
  overflow: hidden;
  width: 90%;
  text-overflow: ellipsis;
  text-align: center;
  margin: 0 auto;
`;

export const CardHeader = styled.div`
  display: flex;
  align-items: flex-start;
  width: 100%;
  height: 10%;
`;

export const CardFooter = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 10%;
`;

export const CardYear = styled.span`
  font-family: "Poppins";
  font-weight: 300;
  font-size: 0.8rem;
  color: white;
`;
