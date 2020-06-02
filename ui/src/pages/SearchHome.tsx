import React from "react";
import MediaSearchBox from "../components/media-search-box/media-searchbox";
import styled from "styled-components";
import useResponsive, { responsiveProps } from "../effects/useResponsive";
import MediaToggle from "../components/media-toggle/media-toggle";

const SearchHomeWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

const MediaSearchBoxWrapper = styled.div<{ resx?: responsiveProps }>`
  width: ${(p) => (p.resx?.isBigScreen ? "35%" : "50%")};
  height: 3.25rem;
  margin-top: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const SearchOptionToggle = styled.div`
  width: 250px;
  height: 3rem;
  margin-left: 2rem;
`;

const SearchHome: React.FunctionComponent<{}> = () => {
  const props = useResponsive();

  return (
    <SearchHomeWrapper>
      <MediaSearchBoxWrapper resx={props}>
        <MediaSearchBox onSearch={() => {}}></MediaSearchBox>
        <SearchOptionToggle>
          <MediaToggle
            options={[
              { label: "movies", value: "movies" },
              {
                label: "television",
                value: "television",
              },
            ]}
          />
        </SearchOptionToggle>
      </MediaSearchBoxWrapper>
    </SearchHomeWrapper>
  );
};

export default SearchHome;
