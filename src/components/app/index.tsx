import * as React from 'react';
import {
  Flex,
  Box,
} from 'reflexbox';

import Header from '../header';
import ImagePreview from '../imagePreview';

interface ImageInterface {
  download_url: string
}

const App = () => {
  const [images, setImages] = React.useState([]);

  React.useEffect(() => {
    async function fetchImages() {
      const res = await fetch('https://picsum.photos/v2/list');
      setImages(await res.json());
    }

    fetchImages();
  }, []);

  return (
    <>
      <Header />
      <Flex flexWrap="wrap">
        {images.map((image: ImageInterface) => (
          <Box
            key={image.download_url}
            p={3}
            width={[1, 1 / 2]}
          >
            <ImagePreview image={image.download_url} />
          </Box>
        ))}
      </Flex>
    </>
  );
}

export default App;
