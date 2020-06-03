import React from "react";
import MediaSearchBox from "../components/media-search-box/media-searchbox";
import styled from "styled-components";
import useResponsive, { responsiveProps } from "../effects/useResponsive";
import MediaToggle, {
  MediaToggleOption,
} from "../components/media-toggle/media-toggle";
import SearchContainer from "../containers/search";
import { MediaType } from "../containers/models";

const SearchHomeWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
`;

const SearchResultsWrapper = styled.div`
  margin-top: 2rem;
  width: 95%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const MediaSearchBoxWrapper = styled.div<{ resx?: responsiveProps }>`
  width: ${(p) => (p.resx?.isBigScreen ? "35%" : "50%")};
  height: ${(p) => (p.resx?.isBigScreen ? "3.25rem" : "3rem")};
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
  const [term, setTerm] = React.useState("");
  const [type, setType] = React.useState(MediaType.MOVIES);

  const onSearch = React.useCallback((val: string) => {
    setTerm(val);
  }, []);

  const handleToggleSelection = (opt: MediaToggleOption) => {
    if (opt.value === "movies") {
      setType(MediaType.MOVIES);
    } else {
      setType(MediaType.TV);
    }
  };

  return (
    <SearchHomeWrapper>
      <MediaSearchBoxWrapper resx={props}>
        <MediaSearchBox onSearch={onSearch}></MediaSearchBox>
        <SearchOptionToggle>
          <MediaToggle
            options={[
              { label: "movies", value: "movies" },
              {
                label: "television",
                value: "television",
              },
            ]}
            onSelect={handleToggleSelection}
          />
        </SearchOptionToggle>
      </MediaSearchBoxWrapper>
      <SearchResultsWrapper>
        {term && (
          <>
            <SearchContainer type={type} query={term} key={term} />
          </>
        )}
      </SearchResultsWrapper>
    </SearchHomeWrapper>
  );
};

export default SearchHome;
