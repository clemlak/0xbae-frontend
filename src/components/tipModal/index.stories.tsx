import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import TipModalView from './tipModalView';

storiesOf('TipModal', module)
  .add('standard', () => (
    <TipModalView
      tip={action('Tip')}
      toggle={action('Close')}
      model="Jaspi"
      buttonText="Tip"
      isOpen
    />
  ));
