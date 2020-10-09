import emotion from '@emotion/styled';

export const DetailsRatingWrapper = emotion.div<{
  isTabletOrMobile?: boolean;
  rating?: number;
}>`
  align-items: center;
  border-radius: 0.2rem;
  border: 1px solid #ccc;
  display: flex;
  height: 100%;
  height: ${(p) => (p.isTabletOrMobile ? '2rem' : '2rem')};
  justify-content: center;
  min-width: ${(p) => (p.isTabletOrMobile ? '2.5rem' : '2.5rem')};
  ${({rating}) => {
    if (!rating) return '#fff';

    let style = '';
    let color = '#161616';

    if (rating <= 5) {
      style = 'background-color: #AD8A56';
      color = '#fff';
    } else if (rating < 8) {
      style = 'background-color: #D7D7D7';
    } else {
      style = 'background-color: #ffd700';
    }

    return `${style};
    & span {
      color: ${color}
    }`;
  }};
`;

export const DetailsRatingValue = emotion.span<{isTabletOrMobile?: boolean}>`
  font-family: 'Poppins';
  font-size: ${(p) => (p.isTabletOrMobile ? '1.2rem' : '1.25rem')};
  font-weight: 400;
  height: 100%;
  display: flex;
  align-items: center;
`;
