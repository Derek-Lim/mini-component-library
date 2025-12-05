import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';

import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

const STYLES = {
  small: {
    padding: 4 + 'px',
    paddingLeft: 28 + 'px',
    iconSize: 20 + 'px',
    iconStroke: 1,
    fontSize: 14 + 'px',
    borderBottom: 1 + 'px',
  },
  large: {
    padding: 6 + 'px',
    paddingLeft: 42 + 'px',
    iconSize: 30 + 'px',
    iconStroke: 1.5,
    fontSize: 18 + 'px',
    borderBottom: 2 + 'px',
  },
};

const IconInput = ({ label, icon, width = 250, size, placeholder }) => {
  const [value, setValue] = React.useState('');

  return (
    <Wrapper
      style={{
        '--width': width + 'px',
        '--padding': STYLES[size].padding,
        '--paddingLeft': STYLES[size].paddingLeft,
        '--fontSize': STYLES[size].fontSize,
        '--borderBottom': STYLES[size].borderBottom,
      }}
    >
      <IconWrapper style={{ '--size': STYLES[size].iconSize }}>
        <Icon
          id={icon}
          size={STYLES[size].iconSize}
          strokeWidth={STYLES[size].iconStroke}
        />
      </IconWrapper>
      <Input
        placeholder={placeholder}
        for={label}
        value={value}
        onChange={(event) => setValue(event.target.value)}
      />
      <VisuallyHidden>{value}</VisuallyHidden>
    </Wrapper>
  );
};

const Wrapper = styled.label`
  position: relative;
  border-bottom: solid black var(--borderBottom);
  padding: var(--padding);
  padding-left: var(--paddingLeft);
  width: var(--width);
  color: ${COLORS.gray700};

  &:hover,
  &:hover input,
  &:hover input::placeholder {
    color: ${COLORS.black};
  }

  &:focus-within {
    outline: 5px auto #4374cb;
    outline-offset: 3px;
  }
`;

const IconWrapper = styled.span`
  position: absolute;
  width: var(--size);
  top: 0;
  bottom: 0;
  left: 0;
  margin: auto;
  height: var(--size);
`;

const Input = styled.input`
  border: none;
  width: var(--width);
  width: calc(var(--width) - var(--paddingLeft) - var(--padding));
  color: ${COLORS.gray700};

  font-size: var(--fontSize);

  &:not(:placeholder-shown) {
    font-weight: 700;
  }

  &:focus {
    outline: none;
  }
`;

export default IconInput;
