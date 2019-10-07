import * as React from 'react';
import * as Router from 'react-router-dom';
import {
  Flex,
  Box,
} from 'reflexbox';
import styled from 'styled-components';

import Button from '../button';
import UploadModal from '../uploadModal';

import MenuSvg from '../../assets/img/menu.svg';

const Logo = styled(Router.NavLink)`
  font-family: 'Nunito Sans';
  font-weight: 700;
  color: ${(props) => props.theme.colors.main};
  font-size: 32px;
  text-decoration: none;

  &:hover {
    text-decoration: none;
  }
`;

const Navbar = styled(Box)`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

const NavItem = styled(Box)`
  text-align: right;
  display: flex;
  justify-content: flex-end;

  @media (max-width: 460px) {
    display: none;
  }
`;

const NavLink = styled(Router.NavLink)`
  font-family: 'Nunito Sans';
  color: ${(props) => props.theme.colors.main};
`;

const DrawerButton = styled(Box)`
  text-align: right;
  cursor: pointer;

  @media (min-width: 460px) {
    display: none;
  }
`;

const DrawerItem = styled(Box)`
  text-align: center;
  display: flex;
  justify-content: center;
`;

interface DrawerInterface {
  isOpen: boolean,
}

const Drawer = styled(Flex)<DrawerInterface>`
  && {
    display: ${(props) => (props.isOpen ? 'initial' : 'none')};
  }
`;

const Header = () => {
  const [isUploadModalOpen, toggleUploadModal] = React.useState<boolean>(false);
  const [isDrawerOpen, toggleDrawer] = React.useState<boolean>(false);

  return (
    <>
      <UploadModal
        toggle={() => toggleUploadModal(!toggleUploadModal)}
        isOpen={isUploadModalOpen}
      />
      <Flex mx={[2, 3, 5]} mt={3} mb={[2, 3, 4]} flexWrap="wrap">
        <Box width={1 / 2}>
          <Logo to="/">
            <span role="img" aria-label="logo">
              🍑 0xbae
            </span>
          </Logo>
        </Box>
        <Navbar width={1 / 2}>
          <NavItem width={[1 / 2]}>
            <NavLink to="/about">
              About
            </NavLink>
          </NavItem>
          <NavItem width={[1 / 2]}>
            <Button
              onClick={() => toggleUploadModal(!isUploadModalOpen)}
            >
              Upload
            </Button>
          </NavItem>
          <DrawerButton width={[1 / 2]}>
            <div
              role="button"
              onClick={() => toggleDrawer(!isDrawerOpen)}
              onKeyPress={() => toggleDrawer(!isDrawerOpen)}
              tabIndex={0}
            >
              <img
                src={MenuSvg}
                alt="menu"
                height={24}
              />
            </div>
          </DrawerButton>
        </Navbar>
        <Drawer width={1} mx={3} mt={3} mb={3} isOpen={isDrawerOpen} flexWrap="wrap">
          <DrawerItem width={1} my={1}>
            <NavLink to="/about">
              About
            </NavLink>
          </DrawerItem>
          <DrawerItem width={1} my={1}>
            <Button
              onClick={() => toggleUploadModal(!isUploadModalOpen)}
            >
              Upload
            </Button>
          </DrawerItem>
        </Drawer>
      </Flex>
    </>
  );
};

export default Header;
