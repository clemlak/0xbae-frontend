import * as React from 'react';
import {
  Flex,
  Box,
} from 'reflexbox';
import styled from 'styled-components';

import Modal from '../modal';
import TokenIcon from '../tokenIcon';
import Selectable from '../selectable';
import Button from '../button';
import AmountInput from '../amountInput';

interface TipModalProps {
  isOpen: boolean,
  toggle: Function,
  tip: Function,
  model: string,
  buttonText: string,
  tipAmount: number,
  activeToken: string,
  onAmountUpdate: Function,
  onTokenUpdate: Function,
  isButtonDisabled: boolean,
}

const Text = styled.p`
  font-family: 'Nunito Sans', sans-serif;
  color: ${(props) => props.theme.colors.grey1};
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
    model,
    buttonText,
    isButtonDisabled,
    onAmountUpdate,
    onTokenUpdate,
    tipAmount,
    activeToken,
  } = tipModalProps;

  return (
    <Modal
      title={`Tipping ${model}`}
      isOpen={isOpen}
      toggle={toggle}
    >
      <Flex flexWrap="wrap">
        <Box width={1} mb={2}>
          <Text>
            How much tokens do you want to tip?
          </Text>
        </Box>
        <Box width={1} mb={3}>
          <AmountInput
            value={tipAmount}
            onChange={(val: number) => onAmountUpdate(val)}
            block
          />
        </Box>
        <TokensWrapper mb={4} flexWrap="wrap">
          <Box m={1}>
            <Selectable
              isSelected={activeToken === 'SPANK'}
              onClick={() => onTokenUpdate('SPANK')}
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
              onClick={() => onTokenUpdate('DAI')}
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
              onClick={() => onTokenUpdate('ETH')}
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
            disabled={isButtonDisabled}
            block
          >
            {buttonText}
          </Button>
        </Box>
      </Flex>
    </Modal>
  );
};

export default TipModalView;
