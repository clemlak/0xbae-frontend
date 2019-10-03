import * as React from 'react';
import styled from 'styled-components';

interface InputProps {
  block?: boolean,
  value?: number,
  placeholder?: string,
  onChange: Function,
}

const InputStyled = styled.input<InputProps>`
  font-family: 'Nunito Sans', sans-serif;
  width: ${(props) => props.block && '100%'};
  box-sizing: border-box;
  padding-left: 0.75rem;
  padding-right: 0.75rem;
  height: 2.5rem;
  color: #000;
  font-size: 14px;
  line-height: 24px;
  border-radius: 6px;
  border-width: 1px;
  border-style: solid;
  border-image: initial;
  border-color: #000;
  background: #fff;

  &:focus {
    outline: none;
  }
`;

const Input = (inputProps: InputProps) => {
  const {
    value,
    onChange,
    placeholder,
    block,
  } = inputProps;

  return (
    <InputStyled
      value={value}
      onChange={(e: React.ChangeEvent<HTMLInputElement>) => onChange(e.target.value)}
      placeholder={placeholder}
      block={block}
    />
  );
};

export default Input;
