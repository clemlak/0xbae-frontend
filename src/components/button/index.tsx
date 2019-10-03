import * as React from 'react';
import styled from 'styled-components';

interface Props {
  block?: boolean,
  onClick: Function,
  children: string | JSX.Element | JSX.Element[]
}

interface WrapperProps {
  block: boolean
}

const Wrapper = styled.button<WrapperProps>`
  font-family: 'Nunito Sans', sans-serif;
  width: ${(props) => props.block && '100%'};
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  padding-left: 1.5rem;
  padding-right: 1.5rem;
  height: 2.5rem;
  cursor: pointer;
  color: #fff;
  font-weight: 400;
  font-size: 14px;
  border-radius: 1000rem;
  border: none;
  background: #1DB954;
  transition: all 0.2s ease-in-out 0s;

  &:hover {
    background: #1ED76A;
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
  } = props;

  return (
    <Wrapper
      onClick={() => onClick()}
      block={block}
    >
      {children}
    </Wrapper>
  );
}

export default Button;
