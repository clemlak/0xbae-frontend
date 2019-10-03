import * as React from 'react';
import styled from 'styled-components';

interface Props {
  image: string
}

interface WrapperProps {
  image: string
}

const Wrapper = styled.div<WrapperProps>`
  width: 100%;
  height: 300px;
  background-image: ${(props) => `url(${props.image})`};
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
`;

const ImagePreview = (props: Props) => {
  const {
    image,
  } = props;

  return (
    <Wrapper
      image={image}
    />
  );
};

export default ImagePreview;
