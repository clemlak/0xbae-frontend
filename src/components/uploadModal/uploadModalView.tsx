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
  onUsernameUpdate: Function,
  onPicUrlUpdate: Function,
  upload: Function,
  buttonText: string,
  isUploadButtonDisabled: boolean,
  username: string,
  picUrl: string,
}

const Text = styled.p`
  font-family: 'Nunito Sans', sans-serif;
  color: ${(props) => props.theme.colors.grey1};
  padding: 0;
  margin: 0;
`;

const UploadModalView = (uploadModalProps: UploadModalProps) => {
  const {
    toggle,
    isOpen,
    upload,
    isUploadButtonDisabled,
    buttonText,
    onUsernameUpdate,
    onPicUrlUpdate,
    username,
    picUrl,
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
            value={picUrl}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => onPicUrlUpdate(e)}
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
            value={username}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => onUsernameUpdate(e)}
            placeholder="Your username"
            block
          />
        </Box>
        <Box width={1} mb={2}>
          <Button
            onClick={upload}
            block
            disabled={isUploadButtonDisabled}
          >
            {buttonText}
          </Button>
        </Box>
      </Flex>
    </Modal>
  );
};

export default UploadModalView;
