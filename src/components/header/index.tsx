import * as React from 'react';
import {
  Flex,
  Box,
} from 'reflexbox';
import styled from 'styled-components';

import Button from '../button';

const Title = styled.h1`
  font-family: 'Nunito Sans';
  font-weight: 700;
  color: ${(props) => props.theme.colors.main};
`;

const Navbar = styled(Box)`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

const Header = () => (
  <Flex px={5} py={3} flexWrap="wrap">
    <Box width={1 / 2}>
      <Title>
        <span role="img" aria-label="logo">
          🍑
        </span>
        {' '}
        0xbae
      </Title>
    </Box>
    <Navbar width={1 / 2}>
      <Button
        onClick={() => {}}
      >
        Upload
      </Button>
    </Navbar>
  </Flex>
);

export default Header;
