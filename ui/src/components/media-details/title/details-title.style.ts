import styled from "styled-components";

const Font = styled.div`
  font-family: "Poppins";
`

export const Title = styled(Font)`
  font-weight: 400;
  font-size: 2rem;
  color: #fff;
  text-align: left;
`;

export const TitleWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-top: 1rem;
`;

export const DetailsRatingContainer = styled.div`
  margin-right: 1rem;
`;