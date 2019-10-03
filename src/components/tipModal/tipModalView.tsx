import * as React from 'react';
import {
  Flex,
  Box,
} from 'reflexbox';
import styled from 'styled-components';

import Modal from '../modal';
import TokenIcon from '../tokenIcon';
import Selectable from '../selectable';
import Input from '../input';

interface TipModalProps {
  isOpen: boolean,
  toggle: Function,
  tip: Function,
}

const Text = styled.p`
  font-family: 'Nunito Sans', sans-serif;
  color: #ddd;
`;

const Amount = styled.p`
  font-family: 'Nunito Sans', sans-serif;
  color: #000;
  font-size: 25px;
  font-weight: 900;
`;

const TipModalView = (tipModalProps: TipModalProps) => {
  const {
    toggle,
    tip,
    isOpen,
  } = tipModalProps;

  const [activeToken, setActiveToken] = React.useState<string>('');
  const [amount, setAmount] = React.useState<number>(0);

  return (
    <Modal
      title="Tip some model"
      buttonAction={tip}
      buttonText="Tip"
      isOpen={isOpen}
      toggle={toggle}
    >
      <Flex flexWrap="wrap">
        <Box width={1} py={3}>
          <Amount>
            {amount}
          </Amount>
          <Text>
            How much tokens do you want to tip?
          </Text>
        </Box>
        <Box width={[1, 1 / 2, 1 / 3]} py={1}>
          <Selectable
            isSelected={activeToken === 'SPANK'}
            onClick={() => setActiveToken('SPANK')}
          >
            <>
              <TokenIcon src="https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x42d6622dece394b54999fbd73d108123806f6a18/logo.png" />
              SPANK
            </>
          </Selectable>
        </Box>
        <Box width={[1, 1 / 2, 1 / 3]} py={1}>
          <Selectable
            isSelected={activeToken === 'DAI'}
            onClick={() => setActiveToken('DAI')}
          >
            <>
              <TokenIcon src="https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x89d24a6b4ccb1b6faa2625fe562bdd9a23260359/logo.png" />
              DAI
            </>
          </Selectable>
        </Box>
        <Box width={[1, 1 / 2, 1 / 3]} py={1}>
          <Selectable
            isSelected={activeToken === 'ETH'}
            onClick={() => setActiveToken('ETH')}
          >
            <>
              <TokenIcon src="https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2/logo.png" />
              ETH
            </>
          </Selectable>
        </Box>
      </Flex>
    </Modal>
  );
};

export default TipModalView;
