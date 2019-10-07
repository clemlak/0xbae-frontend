import * as React from 'react';
import {
  Flex,
  Box,
} from 'reflexbox';

import {
  Title,
  Subtitle,
  Text,
  Highlight,
} from '../../style/components';

const About = () => (
  <Flex flexWrap="wrap">
    <Box mx={[1, 3, 5]} mb={3} width={1}>
      <Title>
        About
      </Title>
    </Box>
    <Box mx={[1, 3, 5]} mb={2} width={1}>
      <Subtitle>
        What is 0xbae?
      </Subtitle>
    </Box>
    <Box mx={[1, 3, 5]} mb={3} width={1}>
      <Text>
        <Highlight>0xbae </Highlight>
        is a (proof-of-concept) platform for online models. The goal is to offer a simple way to upload content online and get some tips in return.
        <br />
        <br />
        <b>Warning: the current implementation is for demo purposes only!</b>
      </Text>
    </Box>
    <Box mx={[1, 3, 5]} mb={2} width={1}>
      <Subtitle>
        How to use it?
      </Subtitle>
    </Box>
    <Box mx={[1, 3, 5]} mb={3} width={1}>
      <Text>
        Please be sure to use MetaMask (or another injected Web3 wallet) and to be connected to the Rinkeby network.
        <br />
        You will be able to send Rinkeby ETH to the models, and you can get some of our
        {' '}
        <a
          href="https://rinkeby.etherscan.io/token/0x2cd829003d746e57118a6153bdfa71039f0b8d78#writeContract"
          target="_blank"
          rel="noopener noreferrer"
        >
          TESTTOKEN
        </a>
        {' '}
        to mimic the SPANK and DAI tokens.
      </Text>
    </Box>
  </Flex>
);

export default About;
