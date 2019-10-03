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
  color: #F9639F;
`;

const Navbar = styled(Box)`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

const Header = () => (
  <Flex>
    <Box width={1 / 2} p={3}>
      <Title>
        <span role="img" aria-label="logo">
          🍑
        </span>
        {' '}
        0xbae
      </Title>
    </Box>
    <Navbar width={1 / 2} p={3}>
      <Button
        onClick={() => {}}
      >
        Upload
      </Button>
    </Navbar>
  </Flex>
);

export default Header;
