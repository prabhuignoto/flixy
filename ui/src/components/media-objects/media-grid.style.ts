import styled from "styled-components";

export const MediaGridWrapper = styled.section<{ newWidth?: number }>`
  align-items: center;
  background: #dbdbdb;
  border-radius: .25rem;
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
  position: relative;
  width: ${p => p.newWidth ? `${p.newWidth}px` : "96%" };
`;

export const Scroll = styled.div`
  background: #fff;
  height: 2.5rem;
  left: 0;
  margin-left: auto;
  margin-right: auto;
  /* position: absolute; */
  right: 0;
  width: 100%;

  & svg {
    width: 100%;
    height: 100%;
  }
`;

export const ScrollDown = styled(Scroll)`
  bottom: 0;
`
export const ScrollUp = styled(Scroll)`
  top: 0;
`