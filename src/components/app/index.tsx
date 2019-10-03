import * as React from 'react';
import {
  Flex,
  Box,
} from 'reflexbox';
import {
  ThemeProvider,
} from 'styled-components';

import theme from '../../style/theme';
import GlobalStyle from '../../style/globalStyle';

import Header from '../header';
import Gallery from '../gallery';

interface ImageInterface {
  /* eslint-disable-next-line camelcase */
  download_url: string
}

const App = () => {
  const [images, setImages] = React.useState<string[]>([]);

  React.useEffect(() => {
    function fetchImages() {
      setImages([
        'https://preview.redd.it/9inzl7fl03q31.jpg?width=864&auto=webp&s=36a7d23bbc53dfde03f16a93d8f2213cf95bcd08',
        'https://preview.redd.it/0t6fso9u89q31.jpg?width=576&auto=webp&s=05b386bfa69d8f94bb550e5882b19f03515ac5be',
        'https://preview.redd.it/n29sz59215q31.jpg?width=576&auto=webp&s=0d1a8d6135f7a70419438263d2ceffa181d8ef19',
        'https://i.redd.it/ysii047mf8q31.jpg',
      ]);
    }

    fetchImages();
  }, []);

  return (
    <>
      <ThemeProvider theme={theme}>
        <>
          <GlobalStyle />
          <Header />
          <Flex>
            <Box p={5}>
              <Gallery images={images} />
            </Box>
          </Flex>
        </>
      </ThemeProvider>
    </>
  );
};

export default App;
