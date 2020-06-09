import styled from 'styled-components';
import { responsiveProps } from '../../effects/useResponsive';

export const MediaMessageWrapper = styled.div`
  margin: 0 auto;
`;

export const MediaMessageText = styled.span<{ resx?: responsiveProps }>`
  font-family: "Poppins";
  font-weight: 400;
  ${p => p.resx?.isBigScreen ? "font-size: 1.75rem": "font-size: 1.2rem"};
  color: #464646;
  white-space: pre-wrap;
  text-align: justify;
`;

export const MediaMessageIcon = styled.span<{ resx?: responsiveProps }>`
${
  p => p.resx?.isBigScreen ? `
  width: 1.5rem;
  height: 1.5rem;
`:
    `
  width: 1rem;
  height: 1rem;
`} `;