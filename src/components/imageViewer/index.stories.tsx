import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import ImageViewer from '.';

storiesOf('ImageViewer', module)
  .add('standard', () => (
    <ImageViewer
      imageSrc="https://preview.redd.it/n29sz59215q31.jpg?width=576&auto=webp&s=0d1a8d6135f7a70419438263d2ceffa181d8ef19"
      toggle={action('Toggle')}
      isOpen
    />
  ));
