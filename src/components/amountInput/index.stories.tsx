import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import AmountInput from '.';

storiesOf('AmountInput', module)
  .add('standard', () => (
    <AmountInput
      onChange={() => action('Updated')}
      value={0}
    />
  ));
