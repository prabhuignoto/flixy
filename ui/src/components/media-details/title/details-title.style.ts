import styled from "styled-components";

const Font = styled.div`
  font-family: "Poppins";
`

export const Title = styled(Font)`
  color: #fff;
  font-size: 1.5rem;
  font-weight: 400;
  overflow: hidden;
  text-align: left;
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const TitleWrapper = styled.div`
  align-items: center;
  display: flex;
  justify-content: flex-start;
  margin-top: .5rem;
  width: 100%;
`;

export const DetailsRatingContainer = styled.div`
  margin-left: auto;
  padding-right: 3rem;
`;

export const TitleYear = styled.span`
  color: rgba(204,0,0,0.85);
  font-size: 1rem;
  margin-left: 1rem;
`;

export const TitleText = styled.span`
  max-width: 85%;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`;

export const TitleRow1 = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
`;

export const TitleRow2 = styled.div`
  display: flex;
  align-items: center;
`;

export const AttributesContainer = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-evenly;
  margin-left: auto;
  margin-right: 1rem;
  padding-left: 1.5rem;
`;

export const AttributeContainer = styled.div`
  margin-right: .75rem;
`;

export const GenresContainer = styled.div`
  align-items: center;
  display: flex;
  margin-bottom: .25rem;
  flex-wrap: wrap;
  margin-top: .25rem;
`;