import emotion from '@emotion/styled';
import {responsiveProps} from '../../effects/useResponsive';

export const Button = emotion.button<{size?: string; resx: responsiveProps}>`
  background: none;
  border: 0;
  cursor: pointer;
  display: flex;
  outline: none;
  padding: 0;
  & svg {
    width: 100%;
    height: 100%;
  }
  ${({size, resx}) => {
    let style;
    switch (size) {
      case 'small':
        style = 'min-width: 2rem; height: 2rem;';
        break;
      case 'medium':
        style = resx.isBigScreen
          ? `
          width: 3rem;
          height: 2rem;`
          : `
          width: 1.5rem;
          height: 1.5rem;
          `;
        break;
      case 'large':
        style = `min-width: 4rem; height: 3rem;`;
        break;
    }
    return style;
  }}
`;
