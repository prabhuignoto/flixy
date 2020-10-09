import emotion from "@emotion/styled";

export const MediaGridWrapper = emotion.section<{ newWidth?: number }>`
  align-items: center;
  border-radius: .25rem;
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
  position: relative;
  width: ${p => p.newWidth ? `${p.newWidth}px` : "96%"};
`;