import * as React from 'react';
import {
  Flex,
  Box,
} from 'reflexbox';
import {
  createGlobalStyle,
} from 'styled-components';

import Header from '../header';
import Gallery from '../gallery';

interface ImageInterface {
  /* eslint-disable-next-line camelcase */
  download_url: string
}

const GlobalStyle = createGlobalStyle`
  html,
  body {
    margin: 0;
    padding: 0;
  }
`;

const App = () => {
  const [images, setImages] = React.useState<string[]>([]);

  React.useEffect(() => {
    async function fetchImages() {
      const res = await fetch('https://picsum.photos/v2/list');
      const data = await res.json();

      const imagesBuf: string[] = [];

      for (let i = 0; i < data.length; i += 1) {
        imagesBuf.push(data[i].download_url);
      }

      setImages(imagesBuf);
    }

    fetchImages();
  }, []);

  return (
    <>
      <GlobalStyle />
      <Header />
      <Flex>
        <Box p={5}>
          <Gallery images={images} />
        </Box>
      </Flex>
    </>
  );
};

export default App;
