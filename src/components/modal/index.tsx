import * as React from 'react';
import styled from 'styled-components';
import {
  Flex,
  Box,
} from 'reflexbox/styled-components';

import CloseIcon from '../../assets/img/close_black.svg';

interface Props {
  isOpen: boolean,
  title: string,
  children: string | JSX.Element | JSX.Element[],
  toggle: Function,
}

interface WrapperProps {
  isOpen: boolean
}

const Wrapper = styled.div<WrapperProps>`
  background-color: rgba(0, 0, 0, 0.65);
  display: ${(props) => (props.isOpen ? 'flex' : 'none')};
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
  max-width: 80vh;
  width: 100%;
  border-radius: 15px;
`;

const Title = styled.span`
  font-family: 'Nunito Sans', sans-serif;
  font-weight: 400;
  font-size: 18px;
`;

const CloseButton = styled.img`
  height: 14px;
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
    toggle,
  } = props;

  return (
    <Wrapper isOpen={isOpen}>
      <Content>
        <Flex>
          <TitleBox width={1 / 2} p={3}>
            <Title>
              {title}
            </Title>
          </TitleBox>
          <CloseBox width={1 / 2} p={3}>
            <CloseButton src={CloseIcon} alt="close" onClick={() => toggle()} />
          </CloseBox>
        </Flex>
        <Flex>
          <Box p={3} width={1}>
            {children}
          </Box>
        </Flex>
      </Content>
    </Wrapper>
  );
}

export default Modal;
