import * as React from 'react';

import TipModalView from './tipModalView';

interface TipModalProps {
  isOpen: boolean,
  toggle: Function,
}

function tip() {
  console.log('Tipping !');
}

const TipModal = (tipModalProps: TipModalProps) => {
  const {
    isOpen,
    toggle,
  } = tipModalProps;

  return (
    <TipModalView
      tip={tip}
      isOpen={isOpen}
      toggle={toggle}
    />
  );
};

export default TipModal;
