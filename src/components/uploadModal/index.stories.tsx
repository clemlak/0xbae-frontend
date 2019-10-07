import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import UploadModalView from './uploadModalView';

storiesOf('UploadModal', module)
  .add('standard', () => (
    <UploadModalView
      toggle={action('Toggle')}
      isOpen
      onUsernameUpdate={(val: string) => action(val)}
      onPicUrlUpdate={(val: string) => action(val)}
      upload={action('Upload')}
    />
  ));
