import * as React from 'react';
import {
  Flex,
  Box,
} from 'reflexbox';
import Gallery from '../gallery';

interface ImageInterface {
  /* eslint-disable-next-line camelcase */
  download_url: string
}

interface Post {
  src: string,
  model: string,
  address: string
}

const Content = () => {
  const [posts, setPosts] = React.useState<Post[]>([]);

  React.useEffect(() => {
    function fetchPosts() {
      setPosts([
        {
          src: 'https://preview.redd.it/9inzl7fl03q31.jpg?width=864&auto=webp&s=36a7d23bbc53dfde03f16a93d8f2213cf95bcd08',
          model: 'Nedji',
          address: '0x1',
        },
        {
          src: 'https://preview.redd.it/0t6fso9u89q31.jpg?width=576&auto=webp&s=05b386bfa69d8f94bb550e5882b19f03515ac5be',
          model: 'Natsu',
          address: '0x2',
        },
        {
          src: 'https://preview.redd.it/n29sz59215q31.jpg?width=576&auto=webp&s=0d1a8d6135f7a70419438263d2ceffa181d8ef19',
          model: 'Loona',
          address: '0x3',
        },
        {
          src: 'https://i.redd.it/ysii047mf8q31.jpg',
          model: 'Tokyo',
          address: '0x4',
        },
      ]);
    }

    fetchPosts();
  }, []);

  return (
    <Flex>
      <Box mx={[1, 3, 5]}>
        <Gallery posts={posts} />
      </Box>
    </Flex>
  );
};

export default Content;
