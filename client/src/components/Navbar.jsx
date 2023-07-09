import React from "react";
import { useState } from "react";
import {
  Box,
  Flex,
  Spacer,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  IconButton,
  useDisclosure,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isMobile, setIsMobile] = useState(false);

  const handleResize = () => {
    setIsMobile(window.innerWidth < 768);
  };

  useState(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <Box bg="gray.200" px={4} py={2}>
      <Flex alignItems="center">
        <Box display={{ base: "block", md: "none" }}>
          <IconButton
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            variant="ghost"
            onClick={isOpen ? onClose : onOpen}
          />
        </Box>

        <Box display={{ base: "none", md: "block" }}>
          <Logo />
        </Box>

        {isMobile ? (
          <Menu>
            <MenuButton as={Button} variant="ghost" ml={2}>
              Menu
            </MenuButton>
            <MenuList>
              <MenuItem>Profile</MenuItem>
              <MenuItem>Login/Register</MenuItem>
              <MenuItem>Logout</MenuItem>
            </MenuList>
          </Menu>
        ) : (
          <React.Fragment>
            <Spacer />

            <Box display={{ base: "none", md: "block" }}>
              <Button variant="ghost" mr={2}>
                Profile
              </Button>
              <Button variant="ghost" mr={2}>
                Login/Register
              </Button>
              <Button variant="ghost" mr={2}>
                Logout
              </Button>
            </Box>
          </React.Fragment>
        )}
      </Flex>
    </Box>
  );
};

const Logo = () => {
  return (
    <Box>
      {/* Add your logo here */}
      <span>Logo</span>
    </Box>
  );
};

export default Navbar;
