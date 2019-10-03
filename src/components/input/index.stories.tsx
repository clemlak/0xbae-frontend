import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import Input from '.';

storiesOf('Input', module)
  .add('standard', () => (
    <Input
      onChange={() => action('Updated')}
      placeholder="How much?"
    />
  ))
  .add('standard block', () => (
    <Input
      onChange={() => action('Updated')}
      placeholder="How much?"
      block
    />
  ))
  .add('large', () => (
    <Input
      onChange={() => action('Updated')}
      placeholder="How much?"
      large
    />
  ))
  .add('large block', () => (
    <Input
      onChange={() => action('Updated')}
      placeholder="How much?"
      large
      block
    />
  ));
