import styled from "styled-components";

const Font = styled.div`
  font-family: "Poppins";
`;

export const Title = styled(Font)`
  color: #fff;
  display: flex;
  flex-direction: column;
  font-size: 1.5rem;
  font-weight: 400;
  overflow: hidden;
  text-align: left;
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
  margin-right: 1rem;
`;

export const TitleYear = styled.span`
  color: rgba(204,0,0,0.85);
  font-size: 1.5rem;
  margin-left: 1rem;
`;

export const TitleText = styled.span`
  max-width: 85%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const TitleRow1 = styled.div`
  align-items: center;
  display: flex;
  width: 100%;
`;

export const TitleRow2 = styled.div`
  align-items: center;
  display: flex;
  margin-top: 1rem;
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
  flex-wrap: wrap;
  margin-bottom: .25rem;
  margin-top: .25rem;
`;