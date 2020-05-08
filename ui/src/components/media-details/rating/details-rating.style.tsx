import styled from "styled-components";

export const DetailsRatingWrapper = styled.div<{ rating?: number }>`
  align-items: center;
  border-radius: 0.2rem;
  box-shadow: inset 0 0 6px 3px rgba(0, 0, 0, 0.25);
  display: flex;
  height: 100%;
  justify-content: center;
  min-width: 3rem;
  height: 2.5rem;
  margin-top:.5rem;
  ${({ rating }) => {
    if (!rating) return "#fff";

    let style = "";
    let color = "#161616";

    if (rating <= 5) {
      style = "background-color: #AD8A56";
      color = "#fff";
    } else if (rating < 8) {
      style = "background-color: #D7D7D7";
    } else {
      style = "background-color: #ffd700";
    }

    return `${style};
    & span {
      color: ${color}
    }`;
  }};
`;

export const DetailsRatingValue = styled.span`
  font-family: "Poppins";
  font-size: 1.75rem;
  font-weight: 400;
  height: 100%;
  display: flex;
  align-items: center;
`;
