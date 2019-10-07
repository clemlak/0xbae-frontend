import * as React from 'react';
import styled from 'styled-components';

interface InputProps {
  block?: boolean,
  value?: string,
  placeholder?: string,
  onChange: Function,
}

const InputStyled = styled.input<InputProps>`
  font-family: 'Nunito Sans', sans-serif;
  width: ${(props) => props.block && '100%'};
  box-sizing: border-box;
  padding: 10px 10px;
  color: ${(props) => props.theme.colors.black};
  font-size: 14px;
  font-weight: 400;
  background: none;
  border: ${(props) => `1.5px solid ${props.theme.colors.main}`};
  border-radius: 0px;
  caret-color: ${(props) => props.theme.colors.main};
  border-right-color: transparent;
  border-left-color: transparent;
  border-top-color: transparent;
  transition: all 0.2s ease-in-out 0s;

  &::placeholder {
    color: ${(props) => props.theme.colors.grey4};
  }

  &:focus {
    outline: none;
    transition: all 0.2s ease-in-out 0s;
    border-color: ${(props) => props.theme.colors.main};
    border-radius: 15px;
  }
`;

const Input = (inputProps: InputProps) => {
  const {
    value,
    onChange,
    placeholder,
    block = false,
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
