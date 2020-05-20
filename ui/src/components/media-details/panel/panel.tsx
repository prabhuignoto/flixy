import React from "react";
import { PanelList, PanelListItem } from "./panel.style";
import useResponsive from "../../../effects/useResponsive";

export enum tabs {
  home = "HOME",
  similar = "SIMILAR",
  recommended = "RECOMMENDED",
  reviews = "REVIEWS",
  posters = "POSTERS"
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
      {!isBigScreen && (
        <PanelListItem
          onClick={() => onSelection(tabs.posters)}
          selected={actvTab === tabs.posters}
        >
          Movie Posters
        </PanelListItem>
      )}
      <PanelListItem
        onClick={() => onSelection(tabs.similar)}
        selected={actvTab === tabs.similar}
      >
        Similar
      </PanelListItem>
      <PanelListItem
        onClick={() => onSelection(tabs.recommended)}
        selected={actvTab === tabs.recommended}
      >
        Recommended
      </PanelListItem>
      {(
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
