import {
  Box,
  Flex,
  HStack,
  Button,
  IconButton,
  useDisclosure,
  useColorModeValue,
} from "@chakra-ui/react";

import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";

export default function Simple() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box bg={useColorModeValue("gray.100", "gray.900")} px={4}>
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <IconButton
            size={"md"}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={"Open Menu"}
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
          />
          <Flex
            spacing={8}
            alignItems={"center"}
            justifyContent={"space-between"}
            gap={8}
          >
            <Box>
              <Link to={"/"}>Logo</Link>
            </Box>

            {/* Navbar Links here */}
            <Box>
              <Link to={"/login"}>Login</Link>
            </Box>
            <Box>
              <Link to={"/register"}>Sign-up</Link>
            </Box>
            <Box>
              <Link to={"/user"}>Profile</Link>
            </Box>
          </Flex>
        </Flex>
      </Box>
    </>
  );
}
