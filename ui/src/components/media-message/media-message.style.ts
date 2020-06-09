import styled from 'styled-components';
import { responsiveProps } from '../../effects/useResponsive';

export const MediaMessageWrapper = styled.div`
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const MediaMessageText = styled.span<{ resx?: responsiveProps }>`
  font-family: "Poppins";
  font-weight: 400;
  ${p => p.resx?.isBigScreen ? "font-size: 1.75rem" : "font-size: 1.2rem"};
  color: #464646;
  white-space: pre-wrap;
  text-align: justify;
`;

export const MediaMessageIcon = styled.span<{ resx?: responsiveProps }>`
margin-right: .5rem;
${
  p => p.resx?.isBigScreen ? `
  width: 2rem;
  height: 2rem;
`:
    `
  width: 1.5rem;
  height: 1.5rem;
`} `;