import styled from "styled-components";

const Font = styled.div`
  font-family: "Poppins";
`;

export const AttributeWrapper = styled(Font)`
  align-items: center;
  background: #2a2a2a;
  border-radius: 3px;
  /* box-shadow: 0 0.5px 0 0 #000, 0 1px 2px 0 #000; */
  display: flex;
  height: 1.75rem;
  justify-content: flex-start;
  min-width: 7rem;
`;

export const AttributeLabel = styled.span`
  align-items: center;
  color: #fff;
  display: flex;
  font-size: .85rem;
  font-weight: 400;
  justify-content: flex-start;
  padding-left: .5rem;
  text-align: center;
  & span {
    margin-right: .4rem;
  }
`;

export const AttributeValue = styled.span`
  align-items: center;
  background-color: rgba(204,0,0,0.8);
  border-bottom-right-radius: 3px;
  border-top-right-radius: 3px;
  /* box-shadow: inset 0 0 10px 1px rgba(0,0,0,0.35); */
  color: #fff;
  display: flex;
  font-size: .85rem;
  font-weight: 300;
  height: 100%;
  margin-left: auto;
  padding: 0 .5rem;
  white-space: nowrap;
`;

export const IconWrapper = styled.span`
  display: flex;
  height: 29px;
  width: 20px;
  & svg {
    width: 100%;
  }
`