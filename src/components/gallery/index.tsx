import * as React from 'react';
import styled from 'styled-components';

import Button from '../button';
import ImageViewer from '../imageViewer';
import TipModal from '../tipModal';

interface GalleryProps {
  posts: Post[]
}

interface Post {
  url: string,
  model: string,
  address: string,
  _id: string,
}

const GalleryStyled = styled.div`
  width: auto;
  max-width: 93.5rem;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(22rem, 1fr));
  grid-gap: 2rem;
`;

const GalleryItem = styled.div`
  position: relative;
  flex: 1 0 22rem;
  margin: 1rem;
  color: #fff;
  width: auto;
  margin: 0;
  border-radius: 1rem;
`;

const GalleryItemInfo = styled.div`
  display: none;
  clear: both;
  border-radius: 1rem;

  ${GalleryItem}:hover & {
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.3);
  }
`;

const GalleryImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  border-radius: 1rem;
`;

const ButtonWrapper = styled.div`
  clear: both;
  display: block;
  margin: 5px;
`;

const Text = styled.p`
  font-family: 'Nunito Sans', sans-serif;
  color: ${(props) => props.theme.colors.grey1};
  padding: 0;
  margin: 0;
`;

const Gallery = (galleryProps: GalleryProps) => {
  const {
    posts,
  } = galleryProps;

  const [isImageViewerOpen, toggleImageViewer] = React.useState(false);
  const [imageViewerTarget, setImageViewerTarget] = React.useState<string>('');

  const [isTipModalOpen, toggleTipModal] = React.useState(false);
  const [model, setModel] = React.useState<string>('');
  const [address, setAddress] = React.useState<string>('');

  function handleViewClick(imageTarget: string) {
    setImageViewerTarget(imageTarget);
    toggleImageViewer(true);
  }

  function handleTipClick(modelTarget: string, addressTarget: string) {
    setModel(modelTarget);
    setAddress(addressTarget);
    toggleTipModal(true);
  }

  return (
    <GalleryStyled>
      <TipModal
        isOpen={isTipModalOpen}
        model={model}
        toggle={() => toggleTipModal(false)}
        modelAddress={address}
      />
      <ImageViewer
        imageSrc={imageViewerTarget}
        isOpen={isImageViewerOpen}
        toggle={() => toggleImageViewer(false)}
      />
      {posts.length > 0 ? (
        posts.map((post: Post) => (
          <GalleryItem key={post._id}>
            <GalleryImage src={post.url} alt={post.model} />
            <GalleryItemInfo>
              <ButtonWrapper>
                <Button onClick={() => handleViewClick(post.url)} secondary>
                  View
                </Button>
              </ButtonWrapper>
              <ButtonWrapper>
                <Button onClick={() => handleTipClick(post.model, post.address)}>
                  Tip
                </Button>
              </ButtonWrapper>
            </GalleryItemInfo>
          </GalleryItem>
        ))
      ) : (
        <Text>
          Nothing to show...
        </Text>
      )}
    </GalleryStyled>
  );
};

export default Gallery;
