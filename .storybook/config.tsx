import * as React from 'react';

import { configure } from '@storybook/react';
import { addDecorator } from '@storybook/react';
import { StoryFn } from '@storybook/addons';

import GlobalStyle from '../src/style/globalStyle';

addDecorator((story: StoryFn) => (
  <>
    <GlobalStyle />
    {story()}
  </>
));

const req = require.context('../src', true, /\.stories\.tsx$/);

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
