import * as React from 'react';

import { configure } from '@storybook/react';
import { addDecorator } from '@storybook/react';
import { StoryFn } from '@storybook/addons';

import {
  ThemeProvider,
} from 'styled-components';

import theme from '../src/style/theme';
import GlobalStyle from '../src/style/globalStyle';

addDecorator((story: StoryFn) => (
  <>
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyle />
        {story()}
      </>
    </ThemeProvider>
  </>
));

const req = require.context('../src', true, /\.stories\.tsx$/);

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
