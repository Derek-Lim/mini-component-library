import React, { createElement } from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import Icon from '../Icon';
import { getDisplayedValue } from './Select.helpers';
import { Columns } from 'react-feather';

const estimateWidth = (value, fontSize) =>
  Math.round(value.length * fontSize * 0.5 + 50);

const Select = ({ label, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children);

  const width = estimateWidth(displayedValue, 16) + 'px';

  return (
    <>
      <SelectWrapper>
        <SelectElement
          value={value}
          onChange={onChange}
          style={{ '--width': width }}
        >
          {children}
        </SelectElement>
        <IconWrapper>
          <Icon id="chevron-down" strokeWidth="1.5" />
        </IconWrapper>
      </SelectWrapper>
    </>
  );
};

const SelectWrapper = styled.div`
  position: relative;
  display: inline-block;

  &:hover select,
  :hover div {
    color: black;
  }
`;

const SelectElement = styled.select`
  -webkit-appearance: none;
  appearance: none;
  width: var(--width);

  background-color: ${COLORS.transparentGray15};
  color: ${COLORS.gray700};
  border: none;
  border-radius: 8px;
  padding: 12px 16px;
`;

const IconWrapper = styled.div`
  color: ${COLORS.gray700};
  position: absolute;
  height: fit-content;
  margin: auto;
  top: 0;
  bottom: 0;
  right: 10px;
`;

export default Select;
