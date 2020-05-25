import styled from "styled-components";

export const ViewBtnWrapper = styled.span`
  background: rgba(0,0,0,0.85);
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  font-weight: 500;
  height: 26px;
  left: 0;
  margin-left: auto;
  margin-right: auto;
  padding: 3px;
  position: absolute;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  width: 26px;
  /* box-shadow: inset 0 0 10px 4px rgba(0,0,0,0.25), 0 0 10px 4px rgba(0,0,0,0.25); */
  & svg {
    height: 100%;
    width: 100%;
  }
  padding: .5rem;
`;

export const Wrapper = styled.div`
  position: relative;
  margin: 0 .5rem;
`;