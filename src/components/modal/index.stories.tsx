import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import Modal from '.';

storiesOf('Modal', module)
  .add('standard', () => (
    <Modal
      title="Hello"
      toggle={action('Close')}
      isOpen
    >
      <h1>
        Hello!
      </h1>
    </Modal>
  ));
