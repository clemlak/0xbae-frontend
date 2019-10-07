import * as React from 'react';
import {
  Flex,
  Box,
} from 'reflexbox';
import styled from 'styled-components';

import {
  Text,
} from '../../style/components';

const FooterWrapper = styled(Box)`
  text-align: center;
`;

const Footer = () => (
  <Flex mt={5} mb={4} flexWrap="wrap">
    <FooterWrapper width={1}>
      <Text>
        &copy; 2019 0xbae
      </Text>
    </FooterWrapper>
  </Flex>
);

export default Footer;
