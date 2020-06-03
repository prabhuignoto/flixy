import React, { ChangeEvent, KeyboardEvent } from "react";
import {
  SearchBoxWrapper,
  SearchInput,
  GoButton,
  SearchIconWrapper,
} from "./media-searchbox.styles";
import { SearchIcon, ArrowRightIcon } from "../icons";

export interface MediaSearchboxModel {
  onSearch: (term: string) => void;
}

const MediaSearchBox: React.FunctionComponent<MediaSearchboxModel> = ({
  onSearch,
}) => {
  const [inputState, setInputState] = React.useState("");

  const handleChange = (event: ChangeEvent) => {
    const val = (event.target as HTMLInputElement).value;
    setInputState(val);
  };

  React.useEffect(() => {
    if(!inputState) {
      onSearch && onSearch(inputState);
    }
  }, [inputState])

  const handleSearch = () => {
    if (inputState) {
      onSearch && onSearch(inputState);
    }
  };

  const handleEnter = (event: KeyboardEvent) => {
    if (event.which === 13) {
      onSearch && onSearch(inputState);
    }
  };

  return (
    <SearchBoxWrapper>
      <SearchIconWrapper>
        <SearchIcon color="#bdbdbd"></SearchIcon>
      </SearchIconWrapper>
      <SearchInput
        value={inputState}
        onChange={handleChange}
        onKeyPress={handleEnter}
        type="text"
      ></SearchInput>
      {inputState && (
        <GoButton onClick={handleSearch}>
          <ArrowRightIcon color="#cc0000"></ArrowRightIcon>
        </GoButton>
      )}
    </SearchBoxWrapper>
  );
};

export default MediaSearchBox;
