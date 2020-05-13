import React from "react";
import { PanelList, PanelListItem } from "./panel.style";
import useResponsive from "../../../effects/useResponsive";

export enum tabs {
  home = "HOME",
  similar = "SIMILAR",
  recommended = "RECOMMENDED",
  reviews = "REVIEWS",
}

const Panel: React.FunctionComponent<{
  actvTab: tabs;
  onSelection: (selectedTab: tabs) => void;
}> = ({ actvTab, onSelection }) => {
  const { isBigScreen } = useResponsive();
  return (
    <PanelList>
      <PanelListItem
        onClick={() => onSelection(tabs.home)}
        selected={actvTab === tabs.home}
      >
        About
      </PanelListItem>
      <PanelListItem
        onClick={() => onSelection(tabs.similar)}
        selected={actvTab === tabs.similar}
      >
        Similar Movies
      </PanelListItem>
      <PanelListItem
        onClick={() => onSelection(tabs.recommended)}
        selected={actvTab === tabs.recommended}
      >
        Recommended Movies
      </PanelListItem>
      {!isBigScreen && (
        <PanelListItem
          onClick={() => onSelection(tabs.reviews)}
          selected={actvTab === tabs.reviews}
        >
          Reviews
        </PanelListItem>
      )}
    </PanelList>
  );
};

export default Panel;
