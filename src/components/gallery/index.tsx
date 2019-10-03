import * as React from 'react';
import styled from 'styled-components';

import Button from '../button';
import ImageViewer from '../imageViewer';
import TipModal from '../tipModal';

interface GalleryProps {
  posts: Post[]
}

interface Post {
  src: string,
  model: string,
  address: string
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

const Gallery = (galleryProps: GalleryProps) => {
  const {
    posts,
  } = galleryProps;

  const [isImageViewerOpen, toggleImageViewer] = React.useState(false);
  const [imageViewerTarget, setImageViewerTarget] = React.useState<string>('');

  const [isTipModalOpen, toggleTipModal] = React.useState(false);
  const [model, setModel] = React.useState<string>('');

  function handleViewClick(imageTarget: string) {
    setImageViewerTarget(imageTarget);
    toggleImageViewer(true);
  }

  function handleTipClick(modelTarget: string) {
    setModel(modelTarget);
    toggleTipModal(true);
  }

  return (
    <GalleryStyled>
      <TipModal
        isOpen={isTipModalOpen}
        model={model}
        toggle={() => toggleTipModal(false)}
      />
      <ImageViewer
        imageSrc={imageViewerTarget}
        isOpen={isImageViewerOpen}
        toggle={() => toggleImageViewer(false)}
      />
      {posts.map((post: Post) => (
        <GalleryItem key={post.model}>
          <GalleryImage src={post.src} alt={post.model} />
          <GalleryItemInfo>
            <ButtonWrapper>
              <Button onClick={() => handleViewClick(post.src)} secondary>
                View
              </Button>
            </ButtonWrapper>
            <ButtonWrapper>
              <Button onClick={() => handleTipClick(post.model)}>
                Tip
              </Button>
            </ButtonWrapper>
          </GalleryItemInfo>
        </GalleryItem>
      ))}
    </GalleryStyled>
  );
};

export default Gallery;
