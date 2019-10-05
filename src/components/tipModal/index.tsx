import * as React from 'react';

import {
  Web3Context,
} from '../../store/web3Wrapper';

import TipModalView from './tipModalView';

interface TipModalProps {
  isOpen: boolean,
  toggle: Function,
  model: string,
}

function tip() {
  console.log('Tipping !');
}

const TipModal = (tipModalProps: TipModalProps) => {
  const {
    isOpen,
    toggle,
    model,
  } = tipModalProps;

  const state = React.useContext(Web3Context);

  const {
    address,
  } = state;

  const [buttonText, setButtonText] = React.useState<string>('');

  React.useEffect(() => {
    if (address) {
      setButtonText('Tip');
    }
  }, [address]);

  return (
    <TipModalView
      tip={tip}
      isOpen={isOpen}
      model={model}
      toggle={toggle}
      buttonText={buttonText}
    />
  );
};

export default TipModal;
