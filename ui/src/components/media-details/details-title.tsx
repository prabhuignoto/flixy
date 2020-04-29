import React from "react";
import { Title } from "./details-title.style";

export interface DetailsTitleModel {
  year?: string;
  title?: string;
}

const DetailsTitle: React.FunctionComponent<DetailsTitleModel> = ({
  year,
  title,
}) => {
  debugger;
  const formattedYear = year ? new Date(year).getFullYear() : "";
  return <Title>{`${title} (${formattedYear})`}</Title>;
};


export default DetailsTitle;