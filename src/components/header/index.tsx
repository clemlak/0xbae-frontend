import * as React from 'react';
import {
  Flex,
  Box,
} from 'reflexbox';
import styled from 'styled-components';

import Button from '../button';

const Title = styled.h1`
  font-family: 'Nunito Sans';
  font-weight: 900;
  color: #F9639F;
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
    <Box width={1 / 2} p={3}>
      <Button
        onClick={() => {}}
      >
        Upload
      </Button>
    </Box>
  </Flex>
);

export default Header;
