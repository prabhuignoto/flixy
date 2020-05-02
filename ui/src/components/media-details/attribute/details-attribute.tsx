import React from "react";
import {
  AttributeLabel,
  IconWrapper,
  AttributeValue,
  AttributeWrapper,
} from "./details-attribute.style";
import { ClockIcon } from "../../icons";

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
