import * as React from 'react';
import styled from 'styled-components';

interface TokenIconProps {
  src: string,
}

const TokenIconStyled = styled.img`
  width: 2rem;
  height: 2rem;
  background-color: ${(props) => props.theme.colors.white};
  border-radius: 1rem;
  margin-right: 5px;
`;

const TokenIcon = (tokenIconprops: TokenIconProps) => {
  const {
    src,
  } = tokenIconprops;

  return (
    <TokenIconStyled src={src} />
  );
};

export default TokenIcon;
