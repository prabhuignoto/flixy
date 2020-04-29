import styled from "styled-components";

const Font = styled.div`
  font-family: "Poppins";
`;

export const RunTimeWrapper = styled(Font)`
  border-radius: 4px;
  box-shadow: inset 0 0 5px 1px rgba(0,0,0,0.35);
  display: flex;
  align-items: center;
  min-width: 7rem;
  background: #e9e9e9;
  height: 1.75rem;
  justify-content: flex-start;
`;

export const RunTimeLabel = styled.span`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  font-weight: 700;
  font-size: .85rem;
  margin-left: .1rem;
  & span {
    margin-left: .2rem;
  }
`;

export const RuntimeValue = styled.span`
  white-space: nowrap;
  margin-left: .25rem;
  font-size: .85rem;
  font-weight: 700;
  background:red;
  display: flex;
  color: #fff;
  align-items: center;
  padding: 0 .5rem;
  background-color: rgba(204,0,0,0.75);
  height: 100%;
  border-top-right-radius: 4px;
  border-bottom-right-radius: 4px;
`;

export const ClockIconWrapper = styled.span`
  width: 20px;
  height: 29px;
  display: flex;
  & svg {
    width: 100%;
  }
`