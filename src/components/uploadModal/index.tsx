import * as React from 'react';
import {
  Flex,
  Box,
} from 'reflexbox';
import styled from 'styled-components';

import Modal from '../modal';
import Button from '../button';
import Input from '../input';

interface UploadModalProps {
  toggle: Function,
  isOpen: boolean,
}

const Text = styled.p`
  font-family: 'Nunito Sans', sans-serif;
  color: ${(props) => props.theme.colors.grey1};
  padding: 0;
  margin: 0;
`;

const UploadModal = (uploadModalProps: UploadModalProps) => {
  const {
    toggle,
    isOpen,
  } = uploadModalProps;

  return (
    <Modal
      title="Upload a pic"
      isOpen={isOpen}
      toggle={toggle}
    >
      <Flex flexWrap="wrap">
        <Box width={1} mb={2}>
          <Text>
            Paste the link of your pic
          </Text>
        </Box>
        <Box width={1} mb={3}>
          <Input
            onChange={() => {}}
            placeholder="https://website.com/my-pic"
            block
          />
        </Box>
        <Box width={1} mb={2}>
          <Text>
            What&apos;s your username?
          </Text>
        </Box>
        <Box width={1} mb={4}>
          <Input
            onChange={() => {}}
            placeholder="Your username"
            block
          />
        </Box>
        <Box width={1} mb={2}>
          <Button
            onClick={() => {}}
            block
          >
            Upload
          </Button>
        </Box>
      </Flex>
    </Modal>
  );
};

export default UploadModal;
