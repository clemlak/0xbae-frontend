import * as React from 'react';

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

  return (
    <TipModalView
      tip={tip}
      isOpen={isOpen}
      model={model}
      toggle={toggle}
    />
  );
};

export default TipModal;
