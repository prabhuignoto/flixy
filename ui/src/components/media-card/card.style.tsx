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
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  border-radius: 0.1rem;
  height: 100%;
  width: 200px;
  cursor: pointer;
  position: relative;
  border: ${(p) =>
    !p.isLoadingCard ? ".1rem solid black;" : ".25rem solid black"};
  ${(p) =>
    p.isLoadingCard
      ? "background: linear-gradient(358deg, #000000, #4b4848);"
      : ""};
  ${(p) =>
    p.selected &&
    `&::before {
    content: '';
    display: block;
    position: absolute;
    border: .1rem solid rgba(204,0,0,0.95);
    left: -.5rem;
    right: 0;
    margin-left: auto;
    margin-right: auto;
    top: 50%;
    transform: translateY(-50%);
    height: 100%;
    width: 100%;
    padding: .5rem;
    border-radius: .1rem;
  }`};
  ${(p) =>
    p.isLoadingCard
      ? css`
        `
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

export const CardCheckedWrapper = styled.div`
  width: 2rem;
  height: 2rem;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: 0;
  right: 0;
  margin-left: auto;
  margin-right: auto;
  background: rgba(204, 0, 0, 0.95);
  border-radius: 50%;
`;

export const ImageIconWrapper = styled.div`
  width: 2rem;
  height: 2rem;
`;
