import * as React from 'react';
import styled from 'styled-components';

import Button from '../button';

interface GalleryProps {
  images: string[]
}

const GalleryStyled = styled.div`
  width: auto;
  margin: 0;
  display: flex;
  flex-wrap: wrap;
  margin: -1rem -1rem;
  padding-bottom: 3rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(22rem, 1fr));
  grid-gap: 2rem;
`;

const GalleryItem = styled.div`
  position: relative;
  flex: 1 0 22rem;
  margin: 1rem;
  color: #fff;
  cursor: pointer;
  width: auto;
  margin: 0;
`;

const GalleryItemInfo = styled.div`
  display: none;

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
`;

const Gallery = (galleryProps: GalleryProps) => {
  const {
    images,
  } = galleryProps;

  return (
    <GalleryStyled>
      {images.map((image: string) => (
        <GalleryItem>
          <GalleryImage src={image} alt={image} />
          <GalleryItemInfo>
            <Button onClick={() => {}}>
              Tip
            </Button>
          </GalleryItemInfo>
        </GalleryItem>
      ))}
    </GalleryStyled>
  );
};

export default Gallery;
