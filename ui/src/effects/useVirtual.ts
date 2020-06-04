import React, { useEffect } from "react";

export interface Configs {
  itemsToHideLeft: number;
  itemsToShow: number;
  itemsToHideRight: number;
  shouldLoadMore: boolean;
  visibleElements: number;
}

export default function useVirtual(): any {

  const [inputs, setInputs] = React.useState({
    visibleElements: 0,
    page: 0,
    totalItems: 0
  })

  const [config, setConfig] = React.useState({
    itemsToHideLeft: 0,
    itemsToShow: 0,
    itemsToHideRight: 0,
    shouldLoadMore: false,
    visibleElements: 0
  })

  useEffect(() => {
    if (inputs.visibleElements) {
      let itemsToHideLeft = 0;
      const { page, visibleElements, totalItems } = inputs;

      if (page === 1) {
        itemsToHideLeft = 0;
      } else if (page > 1) {
        itemsToHideLeft = (page - 1) * visibleElements;
      }
      const remainingElements = totalItems - itemsToHideLeft;
      const itemsToShow =
        remainingElements >= visibleElements
          ? visibleElements
          : remainingElements;
      setConfig({
        itemsToHideLeft,
        itemsToShow,
        itemsToHideRight: remainingElements - itemsToShow,
        shouldLoadMore: remainingElements < visibleElements,
        visibleElements
      })
    }

  }, [inputs]);

  return [
    config,
    setInputs
  ];
}