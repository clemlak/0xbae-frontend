import * as React from 'react';
import {
  Flex,
  Box,
} from 'reflexbox';
import styled from 'styled-components';
import numeral from 'numeral';

import Modal from '../modal';
import TokenIcon from '../tokenIcon';
import Selectable from '../selectable';
import Button from '../button';
import Slider from '../slider';

interface TipModalProps {
  isOpen: boolean,
  toggle: Function,
  tip: Function,
}

const Text = styled.p`
  font-family: 'Nunito Sans', sans-serif;
  color: ${(props) => props.theme.colors.grey1};
  padding: 0;
  margin: 0;
`;

const Amount = styled.p`
  font-family: 'Nunito Sans', sans-serif;
  color: ${(props) => props.theme.colors.black};
  font-size: 45px;
  font-weight: 700;
  text-align: center;
  padding: 0;
  margin: 0;
`;

const TokensWrapper = styled(Flex)`
  justify-content: center;
  text-align: center;
  margin: 0 auto !important;
`;

const TipModalView = (tipModalProps: TipModalProps) => {
  const {
    toggle,
    tip,
    isOpen,
  } = tipModalProps;

  const [activeToken, setActiveToken] = React.useState<string>('');
  const [amount, setAmount] = React.useState<number>(0);

  React.useEffect(() => {
    if (!isOpen) {
      setAmount(0);
      setActiveToken('');
    }
  }, [isOpen]);

  const calculateStep = (token: string) => {
    switch (token) {
      case 'SPANK':
        return 100;
      case 'BOOTY':
        return 1;
      case 'DAI':
        return 1;
      default:
        return 1;
    }
  };

  return (
    <Modal
      title="Tip some model"
      isOpen={isOpen}
      toggle={toggle}
    >
      <Flex flexWrap="wrap">
        <Box width={1} mb={2}>
          <Text>
            How much tokens do you want to tip?
          </Text>
        </Box>
        <Box width={1}>
          <Amount>
            {numeral(amount).format('0,0')}
          </Amount>
        </Box>
        <Box width={1} mb={3}>
          <Slider
            step={calculateStep(activeToken)}
            min={0}
            max={10000}
            value={amount}
            onChange={(val: number) => setAmount(val)}
          />
        </Box>
        <TokensWrapper mb={2} flexWrap="wrap">
          <Box m={1}>
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
          <Box m={1}>
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
          <Box m={1}>
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
        </TokensWrapper>
        <Box width={1} mt={3}>
          <Button
            onClick={() => tip()}
            disabled={amount === 0 || activeToken === ''}
            block
          >
            Tip
          </Button>
        </Box>
      </Flex>
    </Modal>
  );
};

export default TipModalView;
