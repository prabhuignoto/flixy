import styled from "styled-components";

export const DetailsRatingWrapper = styled.div<{ rating?: number }>`
  align-items: center;
  border-radius: .2rem;
  box-shadow: inset 0 0 6px 3px rgba(0,0,0,0.25);
  display: flex;
  height: 1.75rem;
  justify-content: center;
  min-width: 2.5rem;
  padding: .1rem;
  background-color: ${({ rating }) => {
    if (!rating) return "#fff";

    if (rating <= 5) {
      return "#AD8A56";
    } else if (rating < 8) {
      return "#D7D7D7";
    } else {
      return "#ffd700";
    }
  }};
`;

export const DetailsRatingValue = styled.span`
  font-family: "Poppins";
  font-size: 1.25rem;
  color: #2a2a2a;
`;
