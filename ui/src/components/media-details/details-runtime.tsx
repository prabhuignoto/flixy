import React from "react";
import { RunTimeLabel, ClockIconWrapper, RuntimeValue, RunTimeWrapper } from "./details-runtime.style";
import { ClockIcon } from "../icons";

export interface RunTimeModel {
  runtime: number;
}

const RunTime: React.FunctionComponent<RunTimeModel> = ({ runtime }) => (
  <RunTimeWrapper>
    <RunTimeLabel>
      <ClockIconWrapper>
        <ClockIcon />
      </ClockIconWrapper>
      <span>Runtime</span>
    </RunTimeLabel>
    <RuntimeValue>{`${Math.round(runtime / 60)}hrs`}</RuntimeValue>
  </RunTimeWrapper>
);


export default RunTime;