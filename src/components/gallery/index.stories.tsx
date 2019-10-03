import React from 'react';

import { storiesOf } from '@storybook/react';

import Gallery from '.';

const images = [
  'https://picsum.photos/id/10/2500/1667',
  'https://picsum.photos/id/1/5616/3744',
  'https://picsum.photos/id/100/2500/1656',
  'https://picsum.photos/id/1003/1181/1772',
  'https://picsum.photos/id/1024/1920/1280',
];

storiesOf('Gallery', module)
  .add('standard', () => (
    <Gallery
      images={images}
    />
  ));
