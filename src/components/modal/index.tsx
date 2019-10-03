import * as React from 'react';
import styled from 'styled-components';
import {
  Flex,
  Box,
} from 'reflexbox/styled-components';

import CloseIcon from '../../assets/img/close.svg';

interface Props {
  isOpen: boolean,
  title?: string,
  children: string | JSX.Element | JSX.Element[]
}

interface WrapperProps {
  isOpen: boolean
}

const Wrapper = styled.div<WrapperProps>`
  display: ${(props) => (props.isOpen ? 'flex' : 'none')};
  background-color: rgba(0, 0, 0, 0.33);
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

const Content = styled.div`
  background-color: #fff;
  max-height: 65vh;
  min-height: 60vh;
  width: 65vw;
  max-width: 650px;
  margin: 0;
  padding: 0px;
  overflow: hidden;
  border-radius: 10px;
`;

const Title = styled.span`
  font-family: 'Nunito Sans', sans-serif;
  font-weight: 400;
  font-size: 18px;
`;

const CloseButton = styled.img`
  height: 18px;
`;

const TitleBox = styled(Box)`
`;

const CloseBox = styled(Box)`
  text-align: right;
`;

function Modal(props: Props) {
  const {
    children,
    isOpen,
    title,
  } = props;

  return (
    <Wrapper isOpen={isOpen}>
      <Content>
        <Flex>
          <TitleBox width={1 / 2} p={2}>
            <Title>
              {title}
            </Title>
          </TitleBox>
          <CloseBox width={1 / 2} p={2}>
            <CloseButton src={CloseIcon} alt="close" />
          </CloseBox>
        </Flex>
        {children}
      </Content>
    </Wrapper>
  );
}

export default Modal;
