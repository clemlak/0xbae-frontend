import * as React from 'react';
import styled from 'styled-components';

interface Props {
  disabled?: boolean,
  secondary?: boolean,
  block?: boolean,
  onClick: Function,
  children: string | JSX.Element | JSX.Element[]
}

interface WrapperProps {
  disabled?: boolean,
  block: boolean,
  secondary: boolean
}

const Wrapper = styled.button<WrapperProps>`
  font-family: 'Nunito Sans', sans-serif;
  width: ${(props) => props.block && '100%'};
  min-width: 100px;
  display: block;
  justify-content: center;
  align-items: center;
  padding-left: 1.5rem;
  padding-right: 1.5rem;
  height: 2.5rem;
  cursor: pointer;
  color: ${(props) => (props.secondary ? props.theme.colors.main : props.theme.colors.white)};
  background-color: ${(props) => (props.secondary ? props.theme.colors.white : props.theme.colors.main)};
  font-weight: 400;
  font-size: 14px;
  border-radius: 1000rem;
  border: none;
  transition: all 0.2s ease-in-out 0s;

  color: ${(props) => (props.disabled && props.theme.colors.white)};
  background-color: ${(props) => (props.disabled && props.theme.colors.grey1)};
  cursor: ${(props) => (props.disabled ? 'no-drop' : 'pointer')};

  &:hover {
    color: ${(props) => props.theme.colors.white};
    background-color: ${(props) => (props.secondary ? props.theme.colors.main : props.theme.colors.secondary)};

    color: ${(props) => (props.disabled && props.theme.colors.white)};
    background-color: ${(props) => (props.disabled && props.theme.colors.grey1)};
    cursor: ${(props) => (props.disabled ? 'no-drop' : 'pointer')};
  }

  &:focus {
    outline: none;
  }
`;

function Button(props: Props) {
  const {
    children,
    onClick,
    block = false,
    secondary = false,
    disabled = false,
  } = props;

  return (
    <Wrapper
      onClick={() => onClick()}
      block={block}
      secondary={secondary}
      disabled={disabled}
    >
      {children}
    </Wrapper>
  );
}

export default Button;
