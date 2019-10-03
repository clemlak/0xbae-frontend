import * as React from 'react';
import styled from 'styled-components';

import CloseImg from '../../assets/img/close.svg';

interface ModalProps {
  isOpen: boolean,
  imageSrc: string,
  toggle: Function,
}

interface WrapperProps {
  isOpen: boolean
}

const Wrapper = styled.div<WrapperProps>`
  display: ${(props) => (props.isOpen ? 'flex' : 'none')};
  background-color: rgba(0, 0, 0, 0.65);
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  overflow: auto;
  z-index: 2;
  align-items: center;
  justify-content: center;
`;

const Image = styled.img`
  max-width: 70%;
  max-height: 70%;
  bottom: 0;
  left: 0;
  margin: auto;
  overflow: auto;
  position: fixed;
  right: 0;
  top: 0;
  border-radius: 10px;
`;

const CloseButton = styled.img`
  height: 18px;
  position: fixed;
  top: 0;
  right: 0;
  margin-top: 20px;
  margin-right: 20px;
  cursor: pointer;
`;


const ImageViewer = (modalProps: ModalProps) => {
  const {
    isOpen,
    imageSrc,
    toggle,
  } = modalProps;

  return (
    <Wrapper isOpen={isOpen}>
      <CloseButton src={CloseImg} onClick={() => toggle()} />
      <Image src={imageSrc} />
    </Wrapper>
  );
};

export default ImageViewer;
