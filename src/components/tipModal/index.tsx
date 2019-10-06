import * as React from 'react';

import {
  Web3Context,
} from '../../store/web3Wrapper';

import {
  sendTokens,
} from '../../utils/utils';

import TipModalView from './tipModalView';

interface TipModalProps {
  isOpen: boolean,
  toggle: Function,
  model: string,
  modelAddress: string,
}

function returnButtonText(
  web3: any,
  isReady: boolean,
  tipAmount: number,
  token: string,
  ethBalance: number,
  spankBalance: number,
  daiBalance: number,
  txState: string,
) {
  if (!web3) {
    return 'No Web3 provider';
  }

  if (!isReady) {
    return 'Unlock your account';
  }

  if (token === 'DAI' && tipAmount > daiBalance) {
    return 'Insufficient funds';
  }

  if (token === 'ETH' && tipAmount > ethBalance) {
    return 'Insufficient funds';
  }

  if (token === 'SPANK' && tipAmount > spankBalance) {
    return 'Insufficient funds';
  }

  if (txState === 'confirm') {
    return 'Please confirm the tx...';
  }

  if (txState === 'pending') {
    return 'Tx is pending...';
  }

  if (txState === 'done') {
    return 'Model tipped! Close modal';
  }

  return 'Tip';
}

function isButtonDisabled(
  web3: any,
  isReady: boolean,
  tipAmount: number,
  token: string,
  ethBalance: number,
  spankBalance: number,
  daiBalance: number,
  txState: string,
) {
  if (!web3) {
    return true;
  }

  if (!isReady) {
    return false;
  }

  if (txState === 'done') {
    return false;
  }

  if (token === 'DAI' && tipAmount > daiBalance) {
    return true;
  }

  if (token === 'ETH' && tipAmount > ethBalance) {
    return true;
  }

  if (token === 'SPANK' && tipAmount > spankBalance) {
    return true;
  }

  if (token === '') {
    return true;
  }

  if (tipAmount === 0 || !tipAmount) {
    return true;
  }

  if (txState !== '') {
    return true;
  }

  return false;
}

async function tip(
  web3: any,
  isReady: boolean,
  from: string,
  tipAmount: number,
  to: string,
  token: string,
  dispatch: Function,
  txState: string,
  setTxState: Function,
  toggle: Function,
) {
  if (!isReady) {
    try {
      await window.ethereum.enable();

      dispatch({
        target: 'isReady',
        value: true,
        type: 'set',
      });
    } catch (e) {
      console.log(e);
    }

    return;
  }

  if (txState === 'done') {
    toggle();
    return;
  }

  if (isReady) {
    setTxState('pending');

    try {
      await sendTokens(
        web3,
        from,
        token,
        tipAmount,
        to,
      );

      setTxState('done');
    } catch (e) {
      console.log(e);

      setTxState('error');
    }
  }
}

const TipModal = (tipModalProps: TipModalProps) => {
  const {
    isOpen,
    toggle,
    model,
    modelAddress,
  } = tipModalProps;

  const state = React.useContext(Web3Context);
  const [tipAmount, setTipAmount] = React.useState<number>(0);
  const [activeToken, setActiveToken] = React.useState<string>('');
  const [txState, setTxState] = React.useState<string>('');

  const {
    isReady,
    web3,
    address,
    ethBalance,
    daiBalance,
    spankBalance,
    dispatch,
  } = state;

  React.useEffect(() => {
    if (!isOpen) {
      setTipAmount(0);
      setActiveToken('');
      setTxState('');
    }
  }, [isOpen]);

  return (
    <TipModalView
      tip={() => tip(
        web3,
        isReady,
        address,
        tipAmount,
        modelAddress,
        activeToken,
        dispatch,
        txState,
        setTxState,
        toggle,
      )}
      isOpen={isOpen}
      model={model}
      toggle={toggle}
      buttonText={returnButtonText(
        web3,
        isReady,
        tipAmount,
        activeToken,
        ethBalance,
        spankBalance,
        daiBalance,
        txState,
      )}
      isButtonDisabled={isButtonDisabled(
        web3,
        isReady,
        tipAmount,
        activeToken,
        ethBalance,
        spankBalance,
        daiBalance,
        txState,
      )}
      tipAmount={tipAmount}
      activeToken={activeToken}
      onAmountUpdate={(val: number) => setTipAmount(val)}
      onTokenUpdate={(val: string) => setActiveToken(val)}
    />
  );
};

export default TipModal;
