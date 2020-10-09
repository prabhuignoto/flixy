import emotion from "@emotion/styled";

export const ImdbLinkWrapper = emotion.div`
  border-radius: .2rem;
  height: 100%;
  background: #000;
  box-shadow: inset 0 0 4px 1px rgba(0,0,0,0.1);
`;

export const ImdbLink = emotion.a`
  text-decoration: none;
  font-family: Poppins;
  font-size: .9rem;
  font-weight: 500;
  color: #ffd700;
  padding:0;
  min-width: 2.5rem;
  height: 100%;
  display: block;
  display: flex;
  align-items: center;
  justify-content: center;

  & svg {
    width: 1rem;
    height: 100%;
    margin-left: .25rem;
  }

  & span {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 .5rem;
  }
`;