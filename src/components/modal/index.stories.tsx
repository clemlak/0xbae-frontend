import React from 'react';

import { storiesOf } from '@storybook/react';

import Modal from '.';

storiesOf('Modal', module)
  .add('standard', () => (
    <Modal
      title="Hello"
      isOpen
    >
      <h1>
        Hello!
      </h1>
    </Modal>
  ))
  .add('closed', () => (
    <Modal isOpen={false}>
      <h1>
        Hello!
      </h1>
    </Modal>
  ));
