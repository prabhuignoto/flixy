import emotion from "@emotion/styled";

export const LogoWrapper = emotion.div`
  align-items: center;
  display: flex;
  justify-content: center;
  padding: .1rem;
  user-select: none;
`;

export const LogoText = emotion.div`
  border-radius: .25rem;
  color: #d0d0d0;
  font-family: Poppins;
  font-size: 1.75rem;
  font-weight: 400; 
  position: relative;
  text-transform: capitalize;
`;

export const LogoIcon = emotion.span`
  align-items: center;
  display: flex;
  height: 100%;
  margin-right: .5rem;
  width: 2rem;

  & svg {
    width: 100%;
    height: 100%;
    fill: #464646;
  }
`;

export const Trademark = emotion.span`
  font-size: .9rem;
  vertical-align: text-top;
`