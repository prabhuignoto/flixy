import styled from "styled-components";
import React from "react";
import { useSpring, animated } from "react-spring";

export enum LoaderSize {
  small = "SMALL",
  large = "LARGE",
}

const Wrapper = styled(animated.div)`
  align-items: center;
  justify-content: center;
  background: transparent;
  display: flex;
  height: 100%;
  justify-content: center;
  /* position: absolute; */
  width: 100%;
`;

const Loader: React.FunctionComponent<{
  size?: LoaderSize;
  style?: any;
  id?: string | number;
}> = ({ size, style }) => {
  const wh = size === LoaderSize.small ? 25 : 30;
  return (
    <Wrapper style={style}>
      <svg
        height={wh}
        viewBox="0 -87 432 432"
        width={wh}
        xmlns="http://www.w3.org/2000/svg"
        fill="#515151"
      >
        <animate
          attributeType="XML"
          attributeName="fill"
          values="#515151;#ccc;#515151;#ccc"
          dur="3s"
          repeatCount="indefinite"
        />
        <path d="m278.90625 0h-248.90625c-16.5625.0195312-29.9804688 13.4375-30 30v197.421875c.0195312 16.5625 13.4375 29.980469 30 30h248.90625c16.558594-.019531 29.980469-13.4375 30-30v-197.421875c-.019531-16.5625-13.441406-29.9804688-30-30zm0 0" />
        <path d="m328.90625 169.800781 103.09375 56.285157v-194.105469l-103.09375 56.285156zm0 0" />
      </svg>
    </Wrapper>
  );
};

export default Loader;
