import styled, { css } from "styled-components";
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
  align-items: center;
  border-radius: 0.1rem;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
  position: relative;
  width: 180px;
  border: ${(p) =>
    !p.isLoadingCard ? ".1rem solid black;" : ".25rem solid black"};
  ${(p) =>
    p.isLoadingCard
      ? "background: linear-gradient(358deg, #000000, #4b4848);"
      : ""};
  ${(p) =>
    p.selected &&
    `&::before {
    border-radius: .1rem;
    border: .1rem solid rgba(204,0,0,0.95);
    content: '';
    display: block;
    height: 100%;
    left: -.5rem;
    margin-left: auto;
    margin-right: auto;
    padding: .5rem;
    position: absolute;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
    width: 100%;
  }`};
  ${(p) =>
    p.isLoadingCard
      ? css`
        `
      : ""};
`;

export const CardTitle = styled.div`
  color: white;
  font-family: "Poppins";
  font-size: 0.9rem;
  font-weight: 300;
  margin: 0 auto;
  overflow: hidden;
  text-align: center;
  text-overflow: ellipsis;
  white-space: nowrap;
  width: 90%;
`;

export const CardHeader = styled.div`
  align-items: flex-start;
  display: flex;
  height: 10%;
  width: 100%;
`;

export const CardFooter = styled.div`
  align-items: center;
  display: flex;
  height: 10%;
  width: 100%;
`;

export const CardYear = styled.span`
  color: white;
  font-family: "Poppins";
  font-size: 0.8rem;
  font-weight: 300;
`;

export const CardCheckedWrapper = styled.div`
  background: rgba(204, 0, 0, 0.95);
  border-radius: 50%;
  height: 2rem;
  left: 0;
  margin-left: auto;
  margin-right: auto;
  position: absolute;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  width: 2rem;
`;

export const ImageIconWrapper = styled.div`
  height: 2rem;
  width: 2rem;
`;
