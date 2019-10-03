import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import Button from '.';

storiesOf('Button', module)
  .add('standard', () => <Button onClick={action('clicked')}>Hello Button</Button>)
  .add('block', () => <Button onClick={action('clicked')} block>Hello Button</Button>)
  .add('secondary', () => <Button onClick={action('clicked')} secondary>Hello Button</Button>)
  .add('secondary block', () => <Button onClick={action('clicked')} block secondary>Hello Button</Button>);
