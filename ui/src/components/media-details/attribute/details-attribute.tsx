import React from "react";
import {
  AttributeLabel, 
  AttributeValue,
  AttributeWrapper,
} from "./details-attribute.style";

export interface AttributeModel {
  label: string;
  value: string | number;
}

const RunTime: React.FunctionComponent<AttributeModel> = ({ label, value }) => (
  <AttributeWrapper>
    <AttributeLabel>
      <span>{label}</span>
    </AttributeLabel>
    <AttributeValue>{value}</AttributeValue>
  </AttributeWrapper>
);

export default RunTime;
