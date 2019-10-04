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
  z-index: 50;
  align-items: center;
  justify-content: center;
`;

const Content = styled.div`
  background-color: ${(props) => props.theme.colors.white};
  max-width: 60vh;
  width: 100%;
  border-radius: 15px;
  z-index: 100;
`;

const Title = styled.span`
  font-family: 'Nunito Sans', sans-serif;
  font-weight: 400;
  font-size: 18px;
`;

const CloseButton = styled.img`
  height: 14px;
  cursor: pointer;
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

  React.useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'initial';
    }
  }, [isOpen]);

  const contentRef = React.useRef<HTMLDivElement>(null);

  function handleClick(e: React.SyntheticEvent) {
    if (contentRef.current && !contentRef.current.contains(e.target as Node)) {
      toggle();
    }
  }

  return (
    <Wrapper isOpen={isOpen} onClick={(e) => handleClick(e)}>
      <Content ref={contentRef}>
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
