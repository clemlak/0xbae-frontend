import * as React from 'react';
import {
  Flex,
  Box,
} from 'reflexbox';
import styled from 'styled-components';

import Button from '../button';
import UploadModal from '../uploadModal';

const Logo = styled.h1`
  font-family: 'Nunito Sans';
  font-weight: 700;
  color: ${(props) => props.theme.colors.main};
`;

const Navbar = styled(Box)`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

const Header = () => {
  const [isUploadModalOpen, toggleUploadModal] = React.useState<boolean>(false);

  return (
    <>
      <UploadModal
        toggle={() => toggleUploadModal(!toggleUploadModal)}
        isOpen={isUploadModalOpen}
      />
      <Flex mx={[1, 3, 5]} mt={2} mb={[1, 2, 3]} flexWrap="wrap">
        <Box width={1 / 2}>
          <Logo>
            <span role="img" aria-label="logo">
              🍑 0xbae
            </span>
          </Logo>
        </Box>
        <Navbar width={1 / 2}>
          <Button
            onClick={() => toggleUploadModal(!isUploadModalOpen)}
          >
            Upload
          </Button>
        </Navbar>
      </Flex>
    </>
  );
};

export default Header;
