import React from "react";
import {
  AttributeLabel,
  AttributeValue,
  AttributeWrapper,
} from "./details-attribute.style";
import useResponsive from "../../../effects/useResponsive";

export interface AttributeModel {
  label: string;
  value: string | number;
}

const RunTime: React.FunctionComponent<AttributeModel> = ({ label, value }) => {
  const resxProps = useResponsive();

  return (
    <AttributeWrapper resx={resxProps}>
      <AttributeLabel resx={resxProps}>
        <span>{label}</span>
      </AttributeLabel>
      <AttributeValue resx={resxProps}>{value}</AttributeValue>
    </AttributeWrapper>
  );
};

export default RunTime;
