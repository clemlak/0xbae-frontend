import * as React from 'react';
import {
  ThemeProvider,
} from 'styled-components';

import theme from '../../style/theme';
import GlobalStyle from '../../style/globalStyle';

import Header from '../header';
import Content from '../content';

const App = () => (
  <>
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyle />
        <Header />
        <Content />
      </>
    </ThemeProvider>
  </>
);

export default App;
