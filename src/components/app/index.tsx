import * as React from 'react';
import * as Router from 'react-router-dom';
import {
  ThemeProvider,
} from 'styled-components';

import theme from '../../style/theme';
import GlobalStyle from '../../style/globalStyle';

import Header from '../header';
import Content from '../../routes/content';
import About from '../../routes/about';
import Footer from '../footer';

const App = () => (
  <Router.BrowserRouter>
    <>
      <ThemeProvider theme={theme}>
        <>
          <GlobalStyle />
          <Header />
          <Router.Switch>
            <Router.Route path="/" exact component={Content} />
            <Router.Route path="/about" exact component={About} />
            <Router.Route path="/about" component={Content} />
          </Router.Switch>
          <Footer />
        </>
      </ThemeProvider>
    </>
  </Router.BrowserRouter>
);

export default App;
