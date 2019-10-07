import React from 'react';

import { storiesOf } from '@storybook/react';

import Gallery from '.';

const posts = [
  {
    url: 'https://preview.redd.it/9inzl7fl03q31.jpg?width=864&auto=webp&s=36a7d23bbc53dfde03f16a93d8f2213cf95bcd08',
    model: 'Nedji',
    address: '0x1',
    _id: '9',
  },
  {
    url: 'https://preview.redd.it/0t6fso9u89q31.jpg?width=576&auto=webp&s=05b386bfa69d8f94bb550e5882b19f03515ac5be',
    model: 'Natsu',
    address: '0x2',
    _id: 'fzfz9',
  },
  {
    url: 'https://preview.redd.it/n29sz59215q31.jpg?width=576&auto=webp&s=0d1a8d6135f7a70419438263d2ceffa181d8ef19',
    model: 'Loona',
    address: '0x3',
    _id: '9fefefe',
  },
  {
    url: 'https://i.redd.it/ysii047mf8q31.jpg',
    model: 'Tokyo',
    address: '0x4',
    _id: '9fefeffefefe',
  },
];

storiesOf('Gallery', module)
  .add('standard', () => (
    <Gallery
      posts={posts}
    />
  ));
