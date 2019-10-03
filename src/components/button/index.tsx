import * as React from 'react';
import styled from 'styled-components';

interface Props {
  secondary?: boolean,
  block?: boolean,
  onClick: Function,
  children: string | JSX.Element | JSX.Element[]
}

interface WrapperProps {
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
  color: ${(props) => (props.secondary ? '#f9639f' : '#fff')};
  background-color: ${(props) => (props.secondary ? '#fff' : '#f9639f')};
  font-weight: 400;
  font-size: 14px;
  border-radius: 1000rem;
  border: none;
  transition: all 0.2s ease-in-out 0s;

  &:hover {
    color: #fff;
    background-color: ${(props) => (props.secondary ? '#f9639f' : '#fa7fb0')};
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
  } = props;

  return (
    <Wrapper
      onClick={() => onClick()}
      block={block}
      secondary={secondary}
    >
      {children}
    </Wrapper>
  );
}

export default Button;
