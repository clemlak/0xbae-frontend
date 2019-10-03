import React from 'react';

import { storiesOf } from '@storybook/react';

import Selectable from '.';
import TokenIcon from '../tokenIcon';

let isSelected = false;

/* Broken test, useState should be used here, sorry! */

function handleClick() {
  isSelected = !isSelected;
}

storiesOf('Selectable', module)
  .add('standard', () => (
    <Selectable
      isSelected={isSelected}
      onClick={() => handleClick()}
    >
      Pizza
    </Selectable>
  ))
  .add('standard with emoji', () => (
    <Selectable
      isSelected={isSelected}
      onClick={() => handleClick()}
    >
      <>
        <span aria-label="pizza" role="img">🍕</span>
        Pizza
      </>
    </Selectable>
  ))
  .add('standard with image', () => (
    <Selectable
      isSelected={isSelected}
      onClick={() => handleClick()}
    >
      <>
        <TokenIcon src="https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x42d6622dece394b54999fbd73d108123806f6a18/logo.png" />
        SPANK
      </>
    </Selectable>
  ));
