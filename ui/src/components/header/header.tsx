import React from "react";
import {
  HeaderWrapper,
  SearchAndDiscover,
  SearchSettingToggle,
} from "./header.styles";
import {
  SearchIcon,
  CameraIcon,
  TvIcon,
} from "../icons";
import MediaToggle, { MediaToggleOption } from "../media-toggle/media-toggle";
import { useHistory, useLocation } from "react-router-dom";
import useResponsive from "../../effects/useResponsive";

const Header: React.FunctionComponent = () => {
  const history = useHistory();
  const location = useLocation();
  const resx = useResponsive();

  const [showLinks, setShowLinks] = React.useState({
    state: false,
    options: [] as MediaToggleOption[],
  });

  const options: MediaToggleOption[] = [
    { value: "movies", label: "movies", icon: <CameraIcon /> },
    { value: "tv", label: "television", icon: <TvIcon /> },
    { value: "search", label: "search", icon: <SearchIcon /> },
    // { value: "discover", label: "discover", icon: <CompassIcon /> },
    // { value: "help", label: "help", icon: <HelpCircleIcon /> },
  ];

  React.useEffect(() => {
    setShowLinks({
      state: true,
      options: options.map<MediaToggleOption>((opt) => {
        if (location.pathname.replace(/\//g, "") === opt.value) {
          return Object.assign({}, opt, {
            selected: true,
          });
        } else {
          return opt;
        }
      }),
    });
  }, []);

  const handleSelection = (val: MediaToggleOption | null) => {
    if (val) {
      history.push(`/${val.value}`);
    }
  };

  return (
    <HeaderWrapper resx={resx}>
      <SearchAndDiscover>
        <SearchSettingToggle>
          {showLinks.state && (
            <MediaToggle
              onSelect={handleSelection}
              options={showLinks.options}
            ></MediaToggle>
          )}
        </SearchSettingToggle>
      </SearchAndDiscover>
    </HeaderWrapper>
  );
};

export default Header;
