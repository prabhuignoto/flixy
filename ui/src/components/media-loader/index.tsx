import styled from "styled-components";
import React from "react";
import {useSpring, animated} from "react-spring";

export enum LoaderSize {
  small = "SMALL",
  large = "LARGE",
}

const Wrapper = styled(animated.div)`
  align-items: center;
  background: transparent;
  display: flex;
  height: 100%;
  justify-content: center;
  position: relative;
  width: 100%;
`;

const Loader: React.FunctionComponent<{ size?: LoaderSize }> = ({ size }) => {
  const wh = size === LoaderSize.small ? 25 : 45;
  const props = useSpring({
    opacity: 1,
    from: {
      opacity: 0
    },
  });
  return (
    <Wrapper style={props}>
      <svg
        width={wh}
        height={wh}
        viewBox="0 0 38 38"
        xmlns="http://www.w3.org/2000/svg"
        stroke="#979797"
      >
        <g fill="none" fillRule="evenodd">
          <g transform="translate(1 1)" strokeWidth="2">
            <circle strokeOpacity=".5" cx="18" cy="18" r="18" />
            <path d="M36 18c0-9.94-8.06-18-18-18">
              <animateTransform
                attributeName="transform"
                type="rotate"
                from="0 18 18"
                to="360 18 18"
                dur="1s"
                repeatCount="indefinite"
              />
            </path>
          </g>
        </g>
      </svg>
    </Wrapper>
  );
};

export default Loader;
