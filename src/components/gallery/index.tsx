import * as React from 'react';
import styled from 'styled-components';

import Button from '../button';
import ImageViewer from '../imageViewer';
import TipModal from '../tipModal';

interface GalleryProps {
  images: string[]
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
    images,
  } = galleryProps;

  const [isImageViewerOpen, toggleImageViewer] = React.useState(false);
  const [imageViewerTarget, setImageViewerTarget] = React.useState<string>('');

  const [isTipModalOpen, toggleTipModal] = React.useState(false);

  function handleViewClick(imageTarget: string) {
    setImageViewerTarget(imageTarget);
    toggleImageViewer(true);
  }

  return (
    <GalleryStyled>
      <TipModal
        isOpen={isTipModalOpen}
        toggle={() => toggleTipModal(false)}
      />
      <ImageViewer
        imageSrc={imageViewerTarget}
        isOpen={isImageViewerOpen}
        toggle={() => toggleImageViewer(false)}
      />
      {images.map((image: string) => (
        <GalleryItem key={image}>
          <GalleryImage src={image} alt={image} />
          <GalleryItemInfo>
            <ButtonWrapper>
              <Button onClick={() => handleViewClick(image)} secondary>
                View
              </Button>
            </ButtonWrapper>
            <ButtonWrapper>
              <Button onClick={() => toggleTipModal(true)}>
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
