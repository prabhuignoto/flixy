import React from "react";
import {
  HeaderWrapper,
  SearchAndDiscover,
  SearchSettingToggle,
} from "./header.styles";
import { SearchIcon, CompassIcon, CameraIcon, TvIcon } from "../icons";
import MediaToggle, { MediaToggleOption } from "../media-toggle/media-toggle";
import { useHistory } from "react-router-dom";

const Header: React.FunctionComponent = () => {
  const history = useHistory();

  const handleSelection = (val: MediaToggleOption) => {
    if (val) {
      history.push(`/${val.value}`);
    }
  };

  return (
    <HeaderWrapper>
      <SearchAndDiscover>
        <SearchSettingToggle>
          <MediaToggle
            onSelect={handleSelection}
            options={[
              { value: "movies", label: "movies", icon: <CameraIcon /> },
              { value: "tv", label: "tv", icon: <TvIcon /> },
              { value: "search", label: "search", icon: <SearchIcon /> },
              { value: "discover", label: "discover", icon: <CompassIcon /> },
            ]}
          ></MediaToggle>
        </SearchSettingToggle>
      </SearchAndDiscover>
    </HeaderWrapper>
  );
};

export default Header;
