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
    async function fetchPosts() {
      const res = await fetch('https://0xbae-backend-2c60r5xu8.now.sh/');
      const json = await res.json();
      setPosts(json);
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
