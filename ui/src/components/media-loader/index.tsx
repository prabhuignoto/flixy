import styled from "styled-components";
import React from "react";
import {useSpring, animated} from "react-spring";

enum LoaderSize {
  small = "SMALL",
  large = "LARGE",
}

const Wrapper = styled(animated.div)`
  height: 100%;
  width: 100%;
  position: relative;
  background: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Loader: React.FunctionComponent<{ size?: LoaderSize }> = ({ size }) => {
  const wh = size === LoaderSize.small ? 38 : 45;
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
        stroke="#fff"
      >
        <g fill="none" fill-rule="evenodd">
          <g transform="translate(1 1)" stroke-width="2">
            <circle stroke-opacity=".5" cx="18" cy="18" r="18" />
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
