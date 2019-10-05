import * as React from 'react';
import styled from 'styled-components';

interface AmountInputProps {
  block?: boolean,
  value?: number,
  onChange: Function,
}

const AmountInputStyled = styled.input<AmountInputProps>`
  box-sizing: border-box;
  font-family: 'Nunito Sans', sans-serif;
  width: ${(props) => props.block && '100%'};
  padding: 10px 10px;
  color: ${(props) => props.theme.colors.black};
  font-size: 45px;
  font-weight: 700;
  background: none;
  border: ${(props) => `1.5px solid ${props.theme.colors.main}`};
  border-radius: 0px;
  caret-color: ${(props) => props.theme.colors.main};
  text-align: center;
  border-right-color: transparent;
  border-left-color: transparent;
  border-top-color: transparent;
  transition: all 0.2s ease-in-out 0s;

  &::placeholder {
    color: ${(props) => props.theme.colors.grey4};
  }

  &::-webkit-inner-spin-button,
  &::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  &:focus {
    outline: none;
    transition: all 0.2s ease-in-out 0s;
    border-color: ${(props) => props.theme.colors.main};
    border-radius: 15px;
  }
`;

const AmountInput = (amountInputProps: AmountInputProps) => {
  const {
    value,
    onChange,
    block = false,
  } = amountInputProps;

  return (
    <AmountInputStyled
      type="number"
      placeholder="0"
      value={value}
      onChange={(e: React.ChangeEvent<HTMLInputElement>) => onChange(e.target.value)}
      block={block}
    />
  );
};

export default AmountInput;
