import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import UploadModal from '.';

storiesOf('UploadModal', module)
  .add('standard', () => (
    <UploadModal
      toggle={action('Toggle')}
      isOpen
    />
  ));
