import React from "react";
import MediaSearchBox from "../components/media-search-box/media-searchbox";
import styled from "styled-components";
import useResponsive, { responsiveProps } from "../effects/useResponsive";
import MediaToggle, {
  MediaToggleOption,
} from "../components/media-toggle/media-toggle";
import SearchContainer from "../containers/search";
import { MediaType } from "../containers/models";
import MediaMessage from "../components/media-message/media-message";

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
  height: ${(p) => (p.resx?.isBigScreen ? "3rem" : "2.5rem")};
  margin-top: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const SearchOptionToggle = styled.div<{ resx?: responsiveProps }>`
  width: 250px;
  height: ${(p) => (p.resx?.isBigScreen ? "2.5rem" : "2rem")};
  margin-left: 2rem;
`;

const MessageWrapper = styled.div`
  width: 100%;
  margin-top: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  left: 0;
  right: 0;
  margin-left: auto;
  margin-right: auto;
  top: 30%;
  transform: translateY(-30%);
`;

const SearchHome: React.FunctionComponent<{}> = () => {
  const props = useResponsive();
  const [search, setSearch] = React.useState({
    term: "",
    type: MediaType.MOVIES,
  });

  const onSearch = (val: string) => {
    setSearch({
      term: val,
      type: search.type,
    });
  };

  const handleToggleSelection = React.useCallback((opt: MediaToggleOption) => {
    if (opt.value === "movies") {
      setSearch({
        term: "",
        type: MediaType.MOVIES,
      });
    } else {
      setSearch({
        term: "",
        type: MediaType.TV,
      });
    }
  }, []);

  return (
    <SearchHomeWrapper>
      <MediaSearchBoxWrapper resx={props}>
        <MediaSearchBox onSearch={onSearch}></MediaSearchBox>
        <SearchOptionToggle resx={props}>
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
      {!search.term && (
        <MessageWrapper>
          <MediaMessage message="Search for your favorite Movies and TV shows." />
        </MessageWrapper>
      )}
      <SearchResultsWrapper>
        <SearchContainer
          type={search.type}
          query={search.term}
          key={search.term}
        />
      </SearchResultsWrapper>
    </SearchHomeWrapper>
  );
};

export default SearchHome;
