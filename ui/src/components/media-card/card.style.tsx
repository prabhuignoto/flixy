import styled from "styled-components";
import { CardSize } from "../../models/CardSize";
import { animated } from "react-spring";

export const CardContainer = styled(animated.div)<{
  selected?: boolean;
  opacity?: number;
  height?: number;
  size?: CardSize;
  hide?: number;
}>`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  border-radius: 0.1rem;
  height: 100%;
  width: 200px;
  cursor: pointer;
  border: 1px solid rgba(127,0,0,.7);
  border: 1px solid rgba(226,226,226,0.25);
  position: relative;
  ${p => p.hide ? 'border: 1px solid red' : ''};
`;

export const CardImage = styled.img<{hide?: boolean}>`
  height: auto;
  width: auto;
`;

export const CardImageWrapper = styled(animated.div)<{ selected?: boolean }>`
  height: 100%;
  display: flex;
  align-items: ${(p) => (p.selected ? "flex-start" : "center")};
  justify-content: center;
`;

export const CardTitle = styled.div`
  font-family: "Poppins";
  font-weight: 300;
  font-size: .9rem;
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
  font-size: .8rem;
  color: white;
`;

export const CardRating = styled.span`
  font-family: "Poppins";
  font-weight: 500;
  font-size: 1rem;
  background: rgba(204,0,0,0.95);
  color: #fff;
  margin-left: auto;
  min-width: 2rem;
  height: 1.75rem;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: .2rem;
  margin-right: .2rem;
  position: absolute;
  top: .85rem;
  right: -.5rem;
  box-shadow: -1px 1px 4px 2px rgba(0,0,0,0.5);
  border-top-left-radius: .3rem;
  border-bottom-left-radius: .3rem;
`;
