/* eslint-disable no-unused-vars */
import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";
import VisuallyHidden from "../VisuallyHidden";

const ProgressBar = ({ value, size }) => {
  let rightRadius;
  if (value === 100) {
    rightRadius = "4px";
  } else if (value > 99.5) {
    rightRadius = "3px";
  } else if (value > 99) {
    rightRadius = "2px";
  } else if (value > 98.5) {
    rightRadius = "1px";
  } else {
    rightRadius = "0";
  }

  return (
    <>
      <Progress
        value={value}
        aria-valuenow={value}
        role="progressbar"
        max="100"
        style={SIZES[size]}
        rightRadius={rightRadius}
      ></Progress>
      <VisuallyHidden>Progress Bar</VisuallyHidden>
    </>
  );
};

const SIZES = {
  small: {
    "--height": "8px",
    "--radius": "4px",
    "--padding": "0",
  },
  medium: {
    "--height": "12px",
    "--radius": "4px",
    "--padding": "0",
  },
  large: {
    "--height": "24px",
    "--radius": "8px",
    "--padding": "4px",
  },
};

const Progress = styled.progress`
  width: 370px;
  height: var(--height);

  -webkit-appearance: none;
  appearance: none;

  &::-webkit-progress-bar {
    box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
    border-radius: var(--radius);
    padding: var(--padding);
    background-color: ${COLORS.transparentGray15};
  }

  &::-webkit-progress-value {
    border-top-left-radius: 4px;
    border-bottom-left-radius: 4px;
    border-top-right-radius: ${(prop) => prop.rightRadius};
    border-bottom-right-radius: ${(prop) => prop.rightRadius};
    background-color: ${COLORS.primary};
  }
`;

export default ProgressBar;
