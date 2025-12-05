import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';

import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

const IconInput = ({ label, icon, width = 250, size, ...delegated }) => {
  const IconSize = size === 'small' ? 16 : 24;
  const Input = size === 'small' ? SmallInput : LargeInput;

  return (
    <Wrapper>
      <VisuallyHidden>{label}</VisuallyHidden>
      <IconWrapper style={{ '--size': IconSize + 'px' }}>
        <Icon id={icon} size={IconSize} />
      </IconWrapper>
      <Input {...delegated} style={{ '--width': width + 'px' }} />
    </Wrapper>
  );
};

const Wrapper = styled.label`
  position: relative;
  color: ${COLORS.gray500};

  &:hover,
  &:hover input::placeholder,
  &:hover div {
    color: ${COLORS.black};
  }
`;

const IconWrapper = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto 0;
  height: var(--size);
  color: ${COLORS.gray700};
`;

const TextInput = styled.input`
  width: var(--width);
  border: none;
  color: inherit;
  font-weight: 700;

  &::placeholder {
    font-weight: 400;
  }

  &:focus {
    outline: solid auto #4374cb;
    outline-offset: 2px;
  }
`;

const SmallInput = styled(TextInput)`
  height: 24px;
  font-size: ${14 / 16}rem;
  padding-left: 24px;
  border-bottom: 1px solid ${COLORS.black};
`;

const LargeInput = styled(TextInput)`
  height: 36px;
  font-size: ${18 / 16}rem;
  padding-left: 36px;
  border-bottom: 2px solid ${COLORS.black};
`;

export default IconInput;
