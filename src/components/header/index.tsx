import * as React from 'react';
import {
  Flex,
  Box,
} from 'reflexbox';
import styled from 'styled-components';

const Title = styled.h1`
  font-family: 'Nunito Sans';
  font-weight: 900;
  color: #F9639F;
`;

const Header = () => (
  <Flex>
    <Box width={1 / 2} p={3}>
      <Title>
        0xbae
      </Title>
    </Box>
    <Box width={1 / 2}>
      <h1>
        Hello
      </h1>
    </Box>
  </Flex>
);

export default Header;
