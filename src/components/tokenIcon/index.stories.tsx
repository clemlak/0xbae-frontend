import React from 'react';

import { storiesOf } from '@storybook/react';

import TokenIcon from '.';

storiesOf('TokenIcon', module)
  .add('standard', () => (
    <TokenIcon
      src="https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x42d6622dece394b54999fbd73d108123806f6a18/logo.png"
    />
  ));
